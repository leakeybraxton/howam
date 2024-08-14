import React from "react";
import Slider from "react-slick";
import { Card, Col } from "react-bootstrap";
import ServicesCard1 from "../../../assets/Images/OurBestServices/ServicesCard1.png";
import ServicesCard2 from "../../../assets/Images/OurBestServices/ServicesCard2.png";
import ServicesCard3 from "../../../assets/Images/OurBestServices/ServicesCard3.png";
import { Link } from "react-router-dom";

export default function OurBestServices() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1900,
    autoplay: true,
    autoplaySpeed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="ourBestServicesBanner">
        <div className="container">
          <div className="ourBestServices text-center">
            <div className="titleFont">
              <h3>What we Offer Best</h3>
              <h2>Hear About Us.</h2>
            </div>
            <div className="ourBestServicesRow beffect">
              <Slider {...settings} className="row">
                <Col sm={4} xs={12}>
                  <Card data-aos="fade-up">
                    <div className="bimg">
                      <Card.Img
                        className="img-fluid mx-auto"
                        variant="top"
                        src={ServicesCard1}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Dedicate Workforce</Card.Title>
                      <Card.Text>
                        Homam Productions boasts a diverse and talented team,
                        including licensed therapists, educators, marketplace
                        experts, and support staff. Each member is dedicated to
                        delivering exceptional services and innovative
                        solutions, with a strong focus on collaboration and
                        professional growth.
                      </Card.Text>
                      <button className="homeBannerBtn ourSurvice">
                        <Link to="/faq">Read More</Link>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={4} xs={12}>
                  <Card data-aos="fade-up">
                    <div className="bimg">
                      <Card.Img
                        className="img-fluid mx-auto"
                        variant="top"
                        src={ServicesCard2}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Dedicated Services</Card.Title>
                      <Card.Text>
                        Homam Productions provides personalized therapy
                        services, a curated online marketplace for health and
                        lifestyle products, and flexible online education
                        programs. Each service is designed with a commitment to
                        excellence and tailored to support your well-being and
                        success.
                      </Card.Text>
                      <button className="homeBannerBtn ourSurvice">
                        <Link to="/faq">Read More</Link>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={4} xs={12}>
                  <Card data-aos="fade-up">
                    <div className="bimg">
                      <Card.Img
                        className="img-fluid mx-auto"
                        variant="top"
                        src={ServicesCard3}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Expert Consultants</Card.Title>
                      <Card.Text>
                        Homam Productions features a team of expert consultants
                        with extensive knowledge and experience in their fields.
                        These professionals offer specialized guidance and
                        insights to enhance our therapy services, marketplace
                        offerings, and educational programs.
                      </Card.Text>
                      <button className="homeBannerBtn ourSurvice">
                        <Link to="/faq">Read More</Link>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={4} xs={12}>
                  <Card data-aos="fade-up">
                    <div className="bimg">
                      <Card.Img
                        className="img-fluid mx-auto"
                        variant="top"
                        src={ServicesCard2}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title>Quick Responses </Card.Title>
                      <Card.Text>
                        At Homam Productions, we prioritize prompt and efficient
                        communication. Our team is dedicated to providing quick
                        responses to inquiries, ensuring timely support and
                        solutions.
                      </Card.Text>
                      <button className="homeBannerBtn ourSurvice">
                        <Link to="/faq">Read More</Link>
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
