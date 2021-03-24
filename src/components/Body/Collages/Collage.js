import React from "react";
import "./Collage.css";

const Collage = () => {
  return (
    <div className="collage">
      <div className="collage__flex">
        <img
          src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Richter-potsdam-artfloor_1.jpg"
          alt=""
          className="collage__large"
        />
        {/* <p className="legend --active">Legend</p> */}
        <div className="collage__images">
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Drunk-Faces-by-Laplanche.jpg"
            alt=""
          />
          <img
            src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/333-homesmallbanner-richard_1.jpg"
            alt=""
          />
          <div className="collage__images1">
            <img
              src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/olivas_1.jpg"
              alt=""
              //   style={{ marginLeft: "20px" }}
            />
            <img
              src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Homepage-loisel-abstract-turquoise-100x100_1.jpg"
              alt=""
              className="image__left"
            />
          </div>
        </div>
      </div>
      <div className="collage__last">
        <img
          src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Hybl.jpg"
          alt=""
        />
        <img
          src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Bordereau-sq.jpg"
          alt=""
        />
        <img
          src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Limitededition_1.jpg"
          alt=""
        />
        <img
          src="https://www.artfloor.com/UserFiles/0f227b1c-d475-41c7-a68d-a45301398aba/optimized/Francois-morellet-diabeacon-small.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Collage;
