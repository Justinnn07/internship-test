import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <div className="footer__leftOption">
          <span>About ArtFloor</span>
          {" | "}
          <span>Press Review </span>
          {" | "}
          <span>Contact Us</span>
          {" | "}
          <span>Terms & Conditions</span>
        </div>
        <div className="footer__leftOptions">
          <span>Track your order</span>
          {" | "}
          <span>Shipping costs & insurance</span>
          {" | "}
          <span>Payment methods</span>
          {" | "}
          <span>Cancelations, returns & refunds</span>
        </div>
      </div>
      <div className="footer__right">
        <span>Follow us : </span>
        <FacebookIcon />
        <img
          src="https://www.artfloor.com/images/positivessl_trust_seal_sm_124x32.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
