import { Home, List, Settings, CreditCard, MessageSquare, LogOut } from "lucide-react";
import MainContainer from "../container/MainContainer";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const navLinks = [
        { name: "Dashboard", icon: <Home />, selected: true },
        { name: "My Orders", icon: <List />, selected: false },
        { name: "Review Products", icon: <Settings />, selected: false },
        { name: "Transactions History", icon: <CreditCard />, selected: false },
        { name: "Support Tickets", icon: <MessageSquare />, selected: false },
        { name: "Profile Setting", icon: <Settings />, selected: false },
        { name: "Change Password", icon: <Settings />, selected: false },
    ];

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

    return (
        <MainContainer>
            <div className="flex">
                {/* Sidebar */}
                <div className="w-64 bg-white border-r p-4  flex flex-col justify-between">
                    {/* Profile Section */}
                    <div>
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-26 h-26">
                                <img
                                    className="w-26 h-26 bg-gray-200 rounded-full mb-4"
                                    src={user?.photoURL || "/Capture.png"}
                                    alt=""
                                />
                            </div>
                            <h2 className="text-lg font-semibold  uppercase">{user?.displayName}</h2>
                            <p className="text-sm text-gray-500">{user?.email}</p>
                        </div>
                        {/* Navigation Links */}
                        <nav>
                            <ul className="space-y-2">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className={`flex items-center p-2 text-sm font-medium ${link.selected
                                                ? "bg-primary text-white"
                                                : "text-gray-700 hover:bg-gray-100"
                                                }`}
                                        >
                                            <span className="mr-3">{link.icon}</span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    {/* Sign Out Option */}
                    <div>
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center p-2 text-sm font-medium text-red-600 hover:bg-red-100 rounded-md"
                        >
                            <LogOut className="mr-3" />
                            Sign Out
                        </button>
                    </div>
                </div>
                {/* Main Content */}
                {/* <div className="flex justify-center items-center p-6 w-full text-center">
                    <div>
                        <iframe src="https://lottie.host/embed/d3a183a8-2439-48da-97c7-233fc7430398/86ZtbBHkMQ.lottie"></iframe>
                    </div>
                </div> */}
                <Outlet />
            </div>
        </MainContainer>
    );
};

export default DashboardLayout;
