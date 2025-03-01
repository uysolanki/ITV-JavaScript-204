import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Heropage from './pages/Heropage'
import AllProducts from './pages/AllProducts'
import SingleProduct1 from './pages/SingleProduct1'
import Cart from './pages/Cart'
import AddProduct from './pages/AddProduct'
import UserRegister from './pages/UserRegister'
import UserLogin from './pages/UserLogin'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Heropage/>}/>
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/userregister' element={<UserRegister/>}/>
          <Route path='/userlogin' element={<UserLogin/>}/>
          <Route path='/singlepro/:productId' element={<SingleProduct1/>}/>
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/payment" element={<Payment/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App