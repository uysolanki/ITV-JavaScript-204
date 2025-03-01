import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
            <ul>
                <Link to="/products" >  <li>Products</li> </Link> 
                <Link to="/login" >     <li>Login</li></Link>
                <Link to="/register" >  <li>Register</li></Link>
                <Link to="/cart" >      <li>Cart</li></Link>
            </ul>
    </>
  )
}

export default Navbar