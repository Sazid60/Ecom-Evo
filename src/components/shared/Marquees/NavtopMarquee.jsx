import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Marquee from "react-fast-marquee";
import { BeatLoader } from "react-spinners";

const NavtopMarquee = () => {
    const fetchMarqueeItems = async () => {
        const response = await axios.get('/json/marqueeItems.json');
        return response.data;
    };
    const { data: marqueeItems = [], isLoading } = useQuery({
        queryKey: ['marqueeItems'],
        queryFn: fetchMarqueeItems
    });
    //  will be changed
    if (isLoading) return <BeatLoader />
    return (
        <div>
            <Marquee className="bg-white text-primary p-3">
                {marqueeItems.map((item, index) => (
                    <span key={index} className="mx-8 font-secondary text-xs">{item}</span>
                ))}
            </Marquee>
        </div>
    );
};

export default NavtopMarquee;