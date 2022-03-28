import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("black");


  const handleChange = (event) => {
    setText(event.target.value);
  }
  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText);
    props.alert("Converted to uppercase", "success");
  }
  const handleLwClick = () => {
    let newText = text.toLowerCase()
    setText(newText);
    props.alert("Converted to lowercase", "success");
  }

  const handleColorClick = (event) => {

    let rR = Math.floor(Math.random() * 255);
    let rG = Math.floor(Math.random() * 255);
    let rB = Math.floor(Math.random() * 255);

    setTextColor(`rgb(${rR},${rG},${rB})`);
    props.alert("Color Changed", "success");
  }

  const handleClearClick = () => {
    setText("");
    props.alert("Text Cleared", "success");
  }

  return (
    <>
      <div className='Container'>
        <div className=" mb-3">
          <h1 style={{ color: props.mode === "light" ? "black" : "white", marginBottom: "20px" }}>{props.heading}</h1>
          <textarea className="form-control" value={text} onChange={handleChange} spellCheck="false" style={{ color: `${textColor}`, fontSize: "20px", backgroundColor: props.mode === "light" ? "white" : "#eeeeee", cursor: "text" }} id="myBox" rows="8"></textarea>
        </div>
        <div className="container my-4" style={{ marginLeft: "-30px" }}>
          <button className={`btn btn-${props.mode} mx-3 my-1`} disabled={text.length === 0} style={{ border: props.mode === "light" ? "2px solid black" : "2px solid white" }} onClick={handleUpClick}>Convert to Uppercase</button>
          <button className={`btn btn-${props.mode} mx-3 my-1`} disabled={text.length === 0} style={{ border: props.mode === "light" ? "2px solid black" : "2px solid white" }} onClick={handleLwClick}>Convert to Lowercase</button>
          <button className={`btn btn-${props.mode} mx-3 my-1`} disabled={text.length === 0} style={{ border: props.mode === "light" ? "2px solid black" : "2px solid white" }} onClick={handleColorClick}>Change TextColor</button>
          <button className={`btn btn-${props.mode} mx-3 my-1`} disabled={text.length === 0} style={{ border: props.mode === "light" ? "2px solid black" : "2px solid white" }} onClick={handleClearClick}>Clear Text</button>
        </div>
      </div>
      <div className="Container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((elm) => (elm.length !== 0)).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((elm) => (elm.length !== 0)).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Enter Something to preview here" : text}</p>
      </div>
    </>
  )
}
