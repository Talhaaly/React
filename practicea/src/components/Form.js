import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  // function for uppercase
  const uppercasehandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  //   function for lowercase
  const lowercasehandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  //   function for change
  const onChangeHandler = (e) => {
    setText(e.target.value);
    // console.log(elem.target.value)
  };
  //   function for clear text
  const clearTextHandler = () => {
    setText("");
  };
 
  //   function for copy text
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    const textArea = document.getElementById("myBox");
    textArea.select();
    
    // alert("Text copied to clipboard");
  };
  // function for remove extra spaces 
 
  const spaceHandler = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  };
  return (
    <>
      <div className="container" style={{backgroundColor: props.mode === 'light'? 'white':'#051937', color: props.mode==='light'?'black':'white'}} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
          style={{backgroundColor: props.mode === 'light'? 'white':'#051937', color: props.mode==='light'?'black':'white'}}
            className="form-control"
            value={text}
            onChange={onChangeHandler}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={uppercasehandler}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={lowercasehandler}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={copyToClipboard}>
          Copy to clipBoard
        </button>
        <button className="btn btn-primary mx-2" onClick={spaceHandler}>
          Remove Space
        </button>
        <button className="btn btn-danger mx-2" onClick={clearTextHandler}>
          Clear Text
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and Characters {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter something in the textBox aboveto preview it here.'}</p>
      </div>
    </>
  );
}
