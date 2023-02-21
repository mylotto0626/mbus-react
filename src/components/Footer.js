import React, { Component } from "react";
import Carousel from "./carousel";

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="empty-space" style={{ height: "32px" }}></div>
        <div className="footer-title">
          <hr className="bar"></hr>
          <span className="text">OUR CLIENT</span>
          <hr className="bar"></hr>
        </div>
        <Carousel/>
        <div className="empty-space" style={{ height: "32px" }}></div>
        <div className="footer-title">
          <hr className="bar"></hr>
          <span className="text">OUR PARTNERS</span>
          <hr className="bar"></hr>
        </div>
        <div className="partner-imgs">
            <img src="./images/footer_partner1.png" className="part-img"></img>
            <img src="./images/footer_partner2.png" className="part-img"></img>
            <img src="./images/footer_partner3.png" className="part-img"></img>
        </div>
        <div className="empty-space" style={{ height: "32px" }}></div>
        <div className="empty-space" style={{ height: "32px" }}></div>
      </div>
    );
  }
}

export default Footer;
