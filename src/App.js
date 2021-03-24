import { Search } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./App.css";
import Carousels from "./components/Body/carousel/Carousel";
import Options from "./components/Body/Options/Options";
import Header from "./components/Header/Header";
import HeaderData from "./Data/HeaderData";

function App() {
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    setHeaderData(HeaderData);
  }, [headerData]);
  return (
    <div className="App">
      <Header />
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
      <Carousels className="carousel1" />
    </div>
  );
}

export default App;
