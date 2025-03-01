// src/components/PaymentPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate back to checkout or order confirmation page
import './Payment.css';
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';

const PaymentPage = () => {
    const { clearCart } = useContext(ProductContext); 
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: ""
    });

    const navigate = useNavigate(); // To navigate after payment is done

    const handlePaymentMethodChange = (e) => setPaymentMethod(e.target.value);

    const handleCardDetailChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleProceedToPayment = () => {
        if (paymentMethod === "credit-card" || paymentMethod === "debit-card") {
            if (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv) {
                alert("Please enter your card details!");
                return;
            }
        }
        alert("Payment Successful!");
        clearCart();
        // You can navigate to a success page, confirmation page or back to checkout
        navigate("/order-confirmation");
    };

    return (
        <div className="payment-page-container">
            <h1>Payment Method</h1>
            <div className="payment-method">
                <h2>Select Payment Method</h2>
                <div>
                    <input
                        type="radio"
                        id="credit-card"
                        name="payment-method"
                        value="credit-card"
                        checked={paymentMethod === "credit-card"}
                        onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="credit-card">Credit Card</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="debit-card"
                        name="payment-method"
                        value="debit-card"
                        checked={paymentMethod === "debit-card"}
                        onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="debit-card">Debit Card</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="cod"
                        name="payment-method"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={handlePaymentMethodChange}
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                </div>

                {/* Card Details Form (only visible if Credit/Debit Card is selected) */}
                {(paymentMethod === "credit-card" || paymentMethod === "debit-card") && (
                    <div className="card-details">
                        <h3>Enter Your Card Details</h3>
                        <div>
                            <label htmlFor="card-number">Card Number:</label>
                            <input
                                type="text"
                                id="card-number"
                                name="cardNumber"
                                value={cardDetails.cardNumber}
                                onChange={handleCardDetailChange}
                                placeholder="1234 5678 9101 1121"
                            />
                        </div>
                        <div>
                            <label htmlFor="expiry-date">Expiry Date:</label>
                            <input
                                type="text"
                                id="expiry-date"
                                name="expiryDate"
                                value={cardDetails.expiryDate}
                                onChange={handleCardDetailChange}
                                placeholder="MM/YY"
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleCardDetailChange}
                                placeholder="123"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Proceed to Payment Button */}
            <div className="payment-button">
                <button onClick={handleProceedToPayment}>Proceed to Payment</button>
            </div>
        </div>
    );
};

export default PaymentPage;
