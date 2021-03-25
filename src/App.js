import React, { useEffect, useState } from "react";
import "./App.css";
import Carousels from "./components/Body/carousel/Carousel";
import Collage from "./components/Body/Collages/Collage";
import Footer from "./components/Body/Footer/Footer";
import Options from "./components/Body/MenuOptions/Options";
import LastOptions from "./components/EndOptions/LastOptions";
import Header from "./components/Header/Header";
import HeaderData from "./Data/HeaderData";
import { Search } from "@material-ui/icons";

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
      <Carousels />
      <Collage />
      <LastOptions />
      <Footer />
    </div>
  );
}

export default App;
