import { useState } from "react";

const FilterSection = () => {
    const [price, setPrice] = useState(500); // Initialize state for price

    return (
        <div className="custom-scrollbar">
            {/* Filter By Section */}
            <div className="bg-primary font-highlight p-4 text-center text-secondary">
                Filter By
            </div>

            {/* Price Range Selector */}
            <div className="mt-8">
                <h3 className="text-gray-700 mb-4 border-b pb-2 font-highlight">Price Range</h3>
                <div className="flex flex-col space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">$0</span>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            step="10"
                            value={price} // Controlled input
                            onChange={(e) => setPrice(e.target.value)} // Update state on change
                            className="w-full range-slider appearance-none bg-gray-300 h-1 rounded-full cursor-pointer focus:outline-none"
                        />
                        <span className="text-sm text-gray-600">$1000</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-700">
                        <span>Min: $0</span>
                        <span>Max: ${price}</span> {/* Reflect the selected price */}
                    </div>
                </div>
            </div>

            {/* Colors Section */}
            <div className="mt-8">
                <h3 className="font-highlight text-gray-700 mb-4 border-b pb-2">Colors</h3>
                <div className="flex flex-col space-y-2">
                    {["Red", "Blue", "Green", "Black", "White"].map((color) => (
                        <label key={color} className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                value={color}
                                className="form-checkbox "
                            />
                            {color}
                        </label>
                    ))}
                </div>
            </div>

            {/* Subcategories Section */}
            <div className="mt-8">
                <h3 className="text-lg font-highlight text-gray-700 mb-4 border-b pb-2">Subcategories</h3>
                <div className="flex flex-col space-y-2">
                    {["T-Shirts", "Jeans", "Shoes"].map((subcategory) => (
                        <label key={subcategory} className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                value={subcategory}
                                className="form-checkbox text-black "
                            />
                            {subcategory}
                        </label>
                    ))}
                </div>
            </div>

            {/* Size Selection Section */}
            <div className="mt-8">
                <h3 className="text-lg font-highlight text-gray-700 mb-4 border-b pb-2">Size Selection</h3>
                <div className="flex flex-col space-y-2">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <label key={size} className="flex items-center gap-2 text-sm text-gray-600">
                            <input
                                type="checkbox"
                                value={size}
                                className="form-checkbox text-black "
                            />
                            {size}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterSection;
