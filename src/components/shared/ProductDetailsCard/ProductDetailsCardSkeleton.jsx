const ProductDetailsCardSkeleton = () => (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-0 md:gap-5 xl:gap-10 max-w-6xl container mx-auto px-4 sm:px-8 animate-pulse">
        <div className="w-full lg:w-[50%] xl:w-[40%] mb-8 md:mb-0">
            <div className="bg-gray-300 w-full h-[350px] rounded-md"></div>
        </div>
        <div className="w-full lg:w-[50%] xl:w-[60%]">
            <div className="bg-gray-300 h-8 mb-4 w-3/4"></div>
            <div className="flex gap-4 mb-6">
                <div className="bg-gray-300 w-24 h-6"></div>
                <div className="bg-gray-300 w-16 h-6"></div>
            </div>
            <div className="bg-gray-300 w-full h-6 mb-6"></div>
            <div className="flex gap-4 mt-6">
                <div className="bg-gray-300 w-24 h-6"></div>
                <div className="bg-gray-300 w-24 h-6"></div>
            </div>
            <div className="flex gap-4 mt-6">
                <div className="bg-gray-300 w-24 h-6"></div>
                <div className="bg-gray-300 w-24 h-6"></div>
            </div>
        </div>
    </div>
);

export default ProductDetailsCardSkeleton