import React from "react";
import Progress from "./Progress";
import { Row, Col } from "react-bootstrap";
// import YearOfEx from "../../../assets/Images/YearOfExperience/YearOfEx.png";
import BlackThemeLogo from "../../../assets/Images/BrandLogo/BlackThemeLogo.png";

const YearOfExperience = () => (
  <>
    <div className="yearOfExperience">
      <div className="container">
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img
              src={BlackThemeLogo}
              alt="Dedicated to Better one's self"
              className="img-fluid mx-auto"
            />
          </Col>
          <Col xs={12} sm={6} className="homeYearExper">
            <div className="scrollbar">
              <div>
                <h3>Strategy & Analysis</h3>
                <Progress done="89" />
                <h3>Economic Growth</h3>
                <Progress done="49" />
                <h3>Achieves Goals</h3>
                <Progress done="79" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  </>
);

export default YearOfExperience;
