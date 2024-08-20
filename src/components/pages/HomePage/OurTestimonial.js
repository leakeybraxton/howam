import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col } from "react-bootstrap";
import quote from "../../../assets/Images/Testimonial/quote.png";
import Testimonial1 from "../../../assets/Images/Testimonial/Testimonial1.png";
import Testimonial2 from "../../../assets/Images/Testimonial/Testimonial2.png";
import Testimonial3 from "../../../assets/Images/Testimonial/Testimonial3.png";
import Testimonial4 from "../../../assets/Images/Testimonial/Testimonial4.png";
// import { Link } from "react-router-dom";

import "aos/dist/aos.css";
export default class OurTestimonial extends Component {
  render() {
    const settings = {
      dots: false,
      aroow: true,
      infinite: true,
      speed: 500,
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
        <div className="container">
          <div className="ourTestimonialMain">
            <div className="titleFont">
              <h2>Latteloft Coffee Place</h2>
              <h3>Visit out coffee shop branches and enjoy</h3>
            </div>
            <div className="ourTestimonialCard text-center">
              <Row>
                <Slider {...settings}>
                  <Col xl={4} lg={4} md={4} className="ourTestimonialCol">
                    <div
                      className="testimonialCard featuresCard"
                      data-aos="fade-up"
                    >
                      <img
                        className="img-fluid mx-auto testimonialImg"
                        src={Testimonial1}
                        alt="ourTestimonial"
                      />
                      <img
                        className="img-fluid mx-auto testimonialQuote"
                        src={quote}
                        alt="ourTestimonial"
                      />
                      <p>
                        {/* Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since. */}
                      </p>
                      {/* <h6>Raina Roy</h6>
                      <h2>Web Designer</h2> */}
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={4} className="ourTestimonialCol">
                    <div
                      className="testimonialCard featuresCard"
                      data-aos="fade-up"
                    >
                      <img
                        className="img-fluid mx-auto testimonialImg"
                        src={Testimonial2}
                        alt="ourTestimonial"
                      />
                      <img
                        className="img-fluid mx-auto testimonialQuote"
                        src={quote}
                        alt="ourTestimonial"
                      />
                      <p>
                        {/* Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since. */}
                      </p>
                      {/* <h6>Raina Roy</h6>
                      <h2>Web Designer</h2> */}
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={4} className="ourTestimonialCol">
                    <div
                      className="testimonialCard featuresCard"
                      data-aos="fade-up"
                    >
                      <img
                        className="img-fluid mx-auto testimonialImg"
                        src={Testimonial3}
                        alt="ourTestimonial"
                      />
                      <img
                        className="img-fluid mx-auto testimonialQuote"
                        src={quote}
                        alt="ourTestimonial"
                      />
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since.
                      </p> */}
                      {/* <h6>Raina Roy</h6>
                      <h2>Web Designer</h2> */}
                    </div>
                  </Col>
                  <Col xl={4} lg={4} md={4} className="ourTestimonialCol">
                    <div
                      className="testimonialCard featuresCard"
                      data-aos="fade-up"
                    >
                      <img
                        className="img-fluid mx-auto testimonialImg"
                        src={Testimonial4}
                        alt="ourTestimonial"
                      />
                      <img
                        className="img-fluid mx-auto testimonialQuote"
                        src={quote}
                        alt="ourTestimonial"
                      />
                      <p>
                        {/* Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since. */}
                      </p>
                      {/* <h6>Raina Roy</h6>
                      <h2>Web Designer</h2> */}
                    </div>
                  </Col>
                </Slider>
              </Row>
            </div>
            <br />
            {/* <button className="homeBannerBtn ourSurvice">
              <Link to="#">Get started</Link>
            </button> */}
          </div>
        </div>
      </>
    );
  }
}
