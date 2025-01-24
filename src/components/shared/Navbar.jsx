/* eslint-disable no-unused-vars */
import { FaBars, FaRegHeart } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { useState, useEffect, useContext } from "react";
import NavtopMarquee from "./Marquees/NavtopMarquee";
import { Link, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../providers/AuthProvider";
import { Tooltip } from "react-tooltip";
import { IoIosLogOut } from "react-icons/io";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const currentPath = useLocation().pathname;
    const [cartCount, setCartCount] = useState(3);
    const [wishlistCount, setWishlistCount] = useState(5);

    const { logOut, user } = useContext(AuthContext)
    const handleSignOut = () => {

        logOut()
            .then(() => {
                console.log("Logged Out")
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Accessories", path: "/accessories" },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-primary text-white  ${isScrolled ? ' shadow-xl' : 'shadow-sm'}`}>
                <div>
                    <NavtopMarquee />
                </div>
                <div className="container mx-auto xl:max-w-6xl 2xl:max-w-[1600px] flex justify-between items-center py-2">
                    {/* Logo and Nav Items */}
                    <div className="flex items-center md:gap-20">
                        <img className="h-12 w-12 rounded-full" src="/binary-bhai.png" alt="logo" />
                        <div className="hidden xl:flex">
                            <ul className="flex space-x-6">
                                {navItems.map((item) => (
                                    <li key={item.name} className="group">
                                        <a
                                            href={item.path}
                                            className={`relative ${currentPath === item.path ? 'hover:scale-105 transition-all duration-700 font-bold' : ''}  hover:font-bold`}
                                        >
                                            {item.name}
                                            <span
                                                className={`absolute left-0 bottom-0 h-0.5 bg-secondary ${currentPath === item.path ? 'w-full' : 'w-0'} group-hover:w-full transition-all duration-700`}
                                            ></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Icons Section */}
                    <div className="flex items-center justify-between">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="hidden xl:block w-32 lg:w-48 xl:w-64 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary transition-all duration-300 mr-4 text-primary"
                        />
                        <a href="/cart">
                            <div className="relative mr-4">
                                <LuShoppingCart className="text-2xl hover:animate-pulse" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                        </a>
                        <a href="/wishlist">
                            <div className="relative mr-4 md:mr-8">
                                <FaRegHeart className="text-2xl hover:animate-pulse" />
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                                        {wishlistCount}
                                    </span>
                                )}
                            </div>
                        </a>
                        {/* <div className="flex justify-center items-center space-x-2">
                            <IoPersonCircleOutline className="text-2xl cursor-pointer hover:animate-pulse" />
                            <a href="/login">Login</a>
                            <h1>/</h1>
                            <a href="/register">Register</a>
                        </div> */}

                        {
                            user ?
                                <div className="mr-2 flex justify-center items-center gap-2">
                                    <div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} data-tooltip-place="left">
                                        <img className="h-8 w-8 lg:h-10 lg:w-10 border border-primary rounded-full " src={user?.photoURL || "/Capture.png"} alt="" />
                                    </div>
                                    <Tooltip id="my-tooltip" />
                                    {/* <button onClick={handleSignOut} className="btn btn-xs md:btn-sm lg:btn-sm bg-[#4169E1] hover:bg-slate-500 text-white font-normal">Logout</button> */}

                                    <IoIosLogOut onClick={handleSignOut} className="text-2xl hover:scale-105" />

                                </div>
                                : <div className="flex items-center mr-2">
                                    {/* <div className="flex">
                                        <Link
                                            className="btn btn-xs md:btn-sm lg:btn-sm text-white bg-[#4169E1] hover:bg-slate-400" to={"/login"}>
                                            Login
                                        </Link>
                                    </div> */}
                                    <div className="hidden md:flex justify-center items-center gap-2 mr-2 ">
                                        <div className="group relative  cursor-pointer ">
                                            <p
                                                className="relative hover:font-bold  transition-transform duration-700 transform"
                                            >
                                                Login
                                                <span
                                                    className="absolute left-0 bottom-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-700"
                                                ></span>
                                            </p>
                                        </div>
                                        <p>/</p>
                                        <div className="group relative  cursor-pointer flex justify-center items-center gap-2">
                                            <p
                                                className="relative hover:font-bold  transition-transform duration-700 transform"
                                            >
                                                Register
                                                <span
                                                    className="absolute left-0 bottom-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-700"
                                                ></span>
                                            </p>
                                        </div>
                                    </div>

                                    <div data-tooltip-id="my-tooltip" data-tooltip-content="No Image" data-tooltip-place="left">
                                        <img className="rounded-full h-8 w-8 lg:h-10 lg:w-10 border border-primary" src="/Capture.png" alt="" />
                                    </div><Tooltip id="my-tooltip" />

                                </div>

                        }



                        {/* Toggle Button for Side Nav */}
                        <div className="flex xl:hidden p-2 cursor-pointer" onClick={() => setIsSideNavOpen(true)}>
                            <FaBars className="text-2xl" />
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-5 mb-2">

                    {
                        !user &&

                        <>
                            <hr className="mb-2 block md:hidden" />
                            <div className=" flex justify-center items-center gap-2 md:hidden ">
                                <div className="group relative  cursor-pointer ">
                                    <p
                                        className="relative hover:font-bold  transition-transform duration-700 transform"
                                    >
                                        Login
                                        <span
                                            className="absolute left-0 bottom-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-700"
                                        ></span>
                                    </p>
                                </div>
                                <p>/</p>
                                <div className="group relative  cursor-pointer flex justify-center items-center gap-2">
                                    <p
                                        className="relative hover:font-bold  transition-transform duration-700 transform"
                                    >
                                        Register
                                        <span
                                            className="absolute left-0 bottom-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-700"
                                        ></span>
                                    </p>
                                </div>
                            </div>
                        </>

                    }
                </div>
            </nav>

            {/* Overlay (When SideNav is Open) */}
            {isSideNavOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSideNavOpen(false)}
                />
            )}

            {/* Side Navbar */}
            <div
                className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-secondary shadow-lg z-50 transform ${isSideNavOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
            >
                {/* Close Button */}
                <button
                    className="p-4 text-right w-full text-2xl"
                    onClick={() => setIsSideNavOpen(false)}
                >
                    <RxCross2 className="text-2xl" />
                </button>

                {/* Side Nav Links */}
                <ul className="flex flex-col items-start p-6 space-y-4">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.path}
                                className={`text-lg transition-all duration-300 
                                ${currentPath === item.path ? 'font-bold text-black' : 'text-gray-600'} 
                                hover:font-bold hover:text-primary`}
                                onClick={() => setIsSideNavOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NavBar;
