import React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import sideblogimg from "../../../assets/Images/Blog/sideblogimg.jpg";
import Progress from "../HomePage/Progress";
import blogpageimg from "../../../assets/Images/Blog/blogpageimg.jpg";

const BlogPage = () => {
  return (
    <>
      <div className="otherPageBanner contactUsBanner">
        <div className="text-center title">
          <h2>LATEST BLOG</h2>
          <h6>Growth business leaders vision blog</h6>
        </div>
      </div>
      <div className="blogpage">
        <div className="container">
          <div className="spacing">
            <Row>
              <Col xl={8} lg={8} md={12}>
                <div className="blogpageFstContainBlog">
                  <h2> Goodwin must Break Clarkson hold on Flags </h2>
                  <h3>
                    Perspiciatis unde omnis iste natus error sit voluptatem.
                  </h3>

                  <div className="d-inline ourBlogContain">
                    <span>14 March 2022</span>
                    <span className="d-inline ourBlogContainIcon">
                      <i className="far fa-comment-dots"></i>
                      251 comments
                    </span>
                  </div>
                  <img
                    className="img-fluid mx-auto"
                    variant="top"
                    src={blogpageimg}
                    alt="blogpage"
                  />
                  <h5> Armin Vans </h5>
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipisi cing elit.
                    Molestias eius illum libero dolor nobis deleniti, sint
                    assumenda. Pariatur iste veritatis excepturi, ipsa optio
                    nobis. Molestias eius illum libero dolor nobis deleniti
                  </p>
                </div>
                <hr />
                <div className="sideblogSubContain">
                  <Row>
                    <Col xl={6} lg={7} md={6} sm={6}>
                      <img
                        className="img-fluid mx-auto"
                        src={sideblogimg}
                        alt="sideblog"
                      />
                    </Col>
                    <Col xl={6} lg={5} md={6} sm={6}>
                      <p className="paragraph">
                        Lorem ipsum dosectetur adipisicing elit, sed do.Lorem
                        ipsum dolor sit amet, consectetur Nulla fringilla purus
                        at leo dignissim congue. Mauris elementum accumsan leo
                        vel tempor. Sit amet cursus nisl aliquam. Aliquam et
                        elit eu nunc rhoncus viverra quis at felis. Sed do.Lorem
                        ipsum dolor sit amet, consectetur Lorem ipsum congue.
                      </p>
                    </Col>
                  </Row>
                </div>
                <p className="paragraph">
                  Cras lacinia magna vel molestie faucibus. Donec auctor et
                  urnaLorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Cras lacinia magna vel molestie faucibus.Cras lacinia magna
                  vel molestie faucibus. Donec auctor et urnaLorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Cras lacinia magna vel
                  molestie faucibus.Cras lacinia magna vel molestie faucibus.
                </p>

                <div className="Course-review">
                  <h3>Reviews</h3>
                  <div className="Review-box">
                    <i className="Review-icon-person">
                      <i className="fas fa-user-circle"></i>
                    </i>
                    <div className="Review-author">
                      <div>
                        <h6>Jone Smit </h6>
                      </div>
                      <div className="Course-review-star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                    <div className="Review-content">
                      <p className="paragraph">
                        The course identify things we want to change and then
                        figure out the things that need to be done to create the
                        desired outcome. The course helped me in clearly define
                        problems and generate a wider variety of quality
                        solutions. Support more structures analysis of options
                        leading to better decisions.
                      </p>
                    </div>
                  </div>
                  <div className="Review-box">
                    <i className="Review-icon-person">
                      <i className="fas fa-user-circle"></i>
                    </i>
                    <div className="Review-author">
                      <div>
                        <h6>Mark Rose </h6>
                      </div>
                      <div className="Course-review-star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                    <div className="Review-content">
                      <p className="paragraph">
                        At one extremity the rope was unstranded, and the
                        separate spread yarns were all braided and woven round
                        the socket of the harpoon; the pole was then driven hard
                        up into the socket..
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={4} lg={4} md={12}>
              <div className="blogSticky">
                <div className="startedEmailBox">
                  <InputGroup className="">
                    <FormControl placeholder="Your Email..." />
                    <button className="homeBannerBtn ourSurvice">
                      <Link to="/service"> Subscribe </Link>
                    </button>
                  </InputGroup>
                </div>

                <div className="blogsidefstpart">
                  <Row>
                    <Col xl={12} lg={12} md={6}>
                      
                      <img
                        className="img-fluid mx-auto"
                        src={sideblogimg}
                        alt="sideblog"
                      />
                    </Col>
                    <Col xl={12} lg={12} md={6}>
                      
                      <div className="blogSlider">
                        <div className="scrollbar">
                          <div>
                            <h3>Values of Results</h3>
                            <Progress done="70" />
                            <h3>global experience</h3>
                            <Progress done="61" />
                            <h3>expect perspective</h3>
                            <Progress done="83" />
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl={12} lg={12} md={6}>
                      
                      <div className="followUs">
                        <h2>Follow Us</h2>
                        <Row>
                          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="blogpageIcon">
                              <i className="fa fa-facebook"></i>
                              <span>
                                Likes <b>2640</b>
                              </span>
                            </div>
                          </Col>
                          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="blogpageIcon">
                              <i className="fab fa-twitter"></i>
                              <span>
                                Followers <b>2940</b>
                              </span>
                            </div>
                          </Col>
                          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="blogpageIcon">
                              <i className="fab fa-youtube"></i>
                              <span>
                                Followers <b>2040</b>
                              </span>
                            </div>
                          </Col>
                          <Col xl={6} lg={6} md={6} sm={6} xs={6}>
                            <div className="blogpageIcon">
                              <i className="fab fa-instagram"></i>
                              <span>
                                Followers <b>1540</b>
                              </span>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                
                    <Col xl={12} lg={12} md={6}>
                      <div className="popularTags">
                        <h2>Popular Tags</h2>
                        <div className="sideblogbtn">
                          <button className=" ourSurvice">
                            <Link to="/blog">Science </Link>
                          </button>
                          <button className=" ourSurvice">
                            <Link to="/blog">Politics</Link>
                          </button>
                          <button className=" ourSurvice">
                            <Link to="/blog">Business</Link>
                          </button>
                          <button className=" ourSurvice">
                            <Link to="/blog">Sports </Link>
                          </button>
                          <button className=" ourSurvice">
                            <Link to="/blog">Technology</Link>
                          </button>
                          <button className=" ourSurvice">
                            <Link to="/blog"> Food </Link>
                          </button>
                          <button className=" ourSurvice">
                            <Link to="/blog"> FAQ </Link>
                          </button>
                          <button className=" ourSurvice">
                            <Link to="/blog"> Services </Link>
                          </button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogPage;
