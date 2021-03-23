import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import PublicIcon from "@material-ui/icons/Public";

const Header = () => {
  return (
    <div className="header">
      <div className="header__icons">
        <ShoppingCartIcon />
        <SupervisedUserCircleIcon />
        <PublicIcon />
        <hr />
        <div className="header__rightlang">
          <span>Fr</span>
          <small>|</small>
          <span className="langActive">En</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
