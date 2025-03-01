import React, { useState } from 'react'
import './Register.css'
//import axios from "axios";

const Register = () => {
  const p1={
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  }

  const [product,setProduct]=useState(p1);

  async function handleSubmit(event)
  {
      event.preventDefault();
      // alert('Form Submitted')
      try {
        const response = await fetch('http://localhost:8087/products/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        });

        if (response.ok) {
            const data = await response.json();
            //alert(data.sname + " " +" user registered successfully!");
            alert("Product Added successfully!");
            console.log(data)
            //resetForm();
        } else {
            alert("Failed to Add Product");
        }
    } catch (error) {
        console.error("Error submitting the form", error);
    }

  }

  function handleChange(event)
  {
    const {name,value} = event.target  //name=title value =T
    setProduct((prev)=>({...prev,[name]:value}))  
    console.log(product)
  }
  return (
    <>
    <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Product Title</label>
          <input 
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={product.title}
          />
        </div>

        <div>
          <label htmlFor="price">Product Price</label>
          <input 
          type="text"
          name="price"
          id="price"
          onChange={handleChange}
          value={product.price}

          />
        </div>

        <div>
          <label htmlFor="description">Product Description</label>
          <input 
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          value={product.description}

          />
        </div>

        <div>
          <label htmlFor="category">Product Category</label>
          <input 
          type="text"
          name="category"
          id="category"
          onChange={handleChange}
          value={product.category}

          />
        </div>

        <div>
          <label htmlFor="image">Product Image URL</label>
          <input 
          type="text"
          name="image"
          id="image"
          onChange={handleChange}
          value={product.image}

          />
        </div>

        <div className="button-group">
                    <button type="submit">Register</button>
                    <button type="button">Cancel</button>
        </div>

    </form>
    </>
  )
}

export default Register