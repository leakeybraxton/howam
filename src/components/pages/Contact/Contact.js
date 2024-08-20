import React, { useEffect } from "react";
import "../../../theme/css/Contactus.css";
import { Row, Col } from "react-bootstrap";
import ContactUs from "../HomePage/ContactUs";
import Iframe from "react-iframe";
import Aos from "aos";
import "aos/dist/aos.css";
export const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="otherPageBanner contactUsBanner">
        <div className="text-center title" data-aos="fade-down">
          <h2>CONTACT US</h2>
          <h6>Let's discuss your projects now</h6>
        </div>
      </div>
      <div className="container">
        <div className="contactContain">
          <Row data-aos="flip-down">
            <Col lg={4} md={4} sm={4} xl={4}>
              <div className="contactIconBgShadow text-center">
                <i className="fas fa-search-location"></i>
                <h2> Howam offices</h2>
                <h6>
                  <p>Nairobi, Kenya</p>
                  <p>00100</p>
                </h6>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xl={4}>
              <div className="contactIconBgShadow text-center">
                <i className="fas fa-headphones-alt"></i>
                <h2> Call us directly</h2>
                <h6>
                  <p>Phone: +2547 628 06746</p>
                </h6>
              </div>
            </Col>
            <Col lg={4} md={4} sm={4} xl={4}>
              <div className="contactIconBgShadow text-center">
                <i className="fas fa-envelope-open-text"></i>
                <h2>E-mail us</h2>
                <h6>
                  <p>howamproductions@gmail.com</p>
                </h6>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <ContactUs />
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.800807442994!2d36.795024973863114!3d-1.2940178356323049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10bdce3bbadb%3A0x48098fad6ba7df0a!2sJabavu%20House%2C%20Jabavu%20Ln%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1724104700740!5m2!1sen!2ske"
        width="100%"
        height="450px"
        id="myId"
        className="iframeContactUs"
        display="initial"
        position="relative"
      />
    </>
  );
};
