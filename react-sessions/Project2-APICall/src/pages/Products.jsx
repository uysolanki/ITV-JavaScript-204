import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import './Products.css'
import ProductCard from '../components/ProductCard';

const Products = () => {
    const[products,setProducts]=useState([])

    useEffect(
        ()=>{
                loadProducts();
        },[]
    )

    async function loadProducts()
    {
    const allProductsFromAPI=  await axios.get('https://fakestoreapi.com/products')
    //const allProductsFromAPI=  await axios.get('http://localhost:8086/products')
    console.log(allProductsFromAPI)
    setProducts(allProductsFromAPI.data)
    //console.log(products)
    }
  return (
   <>
   <div className="container my-4">
      <h1 className="text-center mb-4">Our Products</h1>

      <div className="row">

            {
           products.map(
            (product,index)=> <ProductCard key={index} product={product}/>
           )
        }

    </div>
</div>

   </>
  )
}

export default Products