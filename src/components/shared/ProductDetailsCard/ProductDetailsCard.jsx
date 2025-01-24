/* eslint-disable react/prop-types */

import Rating from "react-rating";
import { FaHeart, FaRegStar, FaStar } from "react-icons/fa";
import { useState } from 'react';
import SocialSharing from "../socialSharing/SocialSharing";
import ProductImageSlider from "./ProductImageSlider";



const ProductDetailsCard = ({ productData }) => {
    const { title, size, reviews, colors, availability, price, discount, slidingImages, category, tags, shortDesc, productId } = productData;
    // console.log(category);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(size[0]);
    const [quantity, setQuantity] = useState(1)

    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews : 0;

    const isOutOfStock = availability === "out of stock";
    const discountedPrice = discount > 0 && !isOutOfStock ? price - (price * (discount / 100)) : null;

    // Handlers for selection
    const handleColorSelect = (color) => {
        setSelectedColor(color); // Update selected color
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size); // Update selected size
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-0 md:gap-5 xl:gap-10 max-w-6xl container mx-auto px-4 sm:px-8">
                <div className="w-full lg:w-[50%] xl:w-[40%] mb-8 md:mb-0">
                    <ProductImageSlider images={slidingImages} selectedColor={selectedColor} /> {/* Pass selectedColor to update image slider */}
                </div>
                <div className="w-full lg:w-[50%] xl:w-[60%]">
                    <div>
                        <h1 className="text-lg sm:text-2xl md:text-3xl font-secondary mb-4 md:mb-7">{title}</h1>
                        <div className="flex flex-wrap justify-between gap-4 sm:gap-6">
                            <div className="text-xs sm:text-sm md:text-base font-secondary">
                                {!isOutOfStock && discountedPrice ? (
                                    <div className="flex items-center space-x-2">
                                        <span className="text-red-500 line-through">${price}</span>
                                        <span className="text-black">${discountedPrice.toFixed(2)}</span>
                                    </div>
                                ) : (
                                    <span className="text-gray-800">${price}</span>
                                )}
                            </div>
                            <div className="flex items-center justify-center">
                                {/* Displaying the average rating */}
                                <Rating
                                    emptySymbol={<FaRegStar />}
                                    fullSymbol={<FaStar />}
                                    fractions={10}
                                    initialRating={averageRating}
                                    readonly={true} // Makes the rating non-changeable
                                />
                                {/* Displaying the total number of reviews */}
                                <span className="ml-2 text-xs sm:text-sm text-gray-500 font-secondary">({totalReviews})</span>
                            </div>
                        </div>
                        <div className="mt-4 sm:mt-6 md:mt-8 xl:mt-20">
                            <h1 className="lg:max-h-40 mb-6 text-sm "><span className="text-gray-600 font-bold uppercase">Description: </span>{shortDesc}</h1>
                        </div>
                        <div className="text-primary flex flex-wrap justify-start items-center mt-4">
                            <p className="text-gray-600 font-bold uppercase text-sm ">Sizes:</p>
                            <div className="flex gap-2 ml-2 flex-wrap">
                                {size.map((s, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSizeSelect(s)}
                                        className={`px-3 py-1 text-sm border  ${selectedSize === s ? 'bg-primary text-white' : 'bg-transparent'}`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="space-x-6 mt-2">
                            {/* Color Options */}
                            <div className="flex justify-start items-center mt-5">
                                <p className="text-gray-600 font-bold uppercase text-sm ">Colors:</p>
                                {colors.map((color, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleColorSelect(color)}
                                        className={`w-6 h-6 rounded-full inline-block border ml-2 ${selectedColor.hex === color.hex ? 'border-yellow-600' : 'border-primary'} `}
                                        style={{ backgroundColor: color.hex }}
                                    />
                                ))}
                            </div>
                        </div>


                        <div className="flex items-center justify-start my-5 lg:my-10 space-x-4">
                            {/* Quantity Selector */}
                            <div className="flex items-center border border-gray-300 ">
                                <button
                                    className="px-4 py-2  rounded-l-md text-sm sm:text-base"
                                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                >
                                    <p className="hover:font-bold">-</p>
                                </button>
                                <input
                                    type="number"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, e.target.value))}
                                    className="w-12 text-center border-0 focus:ring-2 focus:ring-primary outline-none text-sm sm:text-base"
                                />
                                <button
                                    className="px-4 py-2  rounded-r-md text-sm sm:text-base"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    <p className="hover:font-bold">+</p>
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button className="relative px-5 py-2 overflow-hidden group bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary text-white transition-all ease-out duration-300 text-sm sm:text-base">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative text-sm ">Add To Cart</span>
                            </button>

                            {/* Wishlist Button (Heart Icon) */}
                            <button className="text-primary hover:text-red-500 focus:outline-none transition duration-300">
                                <FaHeart className="text-2xl sm:text-3xl" />
                            </button>
                        </div>
                        <div className="flex justify-start items-center mt-5">
                            <p className="mr-3 text-gray-600 font-bold uppercase text-sm">Availability:</p>
                            {
                                availability === 'out of stock' ? <h1 className="text-red-600 text-sm">Out Of Stock</h1> : <h1 className="text-green-500 text-sm">In Stock</h1>
                            }
                        </div>
                        <div className="flex justify-start items-center mt-2 ">
                            <h1 className=" text-sm "><span className="text-gray-600 font-bold uppercase mr-2">Category :</span>{category}</h1>
                        </div>

                        <div className="flex justify-start items-center mt-2 ">
                            <h1 className="text-gray-600 font-bold uppercase text-sm">Tags:</h1>
                            <div className="flex flex-wrap gap-2 ml-2">
                                {tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm "
                                    >
                                        {tag},
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* social sharing */}
                        <SocialSharing productId={productId} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;
