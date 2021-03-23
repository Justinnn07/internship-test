import { Search } from "@material-ui/icons";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__header">
        <div className="header__flex">
          <img src="https://www.artfloor.com/images/artfloor.png" alt="" />
          <div className="app__headerText">
            <small>
              International <span className="Art__dealers">Art Dealers</span>
            </small>
            <small>
              & <span className="Art__dealers">Art Consultants</span>
            </small>
          </div>
        </div>
        <input type="text" placeholder="Search" />
        <Search />
      </div>
    </div>
  );
}

export default App;
