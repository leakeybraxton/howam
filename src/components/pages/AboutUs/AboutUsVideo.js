import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Iframe from "react-iframe";
import AboutUsVideoBg from "../../../assets/Images/AboutUs/AboutUsVideoBg.png";
import AboutUsTheVideo from "../../../assets/Images/AboutUs/AboutUsVideoBg.mp4";

const AboutUsVideo = () => {
  const [show1, setShow1] = useState(false);
  return (
    <div>
      <div className="video">
        <img
          alt="footer1"
          src={AboutUsVideoBg}
          className="img-fluid mx-auto"
          style={{
            display: "flex",
            width: "50%",
            height: "50%",
          }}
        />
        <div className="Playbtn" onClick={() => setShow1(true)}>
          <i></i>
        </div>
        <Modal
          show={show1}
          onHide={() => setShow1(false)}
          centered
          className="NewsEventModel"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Iframe
              className="VideoIframe"
              src={AboutUsTheVideo}
              width={500}
              height={275}
            />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default AboutUsVideo;
