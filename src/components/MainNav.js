import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";

class main_nav extends Component { 
  constructor(props){
    super(props);
    this.mainRef=React.createRef();
    this.contactRef=React.createRef
    this.spanRef=React.createRef()
    this.spanChange=this.spanChange.bind();
  }

  spanChange(){
    if(this.aRef){
      this.spanRef.current.style='color:#fff'
    }else if(this.contactRef){
      this.spanRef.current.style='color:#000'
    }else{
      this.spanRef.current.style='color:#fff'
    }
  }

  render() {
    return (
      <div className="content-nav">
        <div className="top-bar">
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
            <li className="nav-item"  ref={this.aRef}>
              <a className="nav-link" href="http://localhost:3000">
                <span ref={this.spanRef}>PROJECTS</span>
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
            <li className="nav-item" ref={this.contactRef}>
              <a className="nav-link" href="http://localhost:3000/contact">
                <span ref={this.spanRef}>CONTENT</span>
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
