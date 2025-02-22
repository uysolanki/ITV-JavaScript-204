import React from 'react'
import './Button.css'

const Button = ({text,handleclick}) => {
  return (
    <button onClick={handleclick}>{text}</button>
  )
}

export default Button