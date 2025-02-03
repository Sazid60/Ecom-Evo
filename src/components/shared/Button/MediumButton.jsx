/* eslint-disable react/prop-types */


const MediumButton = ({ buttonText, buttonLink }) => {
    return (
        <a href={buttonLink} className="relative px-6 py-3 bg-primary  font-semibold text-sm  overflow-hidden group  hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">{buttonText}</span>
        </a>
    );
};

export default MediumButton;