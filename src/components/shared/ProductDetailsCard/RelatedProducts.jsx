/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import Axios from "axios"; // Correctly import Axios
import MainContainer from "../../../layouts/container/MainContainer";
import Title from "../Title/Title";
import ProductCard from "../Product-Card/ProductCard";
import ProductCardSkeleton from "../Product-Card/ProductCardSkeleton";

const fetchProducts = async () => {
    const response = await Axios.get('/json/products.json');
    return response.data;
};

const RelatedProducts = ({ productCategory, productId }) => {
    const { data: allProducts, isLoading } = useQuery({
        queryKey: ['related-products'],
        queryFn: fetchProducts,
    });

    // Check if related products is an array, then filter for related category and exclude the current productId
    const relatedProducts = Array.isArray(allProducts)
        ? allProducts.filter(
            product => product?.category === productCategory && product?.productId !== productId // Skip same productId
        )
        : [];

    // Limit the displayed products to 12
    const limitedProducts = relatedProducts.slice(0, 12);

    return (
        <>
            <Title title={"Related Products"} titleDesc={"Explore more products from this category"} />
            <MainContainer>
                <div className="grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-6 gap-6">
                    {isLoading
                        ? Array.from({ length: 12 }).map((_, index) => (
                            <ProductCardSkeleton key={index} />
                        ))
                        : limitedProducts.map(product => (
                            <ProductCard key={product.productId} product={product} />
                        ))}
                </div>
            </MainContainer>
        </>
    );
};

export default RelatedProducts;
