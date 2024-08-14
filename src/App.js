import React, { useState } from "react";

import "./theme/css/App.css";
import Header from "./components/header/Header";
import Index from "./theme/Index";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Form from "./components/SignUp/Form";
import { Modal } from "react-bootstrap";

function App() {
  const [modalShow, setModalShow] = useState(false);
 
  return (
    <div>
      <Header />
      <Index />
      <Footer />
      <ScrollToTop />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Form onClose={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

export default App;
