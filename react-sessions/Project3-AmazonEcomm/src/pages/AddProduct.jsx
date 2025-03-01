import React, { useState } from 'react';
import './AddProduct.css';
import { useFormik } from 'formik';
import { registartionValidation } from '../components/Validation';

const AddProduct = () => {
  const p1 = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };

  //const [product, setProduct] = useState(p1);

  const {
    errors,
    values, // Changed 'value' to 'values'
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: p1,  // Correctly set initialValues
    validationSchema: registartionValidation,
    onSubmit: function () {
      saveData();
    },
  });


  async function saveData() {
    try {
      const response = await fetch('http://localhost:8087/products/addProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)  // Use 'values' here instead of 'product'
      });

      if (response.ok) {
        const data = await response.json();
        alert("Product Added successfully!");
        console.log(data);
      } else {
        alert("Failed to Add Product");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
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
            onBlur={handleBlur}
            value={values.title} // Use 'values.title' instead of 'value.title'
          />
          {errors.title && touched.title && <p style={{color:'red'}}>{errors.title}</p>}
        </div>

        <div>
          <label htmlFor="price">Product Price</label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price} // Use 'values.price' instead of 'value.price'
          />
          {errors.price && touched.price && <p style={{color:'red'}}>{errors.price}</p>}
        </div>

        <div>
          <label htmlFor="description">Product Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description} // Use 'values.description' instead of 'value.description'
          />
          {errors.description && touched.description && <p style={{color:'red'}}>{errors.description}</p>}
        </div>

        <div>
          <label htmlFor="category">Product Category</label>
          <input
            type="text"
            name="category"
            id="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category} // Use 'values.category' instead of 'value.category'
          />
          {errors.category && touched.category && <p style={{color:'red'}}>{errors.category}</p>}
        </div>

        <div>
          <label htmlFor="image">Product Image URL</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image} // Use 'values.image' instead of 'value.image'
          />
          {errors.image && touched.image && <p style={{color:'red'}}>{errors.image}</p>}
        </div>

        <div className="button-group">
          <button type="submit">Register</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
