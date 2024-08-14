import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AboutMenuBlog from "../../../assets/Images/AboutUs/AboutMenuBlog.png";
import { Row, Col } from "react-bootstrap";
import "../../../theme/css/AboutUs.css";
import AboutUsVideo from "../AboutUs/AboutUsVideo";
import OurTeam from "../HomePage/OurTeam";
import Aos from "aos";
import "aos/dist/aos.css";
export default function AboutUsMenu() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="otherPageBanner contactUsBanner">
        <div className="text-center title">
          <h2>ABOUT OUR BUSINESS</h2>
          <h6>Unique Learning and Experience</h6>
        </div>
      </div>
      <div className="container">
        <div className="aboutMenu beffect">
          <Row>
            <Col xl={5} lg={5} md={5} sm={12}>
              <div className="bimg">
                <img
                  className="img-fluid mx-auto"
                  src={AboutMenuBlog}
                  alt="AboutMenu"
                  data-aos="flip-left"
                />
              </div>
            </Col>
            <Col xl={7} lg={7} md={7} sm={12} className="colForResponsive">
              <div className="titleFont">
                <h3>ABOUT BUSINESS</h3>
                <h2>
                  We nurture different talents and skills to make them market
                  ready{" "}
                </h2>
              </div>
              <p>
                We specialize in nurturing diverse talents and providing the
                training needed to excel in the competitive market. Our
                comprehensive programs are designed to equip you with the skills
                and knowledge required to succeed in your chosen field.
              </p>
              <button className="ourSurvice">
                <Link to="/faq">Explore Solutions</Link>
              </button>
            </Col>
          </Row>
        </div>
        <div className="aboutusMenuCounting">
          <Row>
            <Col xl={3} lg={3} md={3} sm={6} xs={6} data-aos="zoom-in-up">
              <h2>8M+</h2>
              <h6>Trusted user</h6>
            </Col>
            <Col xl={3} lg={3} md={3} sm={6} xs={6} data-aos="zoom-in-up">
              <h2>64K</h2>
              <h6>Telephonic talk</h6>
            </Col>
            <Col xl={3} lg={3} md={3} sm={6} xs={6} data-aos="zoom-in-up">
              <h2>9M+</h2>
              <h6>Project completed</h6>
            </Col>
            <Col xl={3} lg={3} md={3} sm={6} xs={6} data-aos="zoom-in-up">
              <h2>250</h2>
              <h6>Award winning</h6>
            </Col>
          </Row>
        </div>

        <AboutUsVideo />
      </div>
      {/* <OurTeam /> */}
    </>
  );
}
