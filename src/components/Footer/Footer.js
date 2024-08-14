import { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container, Button, Collapse } from "react-bootstrap";
import ThemeLogo from "../../assets/Images/BrandLogo/ThemeLogo.png";

export const Footer = () => {
  const [Useopen, UsesetOpen] = useState(false);
  const [Copen, CsetOpen] = useState(false);
  return (
    <>
      <div className="footer">
        <Container>
          <Row className="Footerbox">
            <Col xl={5} lg={5} md={4}>
              <div className="F-col-1 footer-text">
                <img
                  src={ThemeLogo}
                  alt="themeLogo"
                  className="img-fluid mx-auto WLogo"
                />
                <p>
                  Contact us and take the next step towards achieving your
                  goals!
                </p>
              </div>
            </Col>
            <Col xl={2} lg={2} md={2}>
              <div className="F-col-2 footer-text FooterVertical">
                <h3 className=" footerLinkHeading">
                  Useful Links
                  <Button
                    className="Footer-button"
                    onClick={() => UsesetOpen(!Useopen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Useopen}
                  ></Button>
                </h3>
                <Collapse in={Useopen}>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Meet our team</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Case stories</Link>
                    </li>
                    <li>
                      <Link to="/aboutus">Latest news</Link>
                    </li>
                    <li>
                      <Link to="/contact">contact</Link>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>
            <Col xl={2} lg={2} md={2}>
              <div className="F-col-3 footer-text FooterVertical">
                <h3 className=" footerLinkHeading">
                  Services
                  <Button
                    className="Footer-button"
                    onClick={() => CsetOpen(!Copen)}
                    aria-controls="example-collapse-text"
                    aria-expanded={Copen}
                  ></Button>
                </h3>
                <Collapse in={Copen}>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/service">Help</Link>
                    </li>
                    <li>
                      <Link to="/faq">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/planing">Terms of use</Link>
                    </li>
                    <li>
                      <Link to="/contact">Support</Link>
                    </li>
                  </ul>
                </Collapse>
              </div>
            </Col>
            <Col xl={3} lg={3} md={4}>
              <div className="F-col-4 footer-text">
                <h3>Follow Us </h3>

                <ul className="list-unstyled social-icon">
                  <li className="d-inline-block">
                    <a
                      href="https://www.tiktok.com/@howam_ke"
                      className="d-block"
                    >
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a href="https://www.howam.africa" className="d-block">
                      <i className="fa fa-google"></i>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a href="https://x.com/254Howam" className="d-block">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a
                      href="https://www.instagram.com/howam.254/"
                      className="d-block"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="d-inline-block">
                    <a
                      href="https://www.linkedin.com/company/howam/"
                      className="d-block"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer-bottom">
        <h6 className="F-copywrite">Copyright © 2024 . All Rights Reserved</h6>
      </div>
    </>
  );
};
export default Footer;
