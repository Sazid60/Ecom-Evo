import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchFooterData = async () => {
    const response = await axios.get("/json/Footer.json");
    return response.data;
};

const Footer = () => {
    const { data: footerData, isLoading, error } = useQuery({
        queryKey: ["footerData"],
        queryFn: fetchFooterData,
    });

    if (isLoading) {
        return <div className="text-center py-8">Loading footer...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-8">Error loading footer data. Please try again later.</div>;
    }

    const { paymentMethods, sections, newsletter, bottom } = footerData;

    return (
        <footer className="bg-primary text-gray-300 py-8 px-4 mt-28">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-center items-center pb-8 border-b border-gray-700">
                    {/* Payment Methods */}
                    <div className="text-center">
                        <h1 className="text-sm uppercase tracking-wide mb-6">
                            Secure Payment Methods
                        </h1>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            {paymentMethods.map((method, index) => (
                                <img
                                    key={index}
                                    src={method.image}
                                    alt={method.name}
                                    className="h-10 w-20 rounded-md"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
                    {/* Help & Information */}
                    <div>
                        <h3 className="text-white uppercase font-bold mb-4 text-sm">
                            Help & Information
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {sections.helpInformation.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link || "#"}
                                        className="hover:text-stone-400 hover:font-bold cursor-pointer"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Areas */}
                    <div>
                        <h3 className="text-white uppercase font-bold mb-4 text-sm">
                            Sections
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {sections.areas.map((area, index) => (
                                <li key={index}>
                                    <a
                                        href={area.link || "#"}
                                        className="hover:text-stone-400 hover:font-bold cursor-pointer"
                                    >
                                        {area.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Account */}
                    <div>
                        <h3 className="text-white uppercase font-bold mb-4 text-sm">
                            Account
                        </h3>
                        <ul className="space-y-2 text-sm">
                            {sections.account.map((account, index) => (
                                <li key={index}>
                                    <a
                                        href={account.link || "#"}
                                        className="hover:text-stone-400 hover:font-bold cursor-pointer"
                                    >
                                        {account.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white uppercase font-bold mb-4 text-sm">
                            {newsletter.title}
                        </h3>
                        <p className="text-sm mb-4">{newsletter.description}</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-gray-300 focus:outline-none focus:border-gray-400 text-sm"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 bg-white text-black text-sm font-semibold hover:bg-gray-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col sm:flex-row justify-center items-center text-gray-500 text-xs mt-8">
                    <p className="text-center mt-4 sm:mt-0">
                        {bottom.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
