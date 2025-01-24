import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import MainContainer from "../../layouts/container/MainContainer";
import { useParams } from "react-router-dom";
import ProductDetailsCard from "../../components/shared/ProductDetailsCard/ProductDetailsCard";
import DetailedProductInfo from "../../components/shared/ProductDetailsCard/DetailedProductInfo";
import RelatedProducts from "../../components/shared/ProductDetailsCard/RelatedProducts";
import ProductDetailsCardSkeleton from "../../components/shared/ProductDetailsCard/ProductDetailsCardSkeleton";
import DetailedProductInfoSkeleton from "../../components/shared/ProductDetailsCard/DetailedProductInfoSkeleton";

const fetchProductData = async (productId) => {
    const response = await axios.get('/json/products.json');
    return response.data.find((product) => product.productId === productId); // Assuming each product has a unique productId
};

const ProductDetails = () => {
    const { productId } = useParams();  // Get productId from URL params

    // Fetch product details using Tanstack Query
    const { data: productData, isLoading } = useQuery({
        queryKey: ['productDetails', productId],
        queryFn: () => fetchProductData(productId),
        enabled: !!productId,  // Ensures the query doesn't run unless productId is available
    });

    if (isLoading) {
        return (
            <MainContainer>
                <ProductDetailsCardSkeleton />
                <DetailedProductInfoSkeleton />
            </MainContainer>
        );
    }

    return (
        <div>
            <ProductDetailsCard productData={productData} />
            <DetailedProductInfo productData={productData} />
            <RelatedProducts productCategory={productData?.category} productId={productId} />
        </div>
    );
};

export default ProductDetails;
