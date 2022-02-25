import React, { useEffect, useState } from "react";
import rgbToHex from "./rgbToHex";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const background = rgb.join(",");
  const hexColor = rgbToHex(...rgb);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [alert]);
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${background})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.write(hexColor);
      }}
    >
      <div className="inner-text">
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexColor}</p>
        {alert && <p className="alert">Copied to Clipboard</p>}
      </div>
    </article>
  );
};

export default SingleColor;
