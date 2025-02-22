import React, { useState } from 'react'
import './List.css'
const List = () => {
    let player="Hardik"
    console.log(player)
    
    //let counter=0

    const [counter,setCounter]=useState(0)
    const [flag,setFlag]=useState(true)
    const [timer,setTimer]=useState(0)
    const [intervalID,setIntervalID]=useState(0) //20022025

    function increment()
    {
        if(counter<10)
       // setCounter(counter+1)             //A
        setCounter(prev=>prev+1)            //B
    }

    function decrement(value)
    {
        if(counter>0)
        setCounter(counter-value)
        setFlag(!flag)
    }

    //Function Declaration
    // function startTimer()
    // {
    //     const intervalID=setInterval(() => {        //20022025
    //         setTimer(prev=>prev+1)
    //     }, 100);

    //     setIntervalID(intervalID)
    // }

    // function stopTimer()
    // {
    //     clearInterval(intervalID)
    // }

    //Arror Function

    const startTimer=()=>
    {
        const intervalID=setInterval(() => {        //20022025
            setTimer(prev=>prev+1)
        }, 100);

        setIntervalID(intervalID)
    }

    const stopTimer=()=>
    {
        clearInterval(intervalID)
    }

    const resetTimer=()=>{
        clearInterval(intervalID)
        setTimer(0)
    }

    let fruit="Apple"    //Truthy  Falsy
    let a=-0
    let b=undefined
    let c=null
    const cars=[]
    const player1={jno:18}

    if(player1.pname)
        console.log("Hiiiiiirrrrooooooojjjjjj")
    else
        console.log("byeeeeerrrrrooooookjjjjjj")
  
    return (
    <>  
    <p>Welcome {player}, to Full Stack</p>
    <button onClick={increment} style={{backgroundColor:'red', color:'pink'}}>Increment By 1</button>
    <button onClick={()=>{decrement(4)}} className='blue'>Deccrement By 1</button>
    <button onClick={decrement} className={flag?'blue':'green'}>Deccrement By 2</button>
    <br/><span>{counter}</span> <br/>
    <button onClick={startTimer}>Start Timer</button>
    <button onClick={stopTimer}>Stop Timer</button>
    <button onClick={resetTimer}>Reset Timer</button>
    <br/><span>{timer}</span>
    </>
)
}

export default List