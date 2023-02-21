import React, { Component } from "react";
import ContactNav from './ContactNav';

class contact extends Component {
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Email:""
        }
        this.NameHandler = this.NameHandler.bind(this);
        this.EmailHandler = this.EmailHandler.bind(this);
        this.AreaHandler = this.EmailHandler.bind(this);
    }

     NameHandler(event){
        this.setState({
            Name:event.target.value
        })
        console.log(event.target.value)
    }

    EmailHandler(event){
        this.setState({
            Email:event.target.value
        })
        console.log(event.target.value)
    }

    AreaHandler(event){
      this.setState({
        Email:event.target.value
    })
    console.log(event.target.value)
    }
  render() {
    return (
      <div>
         <ContactNav/>

        {/* contact 페이지 왼쪽 영역 */}
        <div className="contact-wrap left">
          <div className="contact-title">
            <span>Contact Us</span>
          </div>
          <div className="empty-space" style={{ height: "32px" }}></div>
          <div className="contact-text">
            <p>
              with questions regarding any of the topics listed below. Have
              something else you want to discuss?
              <br></br>
              No problem, we will answer any questions related to your creative
              and professional advice needs.
            </p>
            <ul>
              <li>General Inquiries</li>
              <li>Creation Space in Metaverse</li>
              <li>NFT</li>
              <li>Creation Online content</li>
              <li>General Inquiries</li>
              <li>General Inquiries</li>
              <li>General Inquiries</li>
            </ul>
          </div>
          <form className="input-form" method="post">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                defaultValue={this.state.Name}
                onChange={this.NameHandler}
                required='true'
                placeholder="Name *"
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="emaii"
                className="form-control"
                defaultValue={this.state.Email}
                onChange={this.EmailHandler}
                required='true'
                placeholder="E-mail *"
              ></input>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                required='true'
                onChange={this.AreaHandler}
                placeholder="Message *"
              ></textarea>
            </div>
          </form>
          <p>
            <label for="term"></label>
            <input type={"checkbox"}></input>
            &nbsp;
            <span>
              By using this form you agree with the storage and handling of your
              data by this website.
            </span>
          </p>
          <p>
            <a href="#">
              <button className="btn btn-primary">Send Message</button>
            </a>
          </p>
        </div>

        {/* contact 페이지 오른쪽 영역 */}
        <div className="contact-wrap right">
          <div className="inner">
          <div className="contact-title">
            <span>Office</span>
          </div>
            <div className="empty-space" style={{ height: "32px" }}></div>
            <div className="office-text">
              <p>
                (T16942) A-703, Gwanggyojungang-ro 338, Suji-gu, Yongin-si,
                Gyeonggi-do, Republic of Korea
              </p>
              <p>
                경기도 용인시 수지구 광교중앙로338 (상현동 508) 광교우미뉴브
                지식산업센터 A703 (우 16942)
              </p>
              <ul>
                <li>Email : info@mbus703.art</li>
              </ul>
            </div>
            <div className="map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.769386946448!2d127.06905961530413!3d37.30059907984853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5b93851d532f%3A0x82a9bd0d67ebfa91!2sstudio%20mbus703!5e0!3m2!1sko!2skr!4v1644564664053!5m2!1sko!2skr"
                style={{ height: "450px", width: "600px" }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
