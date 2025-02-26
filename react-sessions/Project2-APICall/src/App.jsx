import React from 'react'
import Products from './pages/Products'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Heropage from './pages/Heropage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route  path="/" element={<Heropage/>}/>
          <Route  path="/products" element={<Products/>}/>
          <Route  path="/login" element={<Login/>}/>
          <Route  path="/register" element={<Register/>}/>
          <Route  path="/cart" element={<Cart/>}/>
          <Route  path="/singlepro/:productId" element={<SingleProduct/>}/>

        </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App