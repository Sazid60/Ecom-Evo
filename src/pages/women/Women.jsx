import axios from "axios";
import ProductCard from "../../components/shared/Product-Card/ProductCard";
import MainContainer from "../../layouts/container/MainContainer";
import { useQuery } from "@tanstack/react-query";
import ProductCardSkeleton from "../../components/shared/Product-Card/ProductCardSkeleton";
import { useState } from "react";
import SecondaryTitle from "../../components/shared/Title/SecondaryTitle";
import FilterSection from "../../components/shared/Filter/FilterSection";
import FilterSidebar from "../../components/shared/Filter/FilterSidebar";
import FilterSidebarButton from "../../components/shared/Button/FilterSidebarButton";

const fetchProducts = async () => {
    const response = await axios.get('/json/products.json');
    return response.data;
};



const Women = () => {
    const { data: allProducts, isLoading } = useQuery({ queryKey: ['womenCategory'], queryFn: fetchProducts });
    const [currentPage, setCurrentPage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
    const productsPerPage = 10;

    const menProducts = Array.isArray(allProducts)
        ? allProducts.filter(product => product?.category === 'Women')
        : [];

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = menProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(menProducts.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <SecondaryTitle title={"For Her"} titleDesc={"Explore the vast collection for Women here"} />
            <MainContainer>
                <div className="flex flex-col xl:flex-row justify-between xl:gap-10">
                    {/* Sidebar for large screens */}
                    <div className="hidden xl:block w-[20%] px-4 border-r-2 sticky top-0 h-screen overflow-y-auto">
                        <FilterSection />
                    </div>

                    {/* Sidebar Button for Small and Medium Devices */}
                    <FilterSidebarButton setIsSidebarOpen={setIsSidebarOpen} />

                    {/* Sliding Sidebar */}
                    <FilterSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                    {/* Products Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 2xl:grid-cols-5 gap-6 w-full xl:w-[80%]">
                        {isLoading
                            ? Array.from({ length: 12 }).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))
                            : currentProducts.map((product) => (
                                <ProductCard key={product.productId} product={product} />
                            ))}
                    </div>
                </div>

                {/* Stylish Pagination Controls */}
                <div className="flex justify-end mt-8 space-x-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2  transition-all duration-300 ${currentPage === 1 ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-black text-white hover:bg-gray-700'}`}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 border  transition-all duration-300 ${currentPage === index + 1
                                ? 'bg-black text-white border-black'
                                : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2  transition-all duration-300 ${currentPage === totalPages ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-black text-white hover:bg-gray-700'}`}
                    >
                        Next
                    </button>
                </div>
            </MainContainer>
        </>
    );
};

export default Women;
