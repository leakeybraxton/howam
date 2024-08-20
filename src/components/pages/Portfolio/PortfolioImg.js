import { useState, useEffect } from "react";
import "../../../theme/css/Portfolio.css";
import { Card, Row, Col } from "react-bootstrap";
import Portfolio1 from "../../../assets/Images/Portfolio/kids/Portfolio1.png";
import Portfolio2 from "../../../assets/Images/Portfolio/kids/Portfolio2.png";
import Portfolio3 from "../../../assets/Images/Portfolio/kids/Portfolio3.png";
import Portfolio4 from "../../../assets/Images/Portfolio/kids/Portfolio4.png";
import Portfolio5 from "../../../assets/Images/Portfolio/kids/Portfolio5.png";
import Portfolio6 from "../../../assets/Images/Portfolio/kids/Portfolio6.png";
import Portfolio7 from "../../../assets/Images/Portfolio/kids/Portfolio7.png";
import Portfolio8 from "../../../assets/Images/Portfolio/kids/Portfolio8.png";
import Portfolio9 from "../../../assets/Images/Portfolio/kids/Portfolio9.png";

import skillsPortfolio1 from "../../../assets/Images/Portfolio/skills/Portfolio1.png";
import skillsPortfolio2 from "../../../assets/Images/Portfolio/skills/Portfolio2.png";
import skillsPortfolio3 from "../../../assets/Images/Portfolio/skills/Portfolio3.png";
import skillsPortfolio4 from "../../../assets/Images/Portfolio/skills/Portfolio4.png";
import skillsPortfolio5 from "../../../assets/Images/Portfolio/skills/Portfolio5.png";
import skillsPortfolio6 from "../../../assets/Images/Portfolio/skills/Portfolio6.png";
import skillsPortfolio7 from "../../../assets/Images/Portfolio/skills/Portfolio7.png";
import skillsPortfolio8 from "../../../assets/Images/Portfolio/skills/Portfolio8.png";
import skillsPortfolio9 from "../../../assets/Images/Portfolio/skills/Portfolio9.png";
import skillsPortfolio10 from "../../../assets/Images/Portfolio/skills/Portfolio10.png";
import skillsPortfolio11 from "../../../assets/Images/Portfolio/skills/Portfolio11.png";

import Aos from "aos";
import "aos/dist/aos.css";

const images = {
  1: [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio6,
    Portfolio7,
    Portfolio8,
    Portfolio9,
  ],
  2: [
    skillsPortfolio1,
    skillsPortfolio2,
    skillsPortfolio3,
    skillsPortfolio4,
    skillsPortfolio5,
    skillsPortfolio6,
    skillsPortfolio7,
    skillsPortfolio8,
    skillsPortfolio9,
    skillsPortfolio10,
    skillsPortfolio11,
  ],
  // 3: [
  //   Portfolio5,
  //   Portfolio4,
  //   Portfolio3,
  //   Portfolio2,
  //   Portfolio1,
  //   Portfolio9,
  //   Portfolio8,
  //   Portfolio7,
  //   Portfolio6,
  // ],
};

function PortfolioImg() {
  useEffect(() => {
    Aos.init({ duration: 3500 });
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container portfolio">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          KIDS
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          MUSIC AND ART
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          OTHERS
        </button>
      </div>

      <div className="content-tabs">
        {Object.keys(images).map((key) => (
          <div
            key={key}
            className={
              toggleState === parseInt(key)
                ? "content active-content"
                : "content"
            }
          >
            <div className="beffect">
              <Row>
                {images[key].map((imgSrc, index) => (
                  <Col xl={4} lg={4} md={6} sm={6} xs={12} key={index}>
                    <Card>
                      <a
                        href={imgSrc}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Card.Img variant="top" src={imgSrc} />
                      </a>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioImg;
