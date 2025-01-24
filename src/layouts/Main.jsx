import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/Navbar";


const Main = () => {

    return (
        <>
            <div className="p-4 md:p-10 xl:p-0 font-primary">
                <NavBar />
                <div className="pt-40 md:pt-28 xl:pt-40 min-h-[calc(100vh-68px)]">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Main;
