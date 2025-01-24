
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const SecondaryBannerSlider = ({ sliderData }) => {
    // console.log(sliderData);
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                navigation={{
                    nextEl: ".next-slide",
                    prevEl: ".prev-slide"
                }}
                speed={2500}
                easing="ease-in-out"
                grabCursor={true}
                centeredSlides={true}
                touchRatio={1.5}
            >
                {/* Dynamic Swiper Content */}
                {sliderData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <a className="cursor-pointer" href="#">
                            <div className="relative">
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-64 md:h-80 lg:h-[400px] xl:h-[550px] object-cover"
                                />
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-50 font-highlight text-white text-3xl md:text-5xl lg:text-7xl font-bold px-4 py-2 rounded-lg min-w-7xl uppercase">
                                    {item.title}
                                </div>
                            </div>
                        </a>
                    </SwiperSlide>


                ))}
            </Swiper>

            {/* Navigation Arrows Below the Slider */}
            <div className="  flex justify-start items-center gap-6 mt-3 md:mt-6">
                <a href="#_" className=" prev-slide relative rounded-full px-4 py-4 overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative"><FaArrowLeft className="text-white text-xl" /></span>
                </a>
                <a href="#_" className=" next-slide relative rounded-full px-4 py-4 overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white transition-all ease-out duration-300">
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative"><FaArrowRight className="text-white text-xl" /></span>
                </a>
                {/* <div className="prev-slide bg-black p-4 rounded-full cursor-pointer">
                    <FaArrowLeft className="text-white text-xl" />
                </div> */}
                {/* <div className="next-slide bg-black p-4 rounded-full cursor-pointer">
                    <FaArrowRight className="text-white text-xl" />
                </div> */}
            </div>
        </>
    );
};

export default SecondaryBannerSlider;