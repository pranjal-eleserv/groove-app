import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase button has been clicked");

    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Converted to uppercase","success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Screen Cleared","success");
  };
  const handleLowClick = () => {
    // console.log("Lowercase button has been clicked");

    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Converted to lowercase","success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
    props.showAlert("Copied to clipboard","success");
    // alert("text copied")
  };

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  // Declare a new state variable, which we'll call "text"
  const [text, setText] = useState("");
  // text = "how are you";  Wrong way to change the state we have to use function setText

  //setText("Correct Way");
  return (
    <>
      <div className="container ">
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>

        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            autoFocus
            className="form-control mt-2"
            id="myBox"
            rows="8"
            onChange={handleOnChange}
          ></textarea>
        </div>

        <div>
          <button className="btn btn-success mx-2 mt-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button
            className="btn btn-success mx-2 mt-2"
            onClick={handleLowClick}
          >
            Convert to lowercase
          </button>
          <button
            className="btn btn-success mx-2 mt-2"
            onClick={handleClearClick}
          >
            Clear text
          </button>
          <button className="btn btn-success mx-2 mt-2" onClick={handleCopy}>
            Copy text
          </button>
        </div>
      </div>

      <div
        style={{ color: props.mode === "dark" ? "white" : "black" }}
        className="container my-4"
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter your text to preview it here."}</p>
      </div>
    </>
  );
}
