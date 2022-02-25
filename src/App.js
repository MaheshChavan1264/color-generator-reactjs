import React, { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";

const App = () => {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(new Values("#fc03be").all(10));
  console.log("Default ColorList", colorList);
  const [error, setError] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setColorList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <div className="text">
        <h1>Color Palletes Generator</h1>
        <h3>Click on Pallete to copy Color code</h3>
      </div>
      <section className="container">
        <input
          type="text"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
          placeholder="#fc03be"
          className={`${error ? "error" : null}`}
        />
        <button onClick={handleButtonClick} className="btn">
          Submit
        </button>
      </section>
      <section>
        <div className="colors">
          {colorList.map((color, index) => {
            return <SingleColor key={index} {...color} index={index} />;
          })}
        </div>
      </section>
    </>
  );
};

export default App;
