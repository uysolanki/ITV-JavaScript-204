import React, { useState } from 'react'
import './List.css'
const List = () => {
    let player="Hardik"
    console.log(player)
    
    //let counter=0

    const [counter,setCounter]=useState(0)
    const [flag,setFlag]=useState(true)

    function increment()
    {
        if(counter<10)
        setCounter(counter+1)
    }

    function decrement(value)
    {
        if(counter>0)
        setCounter(counter-value)
        setFlag(!flag)
    }

  
    return (
    <>  
    <p>Welcome {player}, to Full Stack</p>
    <button onClick={increment} style={{backgroundColor:'red', color:'pink'}}>Increment By 1</button>
    <button onClick={()=>{decrement(4)}} className='blue'>Deccrement By 1</button>
    <button onClick={decrement} className={flag?'blue':'green'}>Deccrement By 2</button>
    <br/><span>{counter}</span>
    </>
)
}

export default List