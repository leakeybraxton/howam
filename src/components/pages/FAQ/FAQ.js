import React, { useEffect } from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import "../../../theme/css/Faq.css";
import OurTestimonial from "../../pages/HomePage/OurTestimonial";
import Aos from "aos";
import "aos/dist/aos.css";
export default function FAQ() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="otherPageBanner faqBanner">
        <div className="text-center title" data-aos="fade-down">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <h6>AT HOWAM PRODUCTION</h6>
        </div>
      </div>
      <div className="container">
        <div className="faqContain" data-aos="fade-up">
          <Row>
            <Col xs={12} sm={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    What services does Homam Productions offer?
                  </Accordion.Header>
                  <Accordion.Body>
                    Homam Productions provides therapy services both online and
                    in-person, an online marketplace for health and lifestyle
                    products, and an online college offering flexible education
                    and training programs.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How can I access the therapy services?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can schedule appointments for online or in-person
                    therapy through our website. For more details on the therapy
                    options available, please visit our therapy services page.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    What types of products are available in the online
                    marketplace?
                  </Accordion.Header>
                  <Accordion.Body>
                    Our online marketplace features a wide range of health and
                    lifestyle products, including wellness supplements, fitness
                    equipment, personal care items, and more. Browse our
                    marketplace to explore our full selection.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={12} sm={6}>
              <Accordion
                defaultActiveKey="1"
                data-aos-anchor-placement="bottom-bottom"
              >
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How do I enroll in the online college programs?
                  </Accordion.Header>
                  <Accordion.Body>
                    To enroll, visit our online college’s website, review the
                    available programs, and complete the application process.
                    Our admissions team is available to assist you with any
                    questions you may have.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Are the online college programs affordable?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer pocket-friendly fees to make education
                    accessible to a broad range of students. For specific
                    pricing details, please contact our admissions office or
                    check the tuition information on our website.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Can I get financial aid or scholarships?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, we offer various financial aid options and scholarships
                    to eligible students. Please reach out to our financial aid
                    office for more information on available opportunities and
                    application processes.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </div>
      <h6>OurTestimonials</h6>
      {/* <OurTestimonial /> */}
    </>
  );
}
