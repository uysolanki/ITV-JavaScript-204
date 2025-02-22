import React, { useState } from 'react'
import './TextAreaPro.css'
import Button from './shared/Button'

const TextAreaPro = () => {

   const [text,setText]=useState('')
   const [previewText,setPreviewText]=useState('')
   function handleOnChange(event)
   {
        let text=event.target.value
        setText(text)
        setPreviewText(text)
        console.log(text)
   }
  
   function convertToUpperCase()
   {
    setPreviewText((prev)=>prev.toUpperCase())
   }
   function convertToLowerCase()
   {
    setPreviewText((prev)=>prev.toLowerCase())
   }

   function wordCount()
   {
    setPreviewText((prev)=>prev.toLowerCase())
   }
  
    return (
   <>
    <div className='parent-container'>
            <div className='left-section'>
                    <div >
                                    <textarea
                                        cols="100"
                                        rows="20"
                                        value={text?text :'Please enter text here'}
                                        onChange={handleOnChange}
                                    ></textarea>
                    </div>
                    <div className='button-container'>
                                    {/* <button onClick={handleUpperCase}>UpperCase</button> */}
                                    {/* <button>LowerCase</button> */}
                                    <button>WordCount</button>
                                    <button>LineCount</button>
                                    <Button text="Upper Case" handleclick={convertToUpperCase}/>
                                    <Button text="Lower Case" handleclick={convertToLowerCase}/>
                                    <Button text="Word Count" handleclick={wordCount}/>
                                    <Button text="Line Count"/>
                    </div>
            </div>
            <div className='right-section'>
                    <h3>Preview</h3>
                    <p>{previewText?previewText :'Nothing to Preview'}</p>

                    <span>Word Count {previewText.trim().split(" ").length}</span><br/>
                    <span>Character Count {previewText.trim().length}</span>
            </div>
    </div>
   </>
  )
}

export default TextAreaPro