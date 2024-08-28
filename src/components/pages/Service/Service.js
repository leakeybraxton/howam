import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
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

  // Array of data for kids programs
  const tableDataKids = [
    {
      column1: "KIDP",
      column2: "Introduction to Drawing and Painting",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KBDP",
      column2: "Basics of drawing and painting",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KDAB",
      column2: "Digital Art for Beginners",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KSTA",
      column2: "Storytelling Through Art",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KCDP",
      column2: "Crafts and DIY Projects",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KHPAN",
      column2: "Hands-on projects - Art and Nature",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KCCBA",
      column2: "Cartooning and Comic Book Art",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KCCM",
      column2: "Creative Clay Modeling",
      column3: "1",
      column4: "4500",
    },
    {
      column1: "KITP",
      column2: "Introduction to Photography",
      column3: "1",
      column4: "4500",
    },
  ];

  // Array of data for adult programs
  const tableDataAdults = [
    {
      column1: "AC001",
      column2: "Art Therapy Techniques",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC002",
      column2: "Textile Arts and Fabric Design",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC003",
      column2: "Oil and Acrylic Painting",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC004",
      column2: "Film and Animation Basics",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC005",
      column2: "Calligraphy and Lettering",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC006",
      column2: "Drawing and Sketching Techniques",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC007",
      column2: "Digital Illustration and Design",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC008",
      column2: "Watercolor Painting",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC009",
      column2: "Abstract Art and Mixed Media",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC010",
      column2: "Art History and Appreciation",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC011",
      column2: "Sculpture and 3D Art",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC012",
      column2: "Graphic Design Essentials",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC013",
      column2: "Portrait Drawing and Painting",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC014",
      column2: "Creative Writing for Artists",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "AC015",
      column2: "Photography and Editing",
      column3: "3",
      column4: "15000",
    },
  ];

  // Array of data for skill programs
  const tableDataSkills = [
    {
      column1: "SC001",
      column2: "Barista Training",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC002",
      column2: "Hairdressing",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC003",
      column2: "Plumbing",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC004",
      column2: "Electrician Training",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC005",
      column2: "Culinary Arts",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC006",
      column2: "Carpentry",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC007",
      column2: "Automotive Mechanics",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC008",
      column2: "Automotive Mechanics",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC009",
      column2: "Automotive Mechanics",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC010",
      column2: "Welding and Fabrication",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC011",
      column2: "Masonry",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC012",
      column2: "Baking and Pastry Making",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC013",
      column2: "HVAC (Heating, Ventilation, and Air Conditioning)",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC014",
      column2: "Hairdressing",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC015",
      column2: "Tailoring and Dressmaking",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC016",
      column2: "Painting and Decorating",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC017",
      column2: "Bicycle Repair and Maintenance",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC018",
      column2: "Gardening and Landscaping",
      column3: "3",
      column4: "15000",
    },

    {
      column1: "SC019",
      column2: "Gardening and Landscaping",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC020",
      column2: "Forex Training",
      column3: "3",
      column4: "15000",
    },
    {
      column1: "SC021",
      column2: "Blockchain Tech Training",
      column3: "3",
      column4: "15000",
    },
  ];

  // Array of data for language programs
  const tableDataLanguage = [
    {
      column1: "LC001",
      column2: "Spanish",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC002",
      column2: "French",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC003",
      column2: "German",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC004",
      column2: "Italian",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC005",
      column2: "Japanese",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC006",
      column2: "Mandarin / Chinese",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC007",
      column2: "Portuguese",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC008",
      column2: "Russian",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC009",
      column2: "Arabic",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC010",
      column2: "Korean",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC011",
      column2: "Hebrew",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC012",
      column2: "Turkish",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC013",
      column2: "Swahili",
      column3: "3",
      column4: "8000",
    },
    {
      column1: "LC014",
      column2: "English as a Second Language",
      column3: "3",
      column4: "8000",
    },
  ];
  return (
    <>
      <div className="otherPageBanner servicesBanner">
        <div className="text-center title" data-aos="fade-down">
          <h2>OUR SERVICE</h2>
          <h6>We guide our associates to a productive future</h6>
        </div>
      </div>
      <AmazingExpertise />
      {/* <OurPricing /> */}
      <div className="container">
        <div className="ourTestimonialMain">
          <div className="ourTestimonialCard text-center">
            <h2>Kids Courses</h2>
            <Table striped bordered hover data-aos="fade-up">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Course Name</th>
                  <th>Duration(months)</th>
                  <th>Fees</th>
                </tr>
              </thead>
              <tbody>
                {tableDataKids.map((row, index) => (
                  <tr key={index}>
                    <td>{row.column1}</td>
                    <td>{row.column2}</td>
                    <td>{row.column3}</td>
                    <td>{row.column4}</td>
                  </tr>
                ))}
              </tbody>

              <h2>Adult courses</h2>

              <tbody>
                {tableDataAdults.map((row, index) => (
                  <tr key={index}>
                    <td>{row.column1}</td>
                    <td>{row.column2}</td>
                    <td>{row.column3}</td>
                    <td>{row.column4}</td>
                  </tr>
                ))}
              </tbody>

              <h2>Skills courses</h2>

              <tbody>
                {tableDataSkills.map((row, index) => (
                  <tr key={index}>
                    <td>{row.column1}</td>
                    <td>{row.column2}</td>
                    <td>{row.column3}</td>
                    <td>{row.column4}</td>
                  </tr>
                ))}
              </tbody>

              <h2>Language courses</h2>

              <tbody>
                {tableDataLanguage.map((row, index) => (
                  <tr key={index}>
                    <td>{row.column1}</td>
                    <td>{row.column2}</td>
                    <td>{row.column3}</td>
                    <td>{row.column4}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {/* <button className="homeBannerBtn ourSurvice">
              <Link to="#">Get started</Link>
            </button> */}
          </div>
        </div>
      </div>
      <OurTestimonial />
      <Innovation />
    </>
  );
}
