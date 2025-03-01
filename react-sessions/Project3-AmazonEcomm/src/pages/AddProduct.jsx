import React, { useState } from "react";
import "./AddProduct.css";
import { useFormik } from "formik";
import { registartionValidation } from "../components/Validation";

const AddProduct = () => {
  const p1 = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };

  const { errors, values, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: p1,
      validationSchema: registartionValidation,
      onSubmit: function () {
        saveData();
      },
    });

  async function saveData() {
    try {
      const response = await fetch(
        "http://localhost:8087/products/addProduct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

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
    <div className="container mt-5">
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="title" className="form-label">
            Product Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {errors.title && touched.title && (
            <p className="text-danger">{errors.title}</p>
          )}
        </div>

        <div className="col-md-4">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="text"
            name="price"
            id="price"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.price}
          />
          {errors.price && touched.price && (
            <p className="text-danger">{errors.price}</p>
          )}
        </div>

        <div className="col-md-4">
          <label htmlFor="description" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.description}
          />
          {errors.description && touched.description && (
            <p className="text-danger">{errors.description}</p>
          )}
        </div>

        <div className="col-md-4">
          <label htmlFor="category" className="form-label">
            Product Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
          />
          {errors.category && touched.category && (
            <p className="text-danger">{errors.category}</p>
          )}
        </div>

        <div className="col-md-4">
          <label htmlFor="image" className="form-label">
            Product Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.image}
          />
          {errors.image && touched.image && (
            <p className="text-danger">{errors.image}</p>
          )}
        </div>

        <div className="d-flex justify-content-start gap-2 col-md-4 mt-5 mb-5">
          <button type="submit" className="btn btn-primary"> Register </button>
          <button type="button" className="btn btn-secondary"> Cancel  </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
