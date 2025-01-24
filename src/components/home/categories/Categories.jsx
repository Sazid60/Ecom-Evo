import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import MainContainer from "../../../layouts/container/MainContainer";
import Title from "../../shared/Title/Title";
import { Link } from 'react-router-dom';
import CategorySkelton from './CategorySkelton';

const fetchCategories = async () => {
    const response = await axios.get('/json/categories.json');
    return response.data;
};



const Categories = () => {
    const { data: categories, isLoading } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });

    if (isLoading) return <CategorySkelton />;

    return (
        <>
            <Title title={'Categories'} titleDesc={'Explore The Categories By Your Choice'} />
            <MainContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.map((category, index) => (
                        <Link
                            to={category.link}
                            key={category.name}
                            className={`group p-5 text-center bg-cover bg-center h-[300px] md:h-[500px] flex justify-center items-center ${index % 3 === 2 ? 'md:col-span-2' : ''}`}
                            style={{ backgroundImage: `url(${category.imageUrl})` }}
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-highlight text-white uppercase font-extrabold leading-tight transition-transform duration-300 group-hover:animate-bounce">
                                {category.name.toUpperCase()}
                            </h1>
                        </Link>
                    ))}
                </div>


            </MainContainer>
        </>
    );
};

export default Categories;
