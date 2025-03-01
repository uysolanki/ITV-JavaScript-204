import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Cart_Img from '../assets/myimages/cart.png'
import Logo_Img from '../assets/myimages/Logo.png'
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react'
const Navbar = () => {

    const { getTotalCartItems } = useContext(ProductContext)
  return (
    <>
    <div className="navbar">
            <Link to='/'>
            <div className="logo">
                <h1>Amazon.in</h1>
                <img src={Logo_Img} alt="Logo" />
            </div></Link>
    
            <div className="nav-menu">
                <ul>
                    <Link to='/'>   <li>Home</li></Link>
                    <Link to='/products'>  <li>Products</li></Link>
                    <Link to='/addproduct'>   <li>Add Product</li></Link>
                </ul>
            </div>

            <div className="nav-login-cart">
                    <Link to='/userlogin'><button>Login</button></Link>
                    <Link to='/userregister'><button>Register</button></Link>
                    <Link to='/cart'><img src={Cart_Img} alt="Cart" /></Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                 </div>
    </div>
    </div>
    </>
  )
}

export default Navbar