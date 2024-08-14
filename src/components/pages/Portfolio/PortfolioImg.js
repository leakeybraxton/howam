import { useState } from "react";
import "../../../theme/css/Portfolio.css";
import { Card } from "react-bootstrap";
import Portfolio1 from "../../../assets/Images/Portfolio/Portfolio1.png";
import Portfolio2 from "../../../assets/Images/Portfolio/Portfolio2.png";
import Portfolio3 from "../../../assets/Images/Portfolio/Portfolio3.png";
import Portfolio4 from "../../../assets/Images/Portfolio/Portfolio4.png";
import Portfolio5 from "../../../assets/Images/Portfolio/Portfolio5.png";
import Portfolio6 from "../../../assets/Images/Portfolio/Portfolio6.png";
import Portfolio7 from "../../../assets/Images/Portfolio/Portfolio7.png";
import Portfolio8 from "../../../assets/Images/Portfolio/Portfolio8.png";
import Portfolio9 from "../../../assets/Images/Portfolio/Portfolio9.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Row, Col } from "react-bootstrap";
function PortfolioImg() {
  useEffect(() => {
    Aos.init({ duration: 3500 });
  }, []);
  const [toggleState, setToggleState] = useState(3);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container portfolio">
      <div className="bloc-tabs ">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Brochure
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Branding
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Development
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          E-commerce
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Photography
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="beffect">
            <Row>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio1} />
                  </div>
                  <Card.Body>
                    <Card.Title>Armchair Mojo</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio2} />
                  </div>
                  <Card.Body>
                    <Card.Title>The Aparthotel</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio3} />
                  </div>
                  <Card.Body>
                    <Card.Title>Bill Gardner</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio4} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio5} />
                  </div>
                  <Card.Body>
                    <Card.Title>Flora London</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio6} />
                  </div>
                  <Card.Body>
                    <Card.Title>Daimler Financial</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="beffect">
            <Row>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio9} />
                  </div>
                  <Card.Body>
                    <Card.Title>Armchair Mojo</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio6} />
                  </div>
                  <Card.Body>
                    <Card.Title>The Aparthotel</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio2} />
                  </div>
                  <Card.Body>
                    <Card.Title>Bill Gardner</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio8} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio1} />
                  </div>
                  <Card.Body>
                    <Card.Title>Flora London</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="beffect">
            <Row>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio5} />
                  </div>
                  <Card.Body>
                    <Card.Title>Armchair Mojo</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio4} />
                  </div>
                  <Card.Body>
                    <Card.Title>The Aparthotel</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio3} />
                  </div>
                  <Card.Body>
                    <Card.Title>Bill Gardner</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio2} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio1} />
                  </div>
                  <Card.Body>
                    <Card.Title>Flora London</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio9} />
                  </div>
                  <Card.Body>
                    <Card.Title>Daimler Financial</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio8} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio7} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio6} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <div className="beffect">
            <Row>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio9} />
                  </div>
                  <Card.Body>
                    <Card.Title>Armchair Mojo</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio8} />
                  </div>
                  <Card.Body>
                    <Card.Title>The Aparthotel</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio7} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio6} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio5} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio4} />
                  </div>
                  <Card.Body>
                    <Card.Title>Bill Gardner</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio3} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <div className="beffect">
            <Row>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio9} />
                  </div>
                  <Card.Body>
                    <Card.Title>Armchair Mojo</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio8} />
                  </div>
                  <Card.Body>
                    <Card.Title>The Aparthotel</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio7} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>{" "}
              <Col xl={4} lg={4} md={6} sm={6} xs={12}>
                <Card>
                  <div className="bimg">
                    <Card.Img variant="top" src={Portfolio6} />
                  </div>
                  <Card.Body>
                    <Card.Title>Jeremy Dupont</Card.Title>
                    <Card.Text>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioImg;
