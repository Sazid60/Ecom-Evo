import MainContainer from "../../../layouts/container/MainContainer";


const CategorySkelton = () => {
    return (

        <MainContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-pulse mt-10">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="h-[300px] md:h-[500px] bg-gray-300"></div>
                ))}
            </div>
        </MainContainer>
    );

};

export default CategorySkelton;