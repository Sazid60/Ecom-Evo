/* eslint-disable react/prop-types */
import { FaWhatsapp, FaTelegram, FaXTwitter } from "react-icons/fa6";

const SocialSharing = ({ title }) => {
    const currentUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`Check out this product: ${title}!`);

    return (
        <div className="flex space-x-4 mt-6">
            <a
                href={`https://api.whatsapp.com/send?text=${shareText}%20${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaWhatsapp className="text-2xl cursor-pointer hover:scale-105 transition duration-300" />
            </a>

            <a
                href={`https://t.me/share/url?url=${currentUrl}&text=${shareText}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTelegram className="text-2xl cursor-pointer hover:scale-105 transition duration-300" />
            </a>
            <a
                href={`https://x.com/intent/tweet?text=${shareText}&url=${currentUrl}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaXTwitter className="text-2xl cursor-pointer hover:scale-105 transition duration-300" />
            </a>
        </div>
    );
};

export default SocialSharing;
