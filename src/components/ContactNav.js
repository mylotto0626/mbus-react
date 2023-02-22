import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class main_nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary">
          <div id="logo">
            <a href="http://localhost:3000" className="navbar-brand">
              <img src="/images/logo.png" alt="logo"></img>
            </a>
          </div>
          <ul id="contact-nav" className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000">
                <span>PROJECTS</span>
                <i className="underline"></i>
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
              <a
                className="nav-link"
                href="http://localhost:3000/contact"
              >
                <span>CONTENT</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                <img src="./images/searchicon.png" alt="검색"></img>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default main_nav;
