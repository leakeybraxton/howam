import React from "react";
import "../../../../src/theme/css/HomePage.css";
import MainBannerImg from "../../../assets/Images/Banner/MainBannerImg.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="mainBannerDiv">
        <img
          className="img-fluid mx-auto"
          src={MainBannerImg}
          alt="BannerImage"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
            height: "100%",
          }}
        />
        <div className="bannerContain">
          <h1>WELCOME TO HOWAM</h1>
          <h5>
            Homam Productions offers therapy services both online and in-person,
            an online marketplace for health and lifestyle products, and an
            online college providing flexible education and training programs.
          </h5>
          <div className="bannerBtn">
            <button className="ourSurvice">
              <Link to="/service">Our Service </Link>
            </button>
            <button className="ourContact">
              <Link to="/contact">Our Contact</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
