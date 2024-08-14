import React from "react";
import Banner from "../HomePage/Banner";
import OurFeature from "../HomePage/OurFeature";
import AboutUs from "../HomePage/AboutUs";
import OurBestServices from "./OurBestServices";
import OurPricing from "./OurPricing";
import OurTeam from "./OurTeam";
import OurTestimonial from "./OurTestimonial";
import ContactUs from "./ContactUs";
import OurBlog from "./OurBlog";
import Brandlogo from "./Brandlogo";
import StartedToday from "./StartedToday";
import YearOfExperience from "./YearOfExperience";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <OurFeature />
      <YearOfExperience />
      <OurBestServices />
      <OurPricing />
      {/* <OurTeam /> */}
      {/* <OurTestimonial/> */}
      <ContactUs />
      <OurBlog />
      <Brandlogo />
      <StartedToday />
    </>
  );
}
