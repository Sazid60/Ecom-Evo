/* eslint-disable react/prop-types */

const Title = ({ title, titleDesc }) => {
    return (


        <div className="text-center py-3 md:py-7 mt-5 mb-5 md:mt-8 md:mb-8">
            <div className="flex items-center justify-center">
                <div className="border-t border-2 border-black flex-grow mx-4 max-w-24"></div>
                <h2 className="text-xl md:text-5xl lg:text-6xl uppercase font-highlight ">{title}</h2>
                <div className="border-t border-2 border-black flex-grow mx-4 max-w-24"></div>
            </div>
            <p className="text-sm md:text-lg lg:text-xl text-gray-500 font-secondary">{titleDesc}</p>
        </div>


    );
};

export default Title;