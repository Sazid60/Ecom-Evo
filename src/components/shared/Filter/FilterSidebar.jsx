/* eslint-disable react/prop-types */
import FilterSection from "./FilterSection";

const FilterSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        isSidebarOpen && (
            <div className="fixed top-0 left-0 w-[80%] max-w-sm h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-highlight">Filter By</h2>
                    <button
                        className="p-2 text-gray-600 hover:text-gray-900"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        ✕
                    </button>
                </div>
                <FilterSection />
            </div>
        )
    );
};

export default FilterSidebar