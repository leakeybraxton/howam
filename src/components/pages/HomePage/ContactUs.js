import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
export default function ContactUs() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="aboutUsBannerImg">
        <div className="container">
          <div className="contactUs">
            <Row>
              <Col xl={6} md={6} lg={6} sm={12}>
                <div className="titleFont">
                  <h3>Contact Us</h3>
                  <h2>Ready to Get Started?</h2>
                </div>
                <form className="row g-3 needs-validation formContactus">
                  <div className="col-md-6  col-sm-6 col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom01"
                      placeholder="Name*"
                      required
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom02"
                      placeholder="E-mail*"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      placeholder="Company Name*"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a valid Company Name.
                    </div>
                  </div>
                  <div className="col-md-12">
                    <textarea
                      type="text"
                      className="form-control"
                      id="validationCustom03"
                      placeholder="Send Meassage*"
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide a Send Meassage.
                    </div>
                  </div>

                  <div className="col-12">
                    <button className="ourSurvice">Get Started </button>
                  </div>
                </form>
              </Col>
              <Col xl={6} md={6} lg={6} sm={12}>
                <div className="quickContact">
                  <h2>Quick Contact</h2>
                  <p>
                    If you're interested in exploring affordable and flexible
                    educational opportunities, we encourage you to reach out to
                    Howam Productions.
                  </p>
                  <div className="contactUsIconContain">
                    <i className="fa fa-map-marker"></i>
                    <span>Jabavu House, Hurlingham, Nairobi, Kenya</span>
                  </div>
                  <div className="contactUsIconContain">
                    <i className="fas fa-phone-alt"></i>
                    <span>+2547 628 06746</span>
                  </div>
                  <div className="contactUsIconContain">
                    <i className="fas fa-envelope"></i>
                    <span>info@howam.africa</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
