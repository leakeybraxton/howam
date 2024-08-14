import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function StartedToday() {
  return (
    <>
      <div className="startedToday">
        <div className="container">
          <div className="startedTodayMainDivFloat">
            <Row>
              <Col>
                <div className="startedTodayMainDiv">
                  <h6> GET STARTED TODAY ? </h6>
                  <p> Secure your future with Howam Productions.</p>
                </div>
              </Col>
              <Col>
                <div className="startedTodaySideText">
                  <button className="ourSurvice">
                    <Link to="/service">Read More</Link>
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
