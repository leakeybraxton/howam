import React, { useEffect } from "react";
import "../../../../src/theme/css/HomePage.css";
import { Row, Col } from "react-bootstrap";
import Feature1 from "../../../assets/Images/OurFeatures/Feature1.png";
import Feature2 from "../../../assets/Images/OurFeatures/Feature2.png";
import Feature3 from "../../../assets/Images/OurFeatures/Feature3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function OurFeature() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="ourFeature">
          <div className="titleFont text-center" data-aos="zoom-in-down">
            <h3>Our Operations</h3>
            <h2>What we do</h2>
          </div>
          <div className="mainFeaturesCard">
            <Row>
              <Col xs={12} sm={4}>
                <div className="featuresCard" data-aos="zoom-in">
                  <div className="featuresCardCircle">
                    <img
                      className="img-fluid mx-auto"
                      src={Feature1}
                      alt="OurFeature"
                    />
                  </div>
                  <div className="featuresCardContain">
                    <h3>Therapy Center</h3>
                    <h6>
                      Howam Productions offers therapy services both online and
                      in-person, focusing on supporting mental and emotional
                      well-being.
                    </h6>
                    <details className="details">
                      <summary className="summary">
                        <span id="open">Read More</span>
                        <span id="close">Less</span>
                      </summary>

                      <h6 className="maskbtnOpenText">
                        Our tailored approach ensures individuals receive the
                        care they need in a convenient and accessible manner.
                      </h6>
                    </details>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="featuresCard" data-aos="zoom-in">
                  <div className="featuresCardCircle">
                    <img
                      className="img-fluid mx-auto"
                      src={Feature2}
                      alt="OurFeature"
                    />
                  </div>
                  <div className="featuresCardContain">
                    <h3>Online Market</h3>
                    <h6>
                      Howam Productions operates an online marketplace that
                      connects users with a diverse range of products and
                      services aimed at enhancing health and lifestyle.
                    </h6>
                    <details className="details">
                      <summary className="summary">
                        <span id="open">Read More</span>
                        <span id="close">Less</span>
                      </summary>

                      <h6 className="maskbtnOpenText">
                        This platform offers convenient access to high-quality
                        items designed to support overall well-being.
                      </h6>
                    </details>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={4}>
                <div className="featuresCard" data-aos="zoom-in">
                  <div className="featuresCardCircle">
                    <img
                      className="img-fluid mx-auto"
                      src={Feature3}
                      alt="OurFeature"
                    />
                  </div>
                  <div className="featuresCardContain">
                    <h3>Online College</h3>
                    <h6>
                      Howam Productions' online college provides flexible and
                      accessible education and training programs.
                    </h6>
                    <details className="details">
                      <summary className="summary">
                        <span id="open">Read More</span>
                        <span id="close">Less</span>
                      </summary>

                      <h6 className="maskbtnOpenText">
                        It empowers students to achieve their academic and
                        professional goals through innovative, cutting-edge
                        learning opportunities.
                      </h6>
                    </details>
                  </div>
                </div>
              </Col>
            </Row>
            <button className="homeBannerBtn ourSurvice">
              <Link to="/service">All Services</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
