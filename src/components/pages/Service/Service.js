import React, { useEffect } from "react";
import AmazingExpertise from "./AmazingExpertise";
import OurTestimonial from "../../pages/HomePage/OurTestimonial";
import OurPricing from "../HomePage/OurPricing";
import "../../../theme/css/Service.css";
import Innovation from "./Innovation";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Service() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="otherPageBanner servicesBanner">
        <div className="text-center title" data-aos="fade-down">
          <h2>OUR SERVICE</h2>
          <h6>We guide our associates to a productive future</h6>
        </div>
      </div>
      <AmazingExpertise />
      <OurPricing />
      <OurTestimonial />
      <Innovation />
    </>
  );
}
