/* eslint-disable no-unused-vars */
import { FaBars, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState, useEffect, useContext } from "react";
import NavtopMarquee from "./Marquees/NavtopMarquee";
import { useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const currentPath = useLocation().pathname;
    const [cartCount, setCartCount] = useState(3);
    const [wishlistCount, setWishlistCount] = useState(5);

    const { logOut, user } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("Logged Out");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

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
        { name: "New Arrivals", path: "/new-arrivals" },
        { name: "Men", path: "/men" },
        { name: "Women", path: "/women" },
        { name: "Accessories", path: "/accessories" },
    ];

    return (
        <>
            {/* Navbar */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-primary text-white ${isScrolled ? "shadow-xl" : "shadow-sm"}`}>
                <div>
                    <NavtopMarquee />
                </div>
                <div className="mx-auto px-4 sm:max-w-full md:max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1500px] flex justify-between items-center py-2">
                    {/* Logo and Nav Items */}
                    <div className="flex items-center md:gap-20">
                        <img className="h-12 w-12 rounded-full" src="/binary-bhai.png" alt="logo" />
                        <div className="hidden xl:flex">
                            <div className="flex space-x-6">
                                {navItems.map((item) => (
                                    <div key={item.name} className="group">
                                        <a
                                            href={item.path}
                                            className={`relative ${currentPath === item.path ? "hover:scale-105 transition-all duration-700 font-bold" : ""} hover:font-bold`}
                                        >
                                            {item.name}
                                            <span
                                                className={`absolute left-0 bottom-0 h-0.5 bg-secondary ${currentPath === item.path ? "w-full" : "w-0"} group-hover:w-full transition-all duration-700`}
                                            ></span>
                                        </a>
                                    </div>
                                ))}
                            </div>
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

                        {/* User Profile and Dropdown */}
                        <div className="relative group">
                            {/* User Image */}
                            <img
                                className="h-8 w-8 lg:h-10 lg:w-10 border border-primary rounded-full cursor-pointer"
                                src={user?.photoURL || "/Capture.png"}
                                alt="User"
                            />

                            {/* Dropdown Menu */}
                            <div className="absolute right-0 mt-2 bg-white text-primary p-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="py-2 w-40">
                                    {user ? (
                                        <>

                                            <a href="/dashboard">
                                                <div className="px-4 py-2 hover:bg-primary hover:text-white hover:cursor-pointer">
                                                    Dashboard
                                                </div>
                                            </a>
                                            <div
                                                className="px-4 py-2 hover:bg-primary hover:text-white hover:cursor-pointer"
                                                onClick={handleSignOut}
                                            >
                                                Sign Out
                                            </div>
                                        </>
                                    ) : (
                                        <>

                                            <a href="/login">
                                                <div className="px-4 py-2 hover:bg-primary hover:text-white  hover:cursor-pointer">
                                                    Login
                                                </div>
                                            </a>

                                            <a href="/register">

                                                <div className="px-4 py-2 hover:bg-primary hover:text-white hover:cursor-pointer">
                                                    Register
                                                </div>
                                            </a>

                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Toggle Button for Side Nav */}
                        <div className="flex xl:hidden p-2 cursor-pointer" onClick={() => setIsSideNavOpen(true)}>
                            <FaBars className="text-2xl" />
                        </div>
                    </div>
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
                className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-secondary shadow-lg z-50 transform ${isSideNavOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}
            >
                {/* Close Button */}
                <button
                    className="p-4 text-right w-full text-2xl"
                    onClick={() => setIsSideNavOpen(false)}
                >
                    <RxCross2 className="text-2xl" />
                </button>

                {/* Side Nav Links */}
                <div className="flex flex-col items-start p-6 space-y-4">
                    {navItems.map((item) => (
                        <div key={item.name}>
                            <a
                                href={item.path}
                                className={`text-lg transition-all duration-300 ${currentPath === item.path ? "font-bold text-black" : "text-gray-600"} hover:font-bold hover:text-primary`}
                                onClick={() => setIsSideNavOpen(false)}
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default NavBar;
