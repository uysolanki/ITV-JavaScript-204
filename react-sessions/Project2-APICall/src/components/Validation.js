import * as yup from 'yup';

export const registartionValidation =yup.object(
    {
        title: yup
        .string()
        .matches(/^[a-zA-Z ]{3,20}$/, "Enter a valid name with 3-20 characters")
        .required("Title is Mandatory"),

         price: yup
        .number()
        .typeError("Price must be a number")
        .min(1, "Min Price must be greater than 0")
        .max(100000, "Max Price must be less than or equal to 100000")
        .required("Price is Mandatory"),


        description: yup
        .string()
        .matches(/^[a-zA-Z ]{3,200}$/, "Enter a valid description with 3-200 characters"),

        category: yup
        .string()
        .matches(/^[a-zA-Z ]{3,20}$/, "Enter a valid Category with 3-20 characters")
        .required("Category is Mandatory"),

        image: yup
        .string()
        .url("Enter a valid URL") // Ensures it's a valid URL
        .matches(/\.(jpeg|jpg|png|gif|bmp|svg)$/i, "Enter a valid image URL (jpeg, jpg, png, gif, bmp, svg)")
        .required("Image URL is Mandatory")


    }
);