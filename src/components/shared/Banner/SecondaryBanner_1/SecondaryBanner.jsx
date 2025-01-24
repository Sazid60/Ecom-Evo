
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SecondaryBannerSkeleton from "./SecondaryBannerSkeleton";
import SecondaryBannerSlider from "./SecondaryBannerSlider";
import MainContainer from "../../../../layouts/container/MainContainer";
import SmallButton from "../../Button/SmallButton";

// Fetch slider data
const fetchSliderData = async () => {
    const response = await axios.get("/json/slider.json");
    return response.data;
};

// Skeleton Loader Component (Matching the Banner Layout)


const SecondaryBanner = () => {
    const { data: sliderData, isLoading } = useQuery({
        queryKey: ["sliderData"],
        queryFn: fetchSliderData
    });

    if (isLoading) return <SecondaryBannerSkeleton />;

    return (
        <MainContainer>
            <div className="flex flex-col xl:flex-row justify-between items-center gap-5 rounded-lg">
                {/* Left Section with Fashion Text */}
                <div className=" text-center md:text-left mb-8 md:mb-0">
                    <h1 className="text-7xl md:text-8xl font-highlight uppercase font-extrabold text-gray-900 leading-tight">
                        New Season Trends
                    </h1>
                    <p className="font-secondary text-sm  text-gray-600 mt-4 mb-8">
                        Explore our latest fashion collection designed for elegance and style. Refresh your wardrobe with our exclusive arrivals.
                    </p>
                    <SmallButton buttonLink={"#_"} buttonText={'Shop Now'} />
                </div>

                {/* Right Section with Swiper Slider */}
                <div className="w-full xl:w-1/2 mt-5 xl:mt-0">
                    <SecondaryBannerSlider sliderData={sliderData} />
                </div>
            </div>
        </MainContainer>

    );
};

export default SecondaryBanner;
