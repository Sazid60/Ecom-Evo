import Categories from "../../components/home/categories/Categories";
import NewArrivals from "../../components/home/newArrivals/NewArrivals";
import SecondaryBanner from "../../components/shared/Banner/SecondaryBanner_1/SecondaryBanner";



const Home = () => {
    return (
        <>
            <SecondaryBanner />
            <Categories />
            <NewArrivals />
        </>
    );
};

export default Home;
