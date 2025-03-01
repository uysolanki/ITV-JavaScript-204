// import { useEffect, useState } from "react";
// import axios from 'axios'
// import { createContext } from "react";
// import PropTypes from "prop-types";

// export const ProductContext = createContext();

// const getDefaultCart = () => {
//     const storedCart = JSON.parse(localStorage.getItem("cartItems"));
//     if (storedCart) {
//         return storedCart;
//     }
//     return {}; // Return empty cart if nothing is stored
// };

       
// const ProductContextProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState(getDefaultCart());
//     const [products,setProducts]=useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     useEffect(
//         ()=>{
//             loadProducts();
//         },[]
//     )
    
//     async function loadProducts()
//     {
//         await axios.get("http://localhost:8087/products/getAllProducts")
//         .then(response => {
//             setProducts(response.data);
//             setLoading(false);
//         })
//         .catch(err => {
//             console.error("Failed to fetch products", err);
//             setError("Failed to fetch data");
//             setLoading(false);
//         });
//     }  
    
//     if (loading) {
//         return <h1>Loading...</h1>;
//     }

//     if (error) {
//         return <h1>{error}</h1>;
//     }
   
//     useEffect(() => {
//         // Save cart items to localStorage whenever cartItems state changes
//         if (Object.keys(cartItems).length > 0) {
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//         }
//     }, [cartItems]);

//     const addToCart = (itemId) => {
//         setCartItems(prev => ({
//             ...prev,
//             [itemId]: (prev[itemId] || 0) + 1
//         }));
//     };

//     // Remove item from the cart
//     const removeFromCart = (itemId) => {
//         setCartItems(prev => {
//             const newCart = { ...prev };
//             if (newCart[itemId] > 0) {
//                 newCart[itemId] -= 1;
//             }
//             return newCart;
//         });
//     };

//     // Optimized getTotalCartAmmount function
//     const getTotalCartAmmount = () => {
//         let totalAmount = 0;

//         // Create a map of products for fast lookup
//         const productMap = products.reduce((acc, product) => {
//             acc[product.id] = product;
//             return acc;
//         }, {});

//         // Iterate through the cart items and calculate total
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 const itemInfo = productMap[item];
//                 if (itemInfo) {
//                     totalAmount += itemInfo.price * cartItems[item];
//                 }
//             }
//         }
//         return totalAmount;
//     };

//     // Function to get the total number of items in the cart
//     const getTotalCartItems = () => {
//         let totalItems = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 totalItems += cartItems[item];
//             }
//         }
//         return totalItems;
//     };

//     const contextValue = {
//         cartItems,
//         products,
//         addToCart,
//         removeFromCart,
//         getTotalCartItems,
//         getTotalCartAmmount
//     };

//     return (
//         <ProductContext.Provider value={contextValue}>
//             {children}
//         </ProductContext.Provider>
//     );

// };

// ProductContextProvider.propTypes = {
//     children: PropTypes.node.isRequired,
// };

// export default ProductContextProvider;

import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Create the context
export const ProductContext = createContext();

// Function to get the default cart state from localStorage
const getDefaultCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems"));
    if (storedCart) {
        return storedCart;
    }
    return {}; // Return empty cart if nothing is stored
};

// ShopContextProvider component to manage cart and products
const ProductContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [promoCode, setPromoCode] = useState(""); // Store promo code
    const [discount, setDiscount] = useState(0); // Store discount amount

    // Fetch products from API
    useEffect(() => {
        axios.get("http://localhost:8087/products/getAllProducts")
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch products", err);
                setError("Failed to fetch data");
                setLoading(false);
            });
    }, []);

    // Always call the useEffect hook, but do not call conditionally.
    useEffect(() => {
        // Save cart items to localStorage whenever cartItems state changes
        if (Object.keys(cartItems).length > 0) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    // Loading and error state handling
    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    const clearCart = () => {
        setCartItems({});
    };
    const setPromo = (code, discountAmount) => {
        setPromoCode(code); // Set promo code in context
        setDiscount(discountAmount); // Set discount amount in context
      };
    // Add item to the cart
    const addToCart = (itemId) => {
        alert('hi')
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    // Remove item from the cart
    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1;
            }
            return newCart;
        });
    };

    // Optimized getTotalCartAmmount function
    const getTotalCartAmmount = () => {
        let totalAmount = 0;

        // Create a map of products for fast lookup
        const productMap = products.reduce((acc, product) => {
            acc[product.id] = product;
            return acc;
        }, {});

        // Iterate through the cart items and calculate total
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = productMap[item];
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    // Function to get the total number of items in the cart
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    // The context value to be provided
    const contextValue = {
        cartItems,
        products,
        promoCode,
        discount,
        addToCart,
        removeFromCart,
        getTotalCartItems,
        getTotalCartAmmount,
        setPromo,
        clearCart
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};

// Prop type validation
ProductContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProductContextProvider;



