import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Col, Row } from "react-bootstrap";
import blog1 from "../../../assets/Images/Blog/blog1.png";
import blog2 from "../../../assets/Images/Blog/blog2.png";
import blog3 from "../../../assets/Images/Blog/blog3.png";
import blog4 from "../../../assets/Images/Blog/blog4.png";
import blog5 from "../../../assets/Images/Blog/blog5.png";
import AboutUsVideo from "../AboutUs/AboutUsVideo";
import { Link } from "react-router-dom";
export default class OurBlog extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
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
          <div className="ourBlog">
            <div className="titleFont">
              <h1>Our Blog</h1>
            </div>
            <div>
              <div className="yearOfExperience">
                <div className="container">
                  <Row className="align-items-center">
                    <Col xs={12} sm={6}>
                      <AboutUsVideo />
                    </Col>
                    <Col xs={12} sm={6} className="homeYearExper">
                      <div className="scrollbar">
                        <div>
                          <h3>
                            Discover Your Best Self—Where Art, Wellness, and
                            Healthy Living Unite.
                          </h3>
                          <h3>Join us today!</h3>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <br />
              <h2>Latest Blog</h2>
              <div className="beffect">
                <Slider {...settings} className="row">
                  <Col xl={4}>
                    <div className="ourBlogCard" data-aos="fade-up">
                      <Card>
                        <div className="bimg">
                          <Card.Img
                            className="img-fluid mx-auto"
                            variant="top"
                            src={blog1}
                          />
                        </div>
                        <Card.Body>
                          <div className="blogCardBody">
                            <div className="d-inline ourBlogContain">
                              <span>14 March 2024</span>
                              <span className="d-inline ourBlogContainIcon">
                                <i
                                  className="fa fa-user"
                                  aria-hidden="true"
                                ></i>
                                By Admin
                              </span>
                            </div>
                            <hr />
                            <Card.Title>Howam Productions.</Card.Title>
                            <Card.Text>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since to 00s,
                              when an unknown printer.
                            </Card.Text>
                            <button className="homeBannerBtn ourSurvice">
                              <Link to="/portfolio"> Get Started</Link>
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="ourBlogCard" data-aos="fade-up">
                      <Card>
                        <div className="bimg">
                          <Card.Img
                            className="img-fluid mx-auto"
                            variant="top"
                            src={blog2}
                          />
                        </div>
                        <Card.Body>
                          <div className="blogCardBody">
                            <div className="d-inline ourBlogContain">
                              <span>14 March 2024</span>
                              <span className="d-inline ourBlogContainIcon">
                                <i
                                  className="fa fa-user"
                                  aria-hidden="true"
                                ></i>
                                By Admin
                              </span>
                            </div>
                            <hr />
                            <Card.Title>Howam Productions.</Card.Title>
                            <Card.Text>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since to 00s,
                              when an unknown printer.
                            </Card.Text>
                            <button className="homeBannerBtn ourSurvice">
                              <Link to="/portfolio"> Get Started</Link>
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="ourBlogCard" data-aos="fade-up">
                      <Card>
                        <div className="bimg">
                          <Card.Img
                            className="img-fluid mx-auto"
                            variant="top"
                            src={blog3}
                          />
                        </div>
                        <Card.Body>
                          <div className="blogCardBody">
                            <div className="d-inline ourBlogContain">
                              <span>14 March 2024</span>
                              <span className="d-inline ourBlogContainIcon">
                                <i
                                  className="fa fa-user"
                                  aria-hidden="true"
                                ></i>
                                By Admin
                              </span>
                            </div>
                            <hr />
                            <Card.Title>Howam productions.</Card.Title>
                            <Card.Text>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since to 00s,
                              when an unknown printer.
                            </Card.Text>
                            <button className="homeBannerBtn ourSurvice">
                              <Link to="/portfolio"> Get Started</Link>
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="ourBlogCard" data-aos="fade-up">
                      <Card>
                        <div className="bimg">
                          <Card.Img
                            className="img-fluid mx-auto"
                            variant="top"
                            src={blog4}
                          />
                        </div>
                        <Card.Body>
                          <div className="blogCardBody">
                            <div className="d-inline ourBlogContain">
                              <span>14 March 2024</span>
                              <span className="d-inline ourBlogContainIcon">
                                <i
                                  className="fa fa-user"
                                  aria-hidden="true"
                                ></i>
                                By Admin
                              </span>
                            </div>
                            <hr />
                            <Card.Title>Howam Productions.</Card.Title>
                            <Card.Text>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since to 00s,
                              when an unknown printer.
                            </Card.Text>
                            <button className="homeBannerBtn ourSurvice">
                              <Link to="/portfolio"> Get Started</Link>
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div className="ourBlogCard" data-aos="fade-up">
                      <Card>
                        <div className="bimg">
                          <Card.Img
                            className="img-fluid mx-auto"
                            variant="top"
                            src={blog5}
                          />
                        </div>
                        <Card.Body>
                          <div className="blogCardBody">
                            <div className="d-inline ourBlogContain">
                              <span>14 March 2024</span>
                              <span className="d-inline ourBlogContainIcon">
                                <i
                                  className="fa fa-user"
                                  aria-hidden="true"
                                ></i>
                                By Admin
                              </span>
                            </div>
                            <hr />
                            <Card.Title>Howam Productions.</Card.Title>
                            <Card.Text>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since to 00s,
                              when an unknown printer.
                            </Card.Text>
                            <button className="ourSurvice">
                              <Link to="/portfolio">Get Started </Link>
                            </button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
