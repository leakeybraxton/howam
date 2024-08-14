import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import About1 from "../../../assets/Images/AboutUs/About1.png";
import About2 from "../../../assets/Images/AboutUs/About2.png";
import AboutSlider1 from "../../../assets/Images/AboutUs/AboutSlider1.png";
import AboutSlider2 from "../../../assets/Images/AboutUs/AboutSlider2.png";
import AboutSlider3 from "../../../assets/Images/AboutUs/AboutSlider3.png";
import AboutSlider4 from "../../../assets/Images/AboutUs/AboutSlider4.png";
import { Link } from "react-router-dom";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      slide: ".slick-slideshow__slide",
      slidesToShow: 1,
      centerMode: true,
      centerPadding: "110px",
      responsive: [
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 2,
            centerMode: false,
          },
        },
        {
          breakpoint: 800,
          settings: {
            centerMode: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: false,
          },
        },
      ],
    };
    return (
      <>
        <div className="container">
          <div className="mainAboutUs">
            <Row>
              <Col xl={6} lg={6} data-aos="fade-up">
                <div className="aboutSliderDiv">
                  <Slider className="aboutSlider" {...settings}>
                    <div>
                      <img
                        className="img-fluid mx-auto"
                        src={AboutSlider2}
                        alt="AboutSlider"
                      />
                    </div>
                    <div>
                      <img
                        className="img-fluid mx-auto"
                        src={AboutSlider3}
                        alt="AboutSlider"
                      />
                    </div>
                    <div>
                      <img
                        className="img-fluid mx-auto"
                        src={AboutSlider1}
                        alt="AboutSlider"
                      />
                    </div>
                    <div>
                      <img
                        className="img-fluid mx-auto"
                        src={AboutSlider4}
                        alt="AboutSlider"
                      />
                    </div>
                  </Slider>
                </div>
              </Col>

              <Col xl={6} lg={6} data-aos="fade-up">
                <div className="aboutUs">
                  <div className="titleFont">
                    <h3>About Us</h3>
                    <h2>Holistic Wellness and Empowering Education</h2>
                    <h5>
                      At Homam Productions, we are dedicated to empowering
                      individuals and enhancing lives through our comprehensive
                      services and better education.
                    </h5>
                  </div>
                  <div className="aboutIconMainDivFloat">
                    <div className="aboutIconMainDiv">
                      <div className="aboutIconCircle">
                        <img
                          className="img-fluid mx-auto"
                          src={About1}
                          alt="OurFeature"
                        />
                      </div>
                    </div>
                    <div className="aboutUsIconSideText">
                      <h6> Comprehensive Services </h6>
                      <p>
                        We offer tailored therapy sessions, both online and
                        in-person, and an online marketplace featuring
                        high-quality products and services to promote health and
                        enhance lifestyles.
                      </p>
                    </div>
                  </div>
                  <div className="aboutIconMainDivFloat">
                    <div className="aboutIconMainDiv">
                      <div className="aboutIconCircle">
                        <img
                          className="img-fluid mx-auto"
                          src={About2}
                          alt="OurFeature"
                        />
                      </div>
                    </div>
                    <div className="aboutUsIconSideText">
                      <h6> Empowering Education </h6>
                      <p>
                        Our online college provides flexible, cutting-edge
                        education and training programs, helping students
                        achieve their academic and professional goals.
                      </p>
                    </div>
                  </div>
                  <button className="homeBannerBtn ourSurvice">
                    <Link to="/aboutus">About More</Link>
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}
