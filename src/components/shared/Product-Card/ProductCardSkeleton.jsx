
const ProductCardSkeleton = () => {
    return (
        <div className="group relative cursor-pointer overflow-hidden animate-pulse">
            <div className="w-full h-[350px] bg-gray-300"></div>
            <div className="absolute top-4 right-4 h-12 w-12 bg-gray-300"></div>
            <div className="absolute top-10 left-4 flex flex-col space-y-4">
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gray-300 opacity-70 h-12"></div>
            <div className="text-center mt-2 bg-gray-300 h-4"></div>
            <div className="flex justify-between items-center mt-2 p-1">
                <div className="w-20 h-4 bg-gray-300"></div>
                <div className="w-12 h-4 bg-gray-300"></div>
            </div>
            <hr className="mt-2" />
        </div>
    );
};

export default ProductCardSkeleton;