import React, { Component } from "react";
import Slider from "react-slick";
import BrandLogo1 from "../../../assets/Images/BrandLogo/BrandLogo1.png";
import BrandLogo2 from "../../../assets/Images/BrandLogo/BrandLogo2.png";
import BrandLogo3 from "../../../assets/Images/BrandLogo/BrandLogo3.png";
import BrandLogo4 from "../../../assets/Images/BrandLogo/BrandLogo4.png";
import BrandLogo5 from "../../../assets/Images/BrandLogo/BrandLogo5.png";

export default class Brandlogo extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 1500,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrow:false,

      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 5,
  
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
  
          }
        },
        { 
          breakpoint: 800,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
    };
    return (
      <>
        <div className="container">
          <div className="brandLogo">
          <Slider {...settings}>
            <div>
              <img className="img-fluid mx-auto" src={BrandLogo1} alt="BrandLogo" />
            </div>
            <div>
              <img className="img-fluid mx-auto" src={BrandLogo2} alt="BrandLogo" />
            </div>
            <div>
              <img className="img-fluid mx-auto" src={BrandLogo3} alt="BrandLogo" />
            </div>
            <div>
              <img className="img-fluid mx-auto" src={BrandLogo4} alt="BrandLogo" />
            </div>
            <div>
              <img className="img-fluid mx-auto" src={BrandLogo5} alt="BrandLogo" />
            </div>
            <div>
              <img className="img-fluid mx-auto" src={BrandLogo3} alt="BrandLogo" />
            </div>
            <div>
              <img className="img-fluid mx-auto" src={BrandLogo2} alt="BrandLogo" />
            </div>
          </Slider>
          </div>
        </div>
      </>
    );
  }
}
