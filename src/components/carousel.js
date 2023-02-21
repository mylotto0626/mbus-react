import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class carousel extends Component {
  render() {
    let settings = {
      infinite: true, //무한 슬라이더로 할지
      speed: 1000,
      arrows: true, //화살표 (양옆 버튼) 구현할 것인지
      autoplay: true, //자동 재생 할 것인지
      autoplaySpeed: 2000,
      slidesToShow: 5, // 한번에 몇개 슬라이드 보여줄 것인지
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      centerPadding: "3px",
    };

    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              src="./images/footer_image1.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image2.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image3.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image4.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image5.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image6.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image7.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image8.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
          <div>
            <img
              src="./images/footer_image9.png"
              alt="."
              style={{ height: "32px" }}
            ></img>
          </div>
        </Slider>
      </div>
    );
  }
}

export default carousel;
