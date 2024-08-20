import React from "react";
import "../../../../src/theme/css/HomePage.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import MainBannerImg from "../../../assets/Images/Banner/MainBannerImg.png";
import MainBannerImg1 from "../../../assets/Images/Banner/MainBannerImg1.png";
import MainBannerImg2 from "../../../assets/Images/Banner/MainBannerImg2.png";
import MainBannerImg3 from "../../../assets/Images/Banner/MainBannerImg3.png";
import MainBannerImg4 from "../../../assets/Images/Banner/MainBannerImg4.png";
import MainBannerImg5 from "../../../assets/Images/Banner/MainBannerImg5.png";

export default function Home() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1900,
    autoplay: true,
    autoplaySpeed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 1 } },
      { breakpoint: 800, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const images = [
    MainBannerImg,
    MainBannerImg1,
    MainBannerImg2,
    MainBannerImg3,
    MainBannerImg4,
    MainBannerImg5,
  ];

  return (
    <div className="mainBannerDiv">
      <Slider {...settings} className="row">
        {images.map((image, index) => (
          <img
            key={index}
            className="img-fluid mx-auto"
            src={image}
            alt={`BannerImage${index + 1}`}
            style={{ maxWidth: "auto", height: "auto" }}
          />
        ))}
      </Slider>
      <div className="bannerContain">
        <h1>WELCOME TO HOWAM</h1>
        <h5>
          Howam Productions offers therapy services both online and in-person,
          an online marketplace for health and lifestyle products, and an online
          college providing flexible education and training programs.
        </h5>
        <div className="bannerBtn">
          <button className="ourSurvice">
            <Link to="/service">Our Service</Link>
          </button>
          <button className="ourContact">
            <Link to="/contact">Our Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
