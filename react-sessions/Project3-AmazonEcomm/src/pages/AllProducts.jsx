import React from 'react'
import './AllProducts.css'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

const AllProducts = () => {
    const{products}=useContext(ProductContext)
    const [myproducts,setProducts]=useState(products)
    const[loading,setLoadings]=useState(true)


  return (
    <>
    <div className="container my-4">
        <h1 className="text-center mb-4">Our Products</h1>

        <div className="row">
            {myproducts.map((product,index) => (<ProductCard key={index} product={product}/>)) }
        </div>
    </div>
  </>
  )
}

export default AllProducts