import { Route, Routes } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/login/Login";
import Error from "../components/shared/Error";
import Home from "../pages/home/Home";
import Mens from "../pages/men/Mens";
import Women from "../pages/women/Women";
import SignUp from "../pages/signUp/SignUp";
import Accessories from "../pages/accessories/Accessories";
import ProductDetails from "../pages/productDetails/ProductDetails";
import NewArrivalsPage from "../pages/new-arrivals/newArrivalsPage";
import DashboardLayout from "../layouts/dashboard/DashboardLayout";
import DashboardHome from "../pages/Dashboard/Dashboard-Home/DashboardHome";
import PrivateRoute from "./PrivateRoute";





const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/men" element={<Mens />} />
            <Route path="/women" element={<Women />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/new-arrivals" element={<NewArrivalsPage />} />
            <Route path="/product-details/:productId" element={<ProductDetails />} />
            <Route>
                <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>} >
                    <Route index element={<PrivateRoute><DashboardHome /></PrivateRoute>} />
                </Route>
            </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<Error />} />
    </Routes>
);

export default AppRoutes; 