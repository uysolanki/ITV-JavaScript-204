import React from 'react'
import './Button.css'
import { SiSimplelogin } from "react-icons/si";
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <>
    <button onClick={props.handleclick} style={props.bgcolor?{backgroundColor:props.bgcolor,color:props.color}:{backgroundColor:'blue',color:'white'}}>{props.text}{props.icon}</button>
    {console.log(props)}
    </>
  )
}

Button.defaultProps = {
    bgcolor: 'green',
    color: 'white',
    text: 'Virat Kohli',
    icon: <SiSimplelogin />,  // JSX element directly
    handleclick: () => {},
  }

  Button.propTypes = {
    bgcolor: PropTypes.string,
    color: PropTypes.string,
    text:PropTypes.string,
    icon:PropTypes.node,
    handleclick:PropTypes.func
  }
  
export default Button

