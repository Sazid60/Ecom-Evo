/* eslint-disable react/prop-types */
const MainContainer = ({ children }) => {
    return (
        <div className="container mx-auto xl:max-w-6xl 2xl:max-w-[1600px]">
            {children}
        </div>
    );
};

export default MainContainer;