import React, { Component } from "react";
import MainNav from "./MainNav";

class imagecard extends Component {
  render() {
    return (
      <div className="card" id="nav-div">
        <img src="./images/slider.jpg" className="card-img" alt="1" />
        <div className="card-img-overlay">
          <MainNav />
          <button>ACC-SPACE2</button>
        </div>
      </div>
    );
  }
}

export default imagecard;
