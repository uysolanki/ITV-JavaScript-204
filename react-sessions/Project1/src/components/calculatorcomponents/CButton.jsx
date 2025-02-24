import React from 'react'

//const CButton = (props) => {
const CButton = ({cssclassname,onclickhandler,img,text}) => {
  return (
//    <button class={props.cssclassname}  onClick={props.onclickhandler}><img src={props.img} />{props.text}</button>
     <button className={cssclassname}  onClick={onclickhandler}><img src={img} />{text}</button>
  )
}

export default CButton