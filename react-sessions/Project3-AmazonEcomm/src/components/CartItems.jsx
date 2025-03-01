import { useContext, useState } from 'react';
import './CartItems.css';
import { ProductContext } from '../context/ProductContext';
import remove_cart from '../assets/myimages/remove-cart.png';
import { useNavigate } from 'react-router-dom';

export const CartItems = () => {
    const navigate = useNavigate();
    const { getTotalCartAmount, products = [], cartItems, removeFromCart, setPromo, promoCode, discount } = useContext(ProductContext);

    const [inputPromoCode, setInputPromoCode] = useState(''); // Input field for promo code
    const [isPromoApplied, setIsPromoApplied] = useState(false); // Flag to check if the promo is applied

    // Calculate the subtotal for the cart
    const calculateSubtotal = () => {
        return products.reduce((total, product) => {
            const quantity = cartItems[product.id] || 0;
            return total + (product.price * quantity);
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const GST = subtotal * 0.18; // Assuming 18% GST
    let totalAmount = subtotal + GST;

    // Handle promo code submission
    const handlePromoCodeSubmit = () => {
        // Check for a valid promo code (for demonstration)
        if (inputPromoCode === "D10") {
            const discountAmount = subtotal * 0.10; // Apply 10% discount
            setPromo(inputPromoCode, discountAmount); // Set promo code and discount in context
            setIsPromoApplied(true); // Mark promo as applied
            totalAmount = totalAmount - discountAmount;
            alert("Promo code applied! 10% discount received.");
        } else {
            alert("Invalid promo code.");
        }
    };

    // Handle checkout button click
    function handleCheckout() {
        navigate("/checkout");
    }

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <div className="cartitems-header">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {products.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitem-format">
                                    <img src={e.image} alt="" className='carticon-product-icon' />
                                    <p>{e.title}</p>
                                    <p>&#8377;{e.price}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>&#8377;{e.price * cartItems[e.id]}</p>
                                    <img className='cart-remove-button' src={remove_cart} alt="" onClick={() => { removeFromCart(e.id) }} />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="cartitems-down">
                    <div className="cartitems-total">
                        <h1>Cart Totals</h1>
                        <div>
                            <div className="cartitems-total-item">
                                <p>Subtotal</p>
                                <p>₹{subtotal.toFixed(2)}</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr />
                            <div className="cartitems-total-item">
                                <p>GST (18%)</p>
                                <p>₹{GST.toFixed(2)}</p> {/* Display GST to 2 decimal places */}
                            </div>
                            <hr />
                            {/* If promo is applied, show original total with a strikethrough */}
                            {isPromoApplied && (
                                <div className="cartitems-total-item">
                                    <p style={{ textDecoration: 'line-through', color: 'grey' }}>
                                        Original Total
                                    </p>
                                    <p style={{ textDecoration: 'line-through', color: 'grey' }}>
                                        ₹{totalAmount.toFixed(2)}
                                    </p>
                                </div>
                            )}
                            <hr />
                            {/* New total after discount */}
                            <div className="cartitems-total-item">
                                <h3>Total</h3>
                                <h3>₹{(totalAmount - discount).toFixed(2)}</h3> {/* Total amount with GST and discount */}
                            </div>
                        </div>
                        <button onClick={handleCheckout}>Proceed To Checkout</button>
                    </div>

                    <div className="cartitems-promocode">
                        <p>If you have a Promo code, Enter It here</p>
                        <div className="cartitem-promodox">
                            <input 
                                type="text" 
                                placeholder='Promo Code'
                                value={inputPromoCode} 
                                onChange={(e) => setInputPromoCode(e.target.value)} 
                            />
                            <button onClick={handlePromoCodeSubmit}>APPLY PROMO CODE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
