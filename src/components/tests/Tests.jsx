/* eslint-disable react/prop-types */
import Rating from "react-rating";
import { FaStar, FaRegStar, FaEye, FaCartPlus, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const ProductCard = ({ product }) => {
    const { title, size, reviews, colors, availability, slidingImages, price, discount, productId } = product;

    // Determine if the product is out of stock
    const isOutOfStock = availability === "out of stock";

    // Calculate discounted price if there is a discount
    const discountedPrice = discount > 0 && !isOutOfStock ? price - (price * (discount / 100)) : null;

    // Determine what to display in the badge
    const badgeContent = discount > 0 && !isOutOfStock ? `-${discount}%` : null;

    // Calculate the average rating and total number of reviews
    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0 ? reviews.reduce((acc, review) => acc + review.rating, 0) / totalReviews : 0;

    return (
        <div className="group relative cursor-pointer overflow-hidden">
            <Link to={`/product-details/${productId}`}>
                <div className="relative">
                    {/* Image Section */}
                    <div className="w-full h-[350px] overflow-hidden relative">
                        <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src={slidingImages[0]} // Access the first image in the slidingImages array
                            alt="Product Image"
                        />
                        {/* Darken Overlay on Hover */}
                        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-25 transition-opacity duration-300"></div>
                    </div>
                    <div className={`absolute top-4 right-4 h-12 w-12 bg-primary text-white font-semibold py-1 px-3 rounded-full flex justify-center items-center font-secondary text-[10px] ${!badgeContent ? "hidden" : ""}`}>
                        {badgeContent}
                    </div>

                    {/* Wishlist Love Icon, Cart & Quick View in a Column in Top Left */}
                    <div className="absolute hidden top-10 left-4 lg:flex flex-col space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-white bg-primary p-2 rounded-full">
                            <FaHeart className="text-xl" />
                        </div>
                        <div className="text-white bg-primary p-2 rounded-full">
                            <FaCartPlus className="text-xl" />
                        </div>
                        <div className="text-white bg-primary p-2 rounded-full">
                            <FaEye className="text-xl" />
                        </div>
                    </div>

                    {/* Size & Color Options at Bottom Center */}
                    <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-transparent backdrop-blur-sm py-2">
                        <div className="flex justify-center space-x-6">
                            {/* Size Options */}
                            <div className="text-white font-secondary">
                                {size.map((s, idx) => ( // Show only the first two sizes for simplicity
                                    <span key={idx} className="ml-2 text-xs">{s}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-2 mt-2">
                            {/* Color Options */}
                            {colors.map((color, idx) => ( // Show only the first three colors
                                <span
                                    key={idx}
                                    className="w-5 h-5 rounded-full inline-block border-2 border-white"
                                    style={{ backgroundColor: color.hex }}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Title */}
                <div className="mt-2 px-2 text-center text-sm md:text-xs font-secondary">
                    {title}
                </div>
                {/* Price and Stock Info */}
                <div className="flex justify-between items-center mt-2 p-1">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            {/* Displaying the average rating */}
                            <Rating
                                emptySymbol={<FaRegStar className="text-xs" />}
                                fullSymbol={<FaStar className="text-xs" />}
                                fractions={10}
                                initialRating={averageRating}
                                readonly={true} // Makes the rating non-changeable
                            />
                            {/* Displaying the total number of reviews */}
                            <span className="ml-2 text-[10px] text-gray-500">({totalReviews})</span>
                        </div>
                    </div>
                    <div className="font-secondary text-[10px] font-semibold">
                        {isOutOfStock ? (
                            <span className="text-red-500">Out of Stock</span>
                        ) : discountedPrice ? (
                            <div className="flex items-center space-x-2 ">
                                <span className="text-red-500 line-through">${price}</span>
                                <span className="text-black">${discountedPrice.toFixed(2)}</span>
                            </div>
                        ) : (
                            <span className="text-gray-800">${price}</span>
                        )}
                    </div>
                </div>
                <hr className="mt-2" />
            </Link>
        </div>
    );
};

export default ProductCard;
