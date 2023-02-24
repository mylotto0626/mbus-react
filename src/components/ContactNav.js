import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class main_nav extends Component {
  render() {
    return (
      <div className="content-nav">
        <div className="top-bar" id='background'>
          <div className="top-mail">
            <a href="#">
              <img src="./images/envelope-fill.svg" alt="메일"></img>
              <span>info@mbus703.art</span>
            </a>
          </div>
          <div className="top-icons">    
              <a href="#">
                <img src="./images/facebook.svg" alt="페북" className="icon-img"></img>
              </a>
              <a href="#">
                <img src="./images/instagram.svg" alt="인스타그램" className="icon-img"></img>
              </a>
              <a href="#">
                <img src="./images/twitter.svg" alt="트위터" className="icon-img"></img>
              </a>
              <a href="#">
                <img src="./images/youtube.svg" alt="유튜브" className="icon-img"></img>
              </a>
              <a href="#">
                <img src="./images/whatsapp.svg" alt="페북" className="icon-img"></img>
              </a>
          </div>
        </div>
        <nav className="navbar bg-body-tertiary" style={{padding:'50px'}}>
          <div id="logo">
            <a href="http://localhost:3000" className="navbar-brand">
              <img src="/images/logo.png" alt="logo"></img>
            </a>
          </div>
          <ul id="main-nav" className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000">
                <span>PROJECTS</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span>NFTS</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                <span>NEWS</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                <span>ABOUT</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/contact" onClick={this.aClick}>
                <span>CONTENT</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                <img src="./images/search.svg" alt="검색"></img>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default main_nav;
