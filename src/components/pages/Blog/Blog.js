import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../theme/css/Blog.css";
import BlogData from "./BlogData";

export default function Blog() {
  return (
    <>
      <div className="otherPageBanner contactUsBanner">
        <div className="text-center title">
          <h2>LATEST BLOG</h2>
          <h6>Get latest updates from Howam Productions</h6>
        </div>
      </div>
      <div className="container">
        <div className="spacing blogPage">
          <Row>
            {BlogData.map((blogdata) => (
              <Col xl={6} lg={6} md={6} sm={6}>
                <div className="blogCardMainClass blog">
                  <div className="mainBlog" key={blogdata.id}>
                    <div className="recent">
                      <Link to="/blogpage">
                        <img
                          className="img-fluid mx-auto"
                          variant="top"
                          src={blogdata.image}
                          alt="blog"
                        />
                        <div className="blog-post-hover">
                          <div className="blog-icon">
                            <div className="instaicon ">
                              <i class="fa fa-search"></i>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="mainBlogBody">
                      <h2> {blogdata.title} </h2>
                      <div></div>
                      <div className="blogCardBody">
                        <div className="d-inline ourBlogContain">
                          <span className="blogdate">{blogdata.date}</span>
                          <span className="d-inline ourBlogContainIcon">
                            <i className="far fa-comment-dots"></i>
                            {blogdata.comments}
                          </span>
                          <span className="d-inline ourBlogContainIcon">
                            <i className="far fa-heart"></i>
                            {blogdata.like}
                          </span>
                        </div>
                      </div>
                      <hr />
                      <p className="paragraph"> {blogdata.contain} </p>{" "}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
}
