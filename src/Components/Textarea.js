import React, { useState } from "react";

export default function Textarea(props) {
  const [text, setText] = useState("");

  const clickupcase = () => {
    let Newtext = text.toUpperCase();
    setText(Newtext);
  };

  const clickCapitalizecase = () => {
    let Newtext = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(Newtext);
  };

  const clicklowcase = () => {
    let Newtext = text.toLowerCase();
    setText(Newtext);
  };

  const clickcopy = () => {
    navigator.clipboard.writeText(text);
  };
  const clickClearecase = () => {
    let Newtext = "";
    setText(Newtext);
  };

  const clickupchange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 className="my-3" >{props.heading}</h3>
        <textarea
          className="form-control"
          onChange={clickupchange}
          value={text}
          id="exampleFormControlTextarea1"
          rows="8"
          style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white" , color: props.mode === "dark" ? "white" : "black"}}
        ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={clickupcase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={clicklowcase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-2 mx-1" onClick={clickCapitalizecase}>
          Convert to Capitalized
        </button>
        <button className="btn btn-secondary my-2 mx-1" onClick={clickcopy}>
          Copy to clipboad
        </button>
        <button className="btn btn-danger my-2 mx-1" onClick={clickClearecase}>
          Clear Text  
        </button>
      </div>

      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length - 1} words and {text.length} Characters
        </p>
        <p>{0.009 * (text.split(" ").length - 1)} Minuts to Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

Textarea.defaultProps = {
  heading: "Enter heading",
};
