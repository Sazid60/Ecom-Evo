import MainContainer from "../../../../layouts/container/MainContainer";

const SecondaryBannerSkeleton = () => (
    <MainContainer>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 rounded-lg animate-pulse">
            {/* Left Section Skeleton */}
            <div className="max-w-lg text-center md:text-left mb-8 md:mb-0">
                <div className="h-12 w-3/4 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 w-4/5 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 w-2/3 bg-gray-300 rounded mb-6"></div>
                <div className="h-12 w-40 bg-gray-300 rounded"></div>
            </div>

            {/* Right Section Skeleton (Slider Area) */}
            <div className="w-full md:w-1/2">
                <div className="h-[400px] w-full bg-gray-300 rounded-lg"></div>

                {/* Arrows Skeleton */}
                <div className="flex justify-center md:justify-start items-center gap-6 mt-6">
                    <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                    <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                </div>
            </div>
        </div>
    </MainContainer>
);

export default SecondaryBannerSkeleton