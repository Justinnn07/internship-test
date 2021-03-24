import React from "react";
import "./LastOptions.css";

const LastOptions = () => {
  return (
    <div className="lastOptions">
      <div className="lastOptions__btns">
        <span>Art Consultants & Art Dealers</span>
        <span>In the Press</span>
        <span>Corporate Projects</span>
      </div>
      <div className="last__newsletter">
        <span>Subscribe To Our Newsletter: </span>
        <input type="text" placeholder="Enter Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default LastOptions;
