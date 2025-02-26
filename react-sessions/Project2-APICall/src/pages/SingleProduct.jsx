import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ProductCard from '../components/ProductCard';
import axios from "axios";

const SingleProduct = () => {

 const { productId } = useParams();
 const [product,setProduct]=useState({})
 useEffect(
    ()=>{
        loadSingleProduct();
    },[]
 )

 async function loadSingleProduct()
 {
    const ProductFromAPI=  await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //const allProductsFromAPI=  await axios.get('http://localhost:8086/products')
    console.log(ProductFromAPI)
    setProduct(ProductFromAPI.data)
 }

  return (
    <>
     <ProductCard product={product}/>
    </>
  )
}

export default SingleProduct