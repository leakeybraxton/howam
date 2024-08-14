import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Innovation() {
  useEffect(() => {
    Aos.init({ duration: 3500 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="servicesCards">
          <Row>
            <Col xl={6} lg={6} md={12}>
              <div className="servicesExploreSolution">
                <h2>
                  Be at the forefront of <span>information</span>
                </h2>
                <p>
                  We analyse your needs and put you on a plan that does not
                  strain your resources
                </p>

                <button className="ourSurvice">
                  <Link to="/service">Explore Solutions </Link>
                </button>
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <div className="featuresCard" data-aos="zoom-out">
                <i className="fas fa-chart-pie"></i>
                <div className="featuresCardContain">
                  <h3>Company Management</h3>

                  <details className="details">
                    <summary className="summary">
                      <span id="open">Read More</span>
                      <span id="close">Less</span>
                    </summary>

                    <h6 className="maskbtnOpenText">
                      Our expert consultants provide valuable insights into
                      organizational structure, leadership development, and
                      process optimization, ensuring that your business runs
                      efficiently and effectively.
                    </h6>
                  </details>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <div className="featuresCard" data-aos="zoom-out">
                <i className="fa fa-bar-chart"></i>
                <div className="featuresCardContain">
                  <h3>Company & Business Setup</h3>

                  <details className="details">
                    <summary className="summary">
                      <span id="open">Read More</span>
                      <span id="close">Less</span>
                    </summary>

                    <h6 className="maskbtnOpenText">
                      Our comprehensive company and business setup services
                      cover everything from legal registration and
                      organizational planning to operational systems and
                      compliance.
                    </h6>
                  </details>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <div className="featuresCard" data-aos="zoom-out">
                <i className="fas fa-piggy-bank"></i>
                <div className="featuresCardContain">
                  <h3>Investment & Management</h3>

                  <details className="details">
                    <summary className="summary">
                      <span id="open">Read More</span>
                      <span id="close">Less</span>
                    </summary>

                    <h6 className="maskbtnOpenText">
                      Our accounts experts provide a guided plan on how to take
                      care of your finances.
                    </h6>
                  </details>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <div className="featuresCard" data-aos="zoom-out">
                <i className="fas fa-business-time"></i>
                <div className="featuresCardContain">
                  <h3>Acquisitions Consulting</h3>

                  <details className="details">
                    <summary className="summary">
                      <span id="open">Read More</span>
                      <span id="close">Less</span>
                    </summary>

                    <h6 className="maskbtnOpenText">
                      Our expert consultants provide invaluable support with
                      market analysis, financial due diligence, and deal
                      structuring to ensure your acquisitions are strategically
                      sound and successful.
                    </h6>
                  </details>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <div className="featuresCard" data-aos="zoom-out">
                <i className="fas fa-address-card"></i>
                <div className="featuresCardContain">
                  <h3>Placement Consulting</h3>

                  <details className="details">
                    <summary className="summary">
                      <span id="open">Read More</span>
                      <span id="close">Less</span>
                    </summary>

                    <h6 className="maskbtnOpenText">
                      Our experienced consultants provide tailored support to
                      help you navigate the job market, from crafting standout
                      resumes to preparing for interviews and connecting with
                      industry opportunities.
                    </h6>
                  </details>
                </div>
              </div>
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={6}>
              <div className="featuresCard" data-aos="zoom-out">
                <i className="fa fa-globe"></i>
                <div className="featuresCardContain">
                  <h3>Technological Innovation</h3>

                  <details className="details">
                    <summary className="summary">
                      <span id="open">Read More</span>
                      <span id="close">Less</span>
                    </summary>

                    <h6 className="maskbtnOpenText">
                      Our online college offers flexible, affordable programs
                      designed to fit various schedules and learning styles,
                      while our therapy services provide both online and
                      in-person options to accommodate different preferences.
                    </h6>
                  </details>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
