/* eslint-disable react/prop-types */


const SmallButton = ({ buttonText, buttonLink }) => {
    return (
        <a href={buttonLink} className="relative px-5 py-4 overflow-hidden group bg-primary  hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">{buttonText}</span>
        </a>
    );
};

export default SmallButton;