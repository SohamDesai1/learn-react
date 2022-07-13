import React, { useState } from "react";
export default function State(props) {
  const clickHandler = () => {
    console.log("btn clicked");
    const newtext = text.toUpperCase();
    setText(newtext);
  };

  const regain = () => {
    console.log("returned to previous state");
    const newtext = text.toLowerCase();
    setText(newtext);
  };

  const handle = (e) => {
    console.log("It was handled");
    setText(e.target.value);
  };

  const [text, setText] = useState("Enter text");
  return (
    <div>
      <div>
        <h1>This is a heading for {props.heading}</h1>
        <textarea
          name="Text"
          cols="100"
          rows="10"
          value={text}
          onChange={handle}
        ></textarea>
      </div>
      <button onClick={clickHandler}>ChangetoUppercase</button>
      <button onClick={regain}>ChangetoLowercase</button>
    </div>
  );
}
