import React, {  useEffect } from "react";
import Slider from "react-slick";
import { Card, CardImg, Col } from "react-bootstrap";
import OurTeamImg from "../HomePage/OurTeamImg";
import Aos from "aos";
import "aos/dist/aos.css";
export default function OurTeam() {
  const settings = {
    dots: false,
    aroow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
          slidesToShow: 3,
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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="titleFont">
          <h3>Our Team</h3>
          <h2>Expert Team Member</h2>
        </div>
        <div className="ourTeamMain">
          <Slider {...settings} className="row">
            {OurTeamImg.map((photo) => (
              <div key={photo.id}>
                <Col xl={12}>
                  <Card className="ourTeamCard" data-aos="zoom-in">
                    <div className="ourTeamImgBox beffect">
                      <div className="bimg">
                        <CardImg
                          src={photo.image}
                          atl="ourteam"
                          className="img-fluid mx-auto"
                        />
                      </div>
                      <div className="ourTeamIcon">
                        <ul className="list-unstyled ">
                          <li className="d-inline-block">
                            <a href="/#" className="d-block">
                              <i className="fab fa-facebook-f"></i>
                            </a>
                          </li>
                          <li className="d-inline-block">
                            <a href="/#" className="d-block">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li className="d-inline-block">
                            <a href="/#" className="d-block">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li className="d-inline-block">
                            <a href="/#" className="d-block">
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <Card.Body>
                      <Card.Title>{photo.title}</Card.Title>
                      <Card.Subtitle>{photo.subtitle}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
