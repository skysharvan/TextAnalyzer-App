// import React from 'react'
import React, { useState } from 'react';

 export default function TextForm(props) {
   const handlerUpClick =()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to upper case" , "success");
   }
   const handlerLoClick =()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase" , "success");
   }
   const handlerClearText = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Cleared text " , "success");
   }
   

   const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value)
   }

    const [text, setText] = useState('');
    // text = "new text"; // this wrong way to change the state
    // setText("new text"); // correct way to change the state
    //console.log(props.mode)
  return (
    <div className='container' style = {{color:props.mode === 'dark' ?'white':'dark'}}>
        <h1 style={{color:props.mode === 'dark'? 'white':'dark'}}>{props.heading }</h1>
        
      <div className="mb-3"> {/* mb-3 it is a fn for y axix margin in boostrap */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
    <button className="btn btn-primary mx-1" onClick={handlerUpClick}>Convert UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handlerLoClick}>Convert LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handlerClearText}>Clear Text</button>
    

    

   <div className="container">
     <h2>Your text summary</h2>
     <p>{text.split(" ").length} words and {text.length} character</p>
     <p>{0.008 *text.split(" ").length} Minutes read</p>
     <h2>Prieview</h2>
     <p>{text}</p>
   </div>
   </div>
  
  )
}

// export default TextForm;
