import React from 'react'
import eye from '../assets/myimages/eye.png';
import hide_eye from '../assets/myimages/hide_eye.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './UserRegister.css'

const UserRegister = () => {
    let u1 = {
        username: "", // Product title
        password: "", // Product Image
      };

    const [user, setUser] = useState(u1);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function togglePasswordVisibility()
    {
        setShowPassword(!showPassword);
    }
    function handleChange(event)
    {
    const { name, value } = event.target; //name=title value =T
    setUser((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
          const response = await fetch("http://localhost:8087/registerUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });
    
          if (response.ok) {
            const data = await response.json();
            //alert(data.sname + " " +" user registered successfully!");
            alert("User Registration successful!");
            navigate("/");
            console.log(data);
            //resetForm();
          } else {
            alert("Failed to Register User");
          }
        } catch (error) {
          console.error("Error submitting the form", error);
        }
      }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <label htmlFor="username">User Email</label>
            <input
              type="email"
              name="username"
              id="username"
              onChange={handleChange}
              value={user.username}
            />

            <label htmlFor="password">Password</label>          
            <div className="password-container">  
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                onChange={handleChange}
                value={user.password}
                style={{marginRight:'20px'}}
              />
              <button
                type="button"
                className="password-toggle-button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <img src={eye} alt="Show Password" /> 
                ) : (
                 <img src={hide_eye} alt="Hide Password" />
                )}
              </button>
            </div>
          </div>
          <div className="submit-btn">
            <button type="submit" style={{marginRight:'20px'}}>Register</button>
            <button type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegister