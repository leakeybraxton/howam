import React from "react";
import "../../theme/css/Planing.css";
import { Row, Col } from "react-bootstrap";
import OurPricing from '../../components/pages/HomePage/OurPricing'
import OurTestimonial from '../../components/pages/HomePage/OurTestimonial'




export default function Planning() {
  return (
    <>
      <div className="otherPageBanner planingBanner">
        <div className="text-center title">
          <h2>PRICING PLANS</h2>
          <h6>Tailored pricing plan for everyone</h6>
        </div>
      </div>
      <div className="container">  
      <div className="planingIconMainDiv">    
          <Row>
            <Col xl={3}>
            <div className="planingIcon">
                <i className="fas fa-shield-alt"></i>
                <h2>Secure payments</h2>
                <h6>Lorem ipsum is simply dummy typesetting</h6>
              </div>
            </Col>
            <Col xl={3}>
              <div className="planingIcon">
              <i className="far fa-thumbs-up"></i>
              <h2> Money back guarantee</h2>
              <h6> Lorem ipsum is simply dummy typesetting </h6>
              </div>

            </Col>
            <Col xl={3}>
              <div className="planingIcon">
              <i className="fas fa-donate"></i>
              <h2> No hidden costs</h2>
              <h6> Lorem ip sum is simply dummy typesetting </h6>
              </div>
            </Col>
            <Col xl={3}>
              <div className="planingIcon">
              <i className="fas fa-trophy"></i>
              <h2> Customer satisfaction </h2>
              <h6> Lorem ipsum is simply dummy typesetting </h6>
              </div>
            </Col>
          </Row>
          </div>
        </div>
      <OurPricing/>
      <OurTestimonial/>
    </>
  );
}
