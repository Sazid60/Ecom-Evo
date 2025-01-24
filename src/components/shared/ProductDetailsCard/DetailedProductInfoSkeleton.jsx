import MainContainer from "../../../layouts/container/MainContainer";

const DetailedProductInfoSkeleton = () => (
    <MainContainer>
        <div className="mt-10 animate-pulse">
            <div className="bg-gray-300 w-1/3 h-6 mb-4"></div>
            <div className="bg-gray-300 w-full h-16 mb-4"></div>
            <div className="bg-gray-300 w-full h-16 mb-4"></div>
        </div>
    </MainContainer>
);

export default DetailedProductInfoSkeleton