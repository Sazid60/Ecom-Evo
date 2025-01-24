import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import MainContainer from "../../../layouts/container/MainContainer";
import ProductCard from "../../shared/Product-Card/ProductCard";
import Title from "../../shared/Title/Title";
import ProductCardSkeleton from '../../shared/Product-Card/ProductCardSkeleton';

// Fetch function for products
const fetchProducts = async () => {
    const response = await Axios.get('/json/products.json');
    return response.data;
};



const NewArrivals = () => {
    // Fetch product data
    const { data: allProducts, isLoading } = useQuery({ queryKey: ['newArrivals'], queryFn: fetchProducts });

    // Check if allProducts is an array, then filter for new arrivals
    const newArrivalProducts = Array.isArray(allProducts)
        ? allProducts.filter(product => product.type === 'new-arrival')
        : [];

    // Sort by createdAt (assuming it exists), then limit to 12 most recent products
    const sortedProducts = newArrivalProducts
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const limitedProducts = sortedProducts.slice(0, 12);

    return (
        <>
            <Title title={'New Arrivals'} titleDesc={'Explore new arrivals for this season'} />

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

export default NewArrivals;
