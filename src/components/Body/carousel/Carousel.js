import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="slider">
        <img
          src="http://via.placeholder.com/250x250/DAF7A6"
          className="image5"
          alt=""
        />
        <img
          alt=""
          src="http://via.placeholder.com/250x250/FFC300"
          className="image4"
        />
        <img
          alt=""
          src="http://via.placeholder.com/250x250/FF5733"
          className="image3"
        />

        <img
          alt=""
          src="http://via.placeholder.com/250x250/C70039"
          className="image2"
        />
        <img
          alt=""
          src="http://via.placeholder.com/250x250/581845"
          className="image1"
        />
      </div>
    </div>
  );
};

export default Carousel;
