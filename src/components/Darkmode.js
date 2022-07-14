import React, { useState } from "react";

export default function Darkmode(props) {
  const [text, setText] = useState("Enter text");

  const handle = (e) => {
    console.log("It was handled");
    setText(e.target.value);
  };

  const [darkmode, setDarkmode] = useState({
    darkmode: false,
  });
  const toggleDarkmode = () => {
    setDarkmode(
      { 
        darkmode: !darkmode.darkmode,
        color: darkmode.darkmode ? "black" : "white",
      },
      (document.body.style.backgroundColor = darkmode.color)
    );
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></script>
      <div>
        <textarea
          name="Text"
          cols="100"
          rows="10"
          value={text}
          onChange={handle}
          // style={{ backgroundColor: darkmode.color }}
        ></textarea>
      </div>
      <div className="form-check form-switch">
        <input
          onClick={toggleDarkmode}
          className="form-check-input"
          type="checkbox"
          // eslint-disable-next-line
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable dark mode
        </label>
      </div>
    </>
  );
}
