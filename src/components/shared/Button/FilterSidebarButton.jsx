/* eslint-disable react/prop-types */
import { CiFilter } from "react-icons/ci";

const FilterSidebarButton = ({ setIsSidebarOpen }) => {
    return (
        <div className="flex justify-between items-center xl:hidden my-6">
            <button
                className="flex items-center gap-2 px-4 py-2 bg-primary text-secondary font-highlight rounded-md shadow-md hover:bg-primary-dark transition-all"
                onClick={() => setIsSidebarOpen(true)}
            >
                <CiFilter />
                <span className="text-xs">Filter By</span>
            </button>
            <h1 className="font-secondary text-xs">Filter By Your Preference</h1>
        </div>
    );
};

export default FilterSidebarButton