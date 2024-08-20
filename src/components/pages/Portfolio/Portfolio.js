import React from "react";
import "../../../theme/css/Portfolio.css";
import PortfolioImg from "../Portfolio/PortfolioImg";
export default function Elements() {
  return (
    <>
      <div className="otherPageBanner portfolioBanner">
        <div className="text-center title">
          <h2>CREATIVE PORTFOLIO</h2>
          <h6>
            Below is a portfolio what we have been up to in the recent past
          </h6>
        </div>
      </div>
      <PortfolioImg />
    </>
  );
}
