import React, { useEffect, useState } from 'react'
import './Calculator.css'

import pic1 from '../assets/myimages/pic1.jpg'
import pic2 from '../assets/myimages/pic2.jpg'
import pic3 from '../assets/myimages/pic3.jpeg'
import pic4 from '../assets/myimages/pic.jpeg'
import picThree from '../assets/myimages/three.jpeg'
import CButton from '../components/calculatorcomponents/CButton'
const Calculator = () => {
    const [value,setValue]=useState('')
    const [op1, setOp1] = useState(null)
    const [operation, setOperation] = useState(null)

    useEffect(
        ()=>{
               api call
        },[]
    )
    function buttonClick(buttonText)
    {
      
        let op2;
        let result;
        if(typeof buttonText==='number'||buttonText===".")
            setValue((prev)=>(prev.concat(buttonText)))
        else if(buttonText==="+")
        {
            setOp1(value);
            setOperation("add")
            setValue('')
            console.log(op1)
            console.log(operation)
        }
        else if(buttonText==="-")
        {
            setOp1(value);
            setOperation("sub")
            setValue('')
            console.log(op1)
            console.log(operation)
        }
        else if(buttonText==="*")
        {
            setOp1(value);
            setOperation("mult")
            setValue('')
            console.log(op1)
            console.log(operation)
        }
        else if(buttonText==="/")
        {
            setOp1(value);
            setOperation("div")
            setValue('')
            console.log(op1)
            console.log(operation)
        }
        else
        {
            op2=value; 
            console.log(op2)
            switch(operation)
            {
                case "add" : console.log("Apple"); result=parseFloat(op1)+parseFloat(op2); console.log(result);  break;
                case "sub" : result=op1-op2;break;
                case "mult" : result=op1*op2;break;
                case "div" : result=op1/op2;break;         
            }
            setValue(result.toString())  // Show the result in display
            setOp1(null)  // Clear the operand 1
            setOperation(null)  //
        }
    }
  return (
    <>
    <input type="text" id="display-p" value={value} readOnly/>
    <div className='parent'>    
        {/* <button class="calc-btn"  onClick={incrementBy1}><img src={pic1} />Increment By 1</button>
        <button  class="calc-btn" onClick={incrementBy2}><img src={pic2} />Increment By 2</button>
        <button  class="calc-btn" onClick={decrementBy1}><img src={pic3}/>Decrement By 1</button>
        <button  class="calc-btn" onClick={decrementBy2}><img src={pic4}/>Decrement By 2</button> */}
        {/* <CButton cssclassname="calc-btn" onclickhandler={incrementBy1} img={pic1} text="Increment By 1"/>
        <CButton cssclassname="calc-btn" onclickhandler={incrementBy2} img={pic2} text="Increment By 2"/>
        <CButton cssclassname="calc-btn" onclickhandler={decrementBy1} img={pic3} text="Decrement By 1"/>
        <CButton cssclassname="calc-btn" onclickhandler={decrementBy2} img={pic4} text="Decrement By 2"/> */}
        <table>
            <tbody>
            <tr>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(1)} img={picThree} text="1"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(2)} img={pic2} text="2"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(3)} img={pic3} text="3"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(4)} img={pic4} text="4"/></td>
            </tr>
            <tr>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(5)} img={pic1} text="5"/></td>
             <td> <CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(6)} img={pic2} text="6"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(7)} img={pic3} text="7"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(8)} img={pic4} text="8"/></td>
            </tr>
            <tr>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(9)} img={pic1} text="9"/></td>
             <td> <CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(0)} img={pic2} text="0"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick("+")} img={pic3} text="+"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick("-")} img={pic4} text="-"/></td>
            </tr>
            <tr>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick("*")} img={pic1} text="*"/></td>
             <td> <CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick("/")} img={pic2} text="/"/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick(".")} img={pic3} text="."/></td>
             <td><CButton cssclassname="calc-btn" onclickhandler={()=>buttonClick("=")} img={pic4} text="="/></td>
            </tr>
            </tbody>
        </table>
    </div>
    </>
  )
}

export default Calculator