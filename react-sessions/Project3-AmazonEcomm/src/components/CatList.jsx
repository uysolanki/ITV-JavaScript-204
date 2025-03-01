import React from 'react'
import './CatList.css'
const CatList = (props) => {
    return (
        <ul>
          {
          props.items.map(
            (navListItem, index) => 
            {
            return <li key={index} onClick={()=>props.clickHandler(navListItem)}>{navListItem}</li>;
            }
          )
          }
        </ul>
      );
    };

export default CatList