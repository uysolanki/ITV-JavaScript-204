import React, { useContext } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import star from '../assets/myimages/star.png';
import star_dull from '../assets/myimages/star_dull.png';
import './SingleProduct1.css'
import { ProductContext } from '../context/ProductContext';

const SingleProduct1 = () => {
    const { productId } = useParams();
    const { addToCart } = useContext(ProductContext);
    const { products, loading, error } = useContext(ProductContext);
    const [product, setProduct] = useState({});  // State to hold the single product

    useEffect(() => {
        if (products.length > 0) {
            // Find the product from the products array using the productId
            const selectedProduct = products.find(prod => prod.id === Number(productId));
            setProduct(selectedProduct);  // Set the product state with the found product
            console.log(selectedProduct)
        }
    },[productId]);
  
    // async function loadProduct()
    // {
    //   const fetchedProduct= await axios.get(`https://fakestoreapi.com/products/${productId}`)
    //   setProduct(fetchedProduct.data)
    //   console.log(product)
    // }
  
//    useEffect(
//     ()=>{
//         setProduct(products.filter((prod)=>(prod.id===productId)))
//    },[]
//    )
  
    // function addToCart(productId)
    // {
    //     alert(`Product ${productId} added to Cart`)
    // }
    return (
    <>
     <Breadcrumbs product={product}/>
   
    <div className='productdisplay'>
       <div className="product-display-left">
                <div className="product-display-img-list">
                    <img src={product.image} alt={product.title} />
                    {/* <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} />
                    <img src={product.image} alt={product.title} /> */}
                </div>
                {/* <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div> */}
        </div>
       {/* <ProductCard key={product.id} product={product}/> */}
       <div className="product-display-right">
                <h1>{product.title}</h1>
                <div className="productdisplay-right-star">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star_dull} alt="star dull" />
                    <p>(3121)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">
                        ₹{product.price}
                    </div>
                    <div className="productdisplay-right-price-new">
                        ₹{product.price}
                    </div>
                </div>
                <div className="productdisplay-right-description">
                    {product.description}
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>
                    ADD TO CART
                </button>
                <p className='productdisplay-right-category'><span>Category :</span>{product.category}</p>
            </div>
      </div>
      <Link to="/">
          <button>Hompage</button>
      </Link>
      </>
    );
  };
  

export default SingleProduct1