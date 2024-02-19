import React, { useState } from "react";

export default function Form({ heading }) {
  const [text, setText] = useState("enter a text");
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

  return (
    <>
      <div className="container">
        <h2>{heading}</h2>
        <div className="mb-3">
          <textarea
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
        <button className="btn btn-danger mx-2" onClick={clearTextHandler}>
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <h2>Text Summary</h2>
        <p>
          {text.split(" ").length} Words and Characters {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
