import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Mission from "../../../assets/Images/AboutUs/Mission.png";
import Vision from "../../../assets/Images/AboutUs/Vision.png";
import About1 from "../../../assets/Images/AboutUs/About1.png";
import About2 from "../../../assets/Images/AboutUs/About2.png";
import { Link } from "react-router-dom";
export default class SimpleSlider extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="mainAboutUs">
            <div className="aboutUs">
              <div className="titleFont">
                <h1>About Us</h1>
              </div>
            </div>
            <Row>
              <Col xl={6} lg={6} data-aos="fade-up">
                <div className="aboutUs">
                  <div className="aboutIconMainDivFloat">
                    <div className="aboutIconMainDiv">
                      <div className="aboutIconCircle">
                        <img
                          className="img-fluid mx-auto"
                          src={Mission}
                          alt="OurFeature"
                        />
                      </div>
                    </div>
                    <div className="aboutUsIconSideText">
                      <h6> Mission Statement </h6>
                      <p>
                        Our mission is to cultivate a community that embraces
                        the transformative power of art, prioritizes mental and
                        emotional well-being, and fosters a lifestyle grounded
                        in sustainability and health. We strive to create
                        environments where creativity flourishes, healing takes
                        place, and individuals are empowered to live their best
                        lives.
                      </p>
                    </div>
                  </div>
                  <div className="aboutIconMainDivFloat">
                    <div className="aboutIconMainDiv">
                      <div className="aboutIconCircle">
                        <img
                          className="img-fluid mx-auto"
                          src={Vision}
                          alt="OurFeature"
                        />
                      </div>
                    </div>
                    <div className="aboutUsIconSideText">
                      <h6> Vision Statement </h6>
                      <p>
                        To be a beacon of holistic well-being, where art,
                        therapy, and healthy living converge to inspire a
                        harmonious and empowered community.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={6} lg={6} data-aos="fade-up">
                <div className="aboutUs">
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
                </div>
              </Col>
            </Row>
            <br />
            <div className="aboutUs">
              <div className="titleFont">
                <h1>Holistic Wellness and Empowering Education</h1>
                <h5>
                  At Homam Productions, we are dedicated to empowering
                  individuals and enhancing lives through our comprehensive
                  services and better education.
                </h5>
              </div>
              <button className="homeBannerBtn ourSurvice">
                <Link to="/aboutus">About More</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
