import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class main_nav extends Component {
  render() {
    return (
      <div>
        <nav className='navbar bg-body-tertiary'>
        <div id="logo">
          <a href="#" className="navbar-brand"><img src="/images/logo.png" alt="logo"></img></a>
        </div>
        <ul id="nav" className="nav justify-content-end">
            <li className="nav-item">
              <a class="nav-link" href="#!">
                <span>PROJECTS</span>
                <i className="underline"></i>
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#!"><span>NFTS</span></a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#!"><span>NEWS</span></a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#!"><span>ABOUT</span></a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#!"><span>CONTENT</span></a>
            </li>
            <li className="nav-item">
              <a class="nav-link" href="#!">
                <img src="./images/searchicon.png" alt="검색"></img>
              </a>
            </li>
        </ul>
        </nav>
        <h1>s</h1>
      </div>
    );
  }
}

export default main_nav;
