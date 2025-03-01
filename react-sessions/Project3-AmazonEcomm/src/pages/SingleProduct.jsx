import React, { useContext, useEffect } from 'react'
import './SingleProduct.css'
import { useParams } from "react-router-dom";
import { useState } from 'react';

import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/ProductContext';
import Breadcrumbs from '../components/Breadcrumbs';

const SingleProduct = () => {
    const { productId } = useParams();
    const [product,setProduct]=useState({})
    const{products}=useContext(ProductContext)

    useEffect(
        ()=>{
            const singProd=products.find((product)=>(product.id===Number(productId)))
            setProduct(singProd)
        },[]
    )

  return (
    <>
        <Breadcrumbs product={product}/>
        <ProductCard product={product}/>
    </>
  )
}

export default SingleProduct