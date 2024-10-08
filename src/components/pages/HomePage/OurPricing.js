import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Link } from "react-router-dom";
export default function OurPricing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="ourPricing">
          <div className="titleFont">
            <h1>Our Pricing</h1>

            <h3>Friendly Prices on all Aspects</h3>
          </div>
          <div className="ourPricingCard text-center">
            <Row>
              <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                <Card data-aos="fade-up">
                  <Card data-aos="fade-up">
                    <Card.Body>
                      <Card.Title>
                        <div className="featuresCard" data-aos="flip-left">
                          <h5>Promotions</h5>
                        </div>
                      </Card.Title>
                      <h3>Classes and Products</h3>
                      <br />
                      <Card.Text>
                        We work on getting our clients promotions to make our
                        services available and pocket friendly.
                      </Card.Text>
                      <Card.Text>
                        Checkout on our promotion and blogs page for latest
                        promotions
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                <Card data-aos="fade-up">
                  <Card data-aos="fade-up">
                    <Card.Body>
                      <Card.Title>
                        <div className="featuresCard" data-aos="flip-left">
                          <h5>Paid Internships</h5>
                        </div>
                      </Card.Title>
                      <h3>For Students</h3>
                      <br />
                      <Card.Text>
                        We strive from time to time to provide qualified
                        students with oppotunities to use their expertise for
                        our market place.
                      </Card.Text>
                      <Card.Text>
                        Some of our skilled students might be lucky to work at
                        our field stations to begin their experience journey in
                        the field.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={12}>
                <Card data-aos="fade-up">
                  <Card data-aos="fade-up">
                    <Card.Body>
                      <Card.Title>
                        <div className="featuresCard" data-aos="flip-left">
                          <h5>Pockect Frendly Fee</h5>
                        </div>
                      </Card.Title>
                      <h3>For Students</h3>
                      <br />
                      <Card.Text>
                        At Howam Productions, the online college is designed to
                        be accessible and affordable for students.
                      </Card.Text>
                      <Card.Text>
                        We provide certification for qualified students to join
                        the job market.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
