/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

// Create the ProductContext
export const DataContext = createContext();

// Provider Component
export const DataProvider = ({ children }) => {

    // Initialize state from local storage or use default empty arrays
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem("wishlist");
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Update local storage whenever cart changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Update local storage whenever wishlist changes
    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Add to Cart
    const addToCart = (product) => {
        if (!cart.some((item) => item.productId === product.productId)) {
            setCart((prev) => [...prev, product]);
        }
    };

    // Add to Wishlist
    const addToWishlist = (product) => {
        if (!wishlist.some((item) => item.productId === product.productId)) {
            setWishlist((prev) => [...prev, product]);
        }
    };

    // Remove from Cart
    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((item) => item.productId !== productId));
    };

    // Remove from Wishlist
    const removeFromWishlist = (productId) => {
        setWishlist((prev) => prev.filter((item) => item.productId !== productId));
    };

    return (
        <DataContext.Provider
            value={{
                cart,
                wishlist,
                addToCart,
                addToWishlist,
                removeFromCart,
                removeFromWishlist,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

// Custom Hook to use ProductContext
export default DataProvider;
