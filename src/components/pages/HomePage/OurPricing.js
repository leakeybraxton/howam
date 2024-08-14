import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function OurPricing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="ourPricing">
          <div className="titleFont">
            <h3>Our Pricing</h3>
            <h2>Friendly Prices on all Aspects</h2>
          </div>
          <div className="ourPricingCard text-center">
            <Row>
              <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                <div className="featuresCard" data-aos="flip-left">
                  <h5>Promotions</h5>
                  <h6>Classes and Products</h6>
                  <br />

                  <h6> We work on getting our clients </h6>
                  <br />
                  <h6> promotions to make our services </h6>
                  <br />
                  <h6> available and pocket friendly. </h6>
                  <br />
                  <h6> Checkout on our promotion and </h6>
                  <br />
                  <h6> blogs page for latest promotions</h6>
                  <br />

                  <button className="homeBannerBtn ourSurvice">
                    <Link to="/planing"> Get Started</Link>
                  </button>
                </div>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                <div className="featuresCard" data-aos="flip-left">
                  <h5>Paid Internships</h5>
                  <h6>For Students</h6>
                  <br />
                  <h6> We strive from time to </h6>
                  <br />
                  <h6> to provide our qualified students</h6>
                  <br />
                  <h6> with oppotunities to use their</h6>
                  <br />
                  <h6> expertise of our market place.</h6>
                  <br />
                  <h6> Some of our skilled students </h6>
                  <br />
                  <h6> might be lucky to work at our </h6>
                  <br />
                  <h6> field stations to begin their </h6>
                  <br />
                  <h6> experience journey in the field. </h6>
                  <button className="homeBannerBtn ourSurvice">
                    <Link to="/planing"> Get Started</Link>
                  </button>
                </div>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                <div className="featuresCard" data-aos="flip-left">
                  <h5>Pockect Frendly Fee</h5>
                  <h6>For Students</h6>
                  <br />
                  <h6> At Homam Productions, the </h6>
                  <br />
                  <h6> online college is designed to </h6>
                  <br />
                  <h6> be accessible and affordable </h6>
                  <br />
                  <h6> for students.</h6>
                  <button className="homeBannerBtn ourSurvice">
                    <Link to="/planing"> Get Started</Link>
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
