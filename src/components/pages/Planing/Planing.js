import React, { useEffect } from "react";
import "../../../theme/css/Planing.css";
import { Row, Col } from "react-bootstrap";
import OurPricing from "../HomePage/OurPricing";
import OurTestimonial from "../HomePage/OurTestimonial";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Planning() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="otherPageBanner planingBanner">
        <div className="text-center title" data-aos="fade-down">
          <h2>PRICING PLANS</h2>
          <h6>Tailored pricing plan for everyone</h6>
        </div>
      </div>
      <div className="container">
        <div className="planingIconMainDiv">
          <Row data-aos="fade-up">
            <Col lg={3} xl={3} md={3} sm={6}>
              <div className="planingIcon">
                <i className="fas fa-shield-alt"></i>
                <h2>Payments Options</h2>
                <h6>We accept payment by crypto</h6>
              </div>
            </Col>
            <Col lg={3} xl={3} md={3} sm={6}>
              <div className="planingIcon">
                <i className="far fa-thumbs-up"></i>
                <h2> Money back guarantee</h2>
                <h6>
                  {" "}
                  Homam Productions offers a money-back guarantee for certain
                  services and programs{" "}
                </h6>
              </div>
            </Col>
            <Col lg={3} xl={3} md={3} sm={6}>
              <div className="planingIcon">
                <i className="fas fa-donate"></i>
                <h2> No hidden costs</h2>
                <h6>
                  {" "}
                  There are no hidden costs with our services and programs.{" "}
                </h6>
              </div>
            </Col>
            <Col lg={3} xl={3} md={3} sm={6}>
              <div className="planingIcon">
                <i className="fas fa-trophy"></i>
                <h2> Customer satisfaction </h2>
                <h6>
                  {" "}
                  We prioritize your satisfaction with the payment process and
                  options.{" "}
                </h6>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <OurPricing />
      <h2>OurTestimonials</h2>
      {/* <OurTestimonial /> */}
    </>
  );
}
