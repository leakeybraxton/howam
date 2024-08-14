import React from "react";
import { Row, Col } from "react-bootstrap";
import AmazingEx from "../../../assets/Images/Services/AmazingEx.png";
import Progress from "../HomePage/Progress";

export default function AmazingExpertise() {
  return (
    <>
      <div className="container">
        <div className="amazingExpertise">
          <Row>
            <Col xl={5} lg={5} md={6} sm={12}>
              <div className="beffect">
                <div className="bimg">
                  <img
                    className="img-fluid mx-auto"
                    src={AmazingEx}
                    alt="services"
                    data-aos="flip-up"
                  />
                </div>
              </div>
            </Col>
            <Col xl={7} lg={7} md={6} sm={12}>
              <div className="amazingColContain">
                <div className="titleFont">
                  <h3>Amazing Expertise</h3>
                  <h2>
                    Qualified professionals with extensive experience in their
                    respective fields
                  </h2>
                </div>
                <div className="scrollbar">
                  <div>
                    <h3>Values of Results</h3>
                    <Progress done="80" />
                    <h3>global experience</h3>
                    <Progress done="87" />
                    <h3>expect perspective</h3>
                    <Progress done="93" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
