/* eslint-disable react/prop-types */
const MainContainer = ({ children }) => {
    return (
        <div className="container mx-auto px-4 sm:max-w-full md:max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1500px]">
            {children}
        </div>
    );
};

export default MainContainer;