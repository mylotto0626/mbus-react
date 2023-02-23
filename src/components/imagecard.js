import React, { Component } from "react";
import MainNav from "./MainNav";

class imagecard extends Component {
  render() {
    return (
      <div className="card" id="nav-div">
        <img src="./images/cardimg1.jpg" className="card-img" alt="1" />
        <div className="card-img-overlay">
          <MainNav />
          <a href="#"><button className="main-button">ACC-SPACE2</button></a>
        </div>
      </div>
    );
  }
}

export default imagecard;
