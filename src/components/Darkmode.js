import React, { useState } from "react";

export default function Darkmode() {
  const [text, setText] = useState("Enter text");

  const handle = (e) => {
    console.log("It was handled");
    setText(e.target.value);
  };

  const [darkmode, setDarkmode] = useState({
    darkmode: false,
    color :  "white",
  });
  const toggleDarkmode = () => {
    setDarkmode({
      darkmode: !darkmode.darkmode,
      color: darkmode.darkmode ? "white" : "black",
    });
  }

  return (
    <div>
      <textarea
        name="Text"
        cols="100"
        rows="10"
        value={text}
        onChange={handle} 
        style={{backgroundColor: darkmode.color}}
      ></textarea>
      <div><button onClick={toggleDarkmode}>Enable dark mode</button></div>
    </div>
  );
}
