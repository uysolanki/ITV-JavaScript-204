// src/components/Checkout.js

import React, { useContext, useState } from 'react';
import './Checkout.css';
import { ProductContext } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom'; // Use navigate from react-router-dom

const Checkout = () => {
    const { promoCode, discount, getTotalCartAmount, products, cartItems } = useContext(ProductContext);
    const navigate = useNavigate(); // Hook for navigation

    // Calculate the subtotal for the cart
    const calculateSubtotal = () => {
        return products.reduce((total, product) => {
            const quantity = cartItems[product.id] || 0;
            return total + (product.price * quantity);
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const GST = subtotal * 0.18; // Assuming 18% GST
    const totalAmount = subtotal + GST - discount;

    // State for shipping details
    const [address, setAddress] = useState("");

    const handleAddressChange = (e) => setAddress(e.target.value);

    const handleCheckout = () => {
        if (address) {
            navigate("/payment"); // Navigate to the payment page
        } else {
            alert("Please fill in all fields!");
        }
    };

    const calculateTotalOrderAmount = () => {
        return products.reduce((total, product) => {
          const quantity = cartItems[product.id] || 0;
          return total + (product.price * quantity);
        }, 0);
      };
      
    return (
        <div className="checkout-container">
            <h1>Checkout</h1>

            {/* Order Summary */}
            <div className="checkout-summary">
                <h2>Order Summary</h2>
                {products.map((product) => {
                    if (cartItems[product.id] > 0) {
                        return (
                            <div key={product.id} className="checkout-product">
                                <p>{product.title} - ₹{product.price} x {cartItems[product.id]}</p>
                                <p><strong>Total: ₹{product.price * cartItems[product.id]}</strong></p>
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="checkout-total">
                    <h3><strong>Total Order Amount: ₹{calculateTotalOrderAmount().toFixed(2)}</strong></h3>
                </div>
                <div className="checkout-total">
                    <p><strong>GST (18%):</strong> ₹{GST.toFixed(2)}</p>
                    <p><strong>Promo Code:</strong> {promoCode || "No promo code applied"}</p>
                    <p><strong>Discount:</strong> ₹{discount.toFixed(2)}</p>
                    <h3><strong>Total:</strong> ₹{totalAmount.toFixed(2)}</h3>
                </div>
            </div>

            {/* Shipping Address */}
            <div className="checkout-details">
                <h2>Shipping Address</h2>
                <textarea
                    value={address}
                    onChange={handleAddressChange}
                    placeholder="Enter your shipping address"
                    rows="4"
                />
            </div>

            {/* Checkout Button */}
            <div className="checkout-button">
                <button onClick={handleCheckout}>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default Checkout;
