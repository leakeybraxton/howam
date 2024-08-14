import React from 'react'
import '../../../theme/css/Portfolio.css'
import PortfolioImg from '../Portfolio/PortfolioImg';
export default function Elements() {
    return (
        <>
        <div className="otherPageBanner portfolioBanner">
            <div className="text-center title">
          <h2>CREATIVE PORTFOLIO</h2>
          <h6>We love to design see our portfolio</h6>
          </div>
        </div>
        <PortfolioImg/>
      </>
    )
}
