import React, { Fragment, useEffect, useState } from "react";
import "./App.css";
import Carousels from "./components/Body/carousel/Carousel";
import Collage from "./components/Body/Collages/Collage";
import Footer from "./components/Body/Footer/Footer";
import Options from "./components/Body/MenuOptions/Options";
import LastOptions from "./components/EndOptions/LastOptions";
import Header from "./components/Header/Header";
import HeaderData from "./Data/HeaderData";
import ToggleOnIcon from "@material-ui/icons/ToggleOn";
import { Search } from "@material-ui/icons";
import ToggleOffIcon from "@material-ui/icons/ToggleOff";

function App() {
  const [headerData, setHeaderData] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setHeaderData(HeaderData);
  }, [headerData]);

  return (
    <Fragment>
      {dark === true ? (
        <div className="AppDark">
          <Header />
          <div className="options__options">
            <ToggleOnIcon fontSize="large" onClick={() => setDark(false)} />{" "}
            {"=> Change theme here"}
          </div>
          <div className="app__header">
            <div className="header__flex">
              <img src="https://www.artfloor.com/images/artfloor.png" alt="" />
              <div className="app__headerText">
                {headerData.map((data) => (
                  <div>
                    <small>
                      {data.Title}{" "}
                      <span className="Art__dealers">{data.coloredText}</span>
                    </small>
                    <small>
                      {data.title1}{" "}
                      <span className="Art__dealers">{data.coloredText2}</span>
                    </small>
                  </div>
                ))}
              </div>
            </div>
            <div className="header__input">
              <input
                type="text"
                placeholder="Search"
                className="input__input"
              />
              <Search />
            </div>
          </div>
          <Options />
          <Carousels />
          <Collage />
          <LastOptions />
          <Footer />
        </div>
      ) : (
        <div className="App">
          <Header />
          <div className="options__options">
            <ToggleOffIcon fontSize="large" onClick={() => setDark(true)} />
            {"=> Change theme here"}
          </div>
          <div className="app__header">
            <div className="header__flex">
              <img src="https://www.artfloor.com/images/artfloor.png" alt="" />
              <div className="app__headerText">
                {headerData.map((data) => (
                  <div>
                    <small>
                      {data.Title}{" "}
                      <span className="Art__dealers">{data.coloredText}</span>
                    </small>
                    <small>
                      {data.title1}{" "}
                      <span className="Art__dealers">{data.coloredText2}</span>
                    </small>
                  </div>
                ))}
              </div>
            </div>
            <div className="header__input">
              <input type="text" placeholder="Search" />
              <Search />
            </div>
          </div>
          <Options />
          <Carousels />
          <Collage />
          <LastOptions />
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default App;
