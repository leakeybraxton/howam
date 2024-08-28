import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ThemeLogo from "../../assets/Images/BrandLogo/ThemeLogo.png";
import BlackThemeLogo from "../../assets/Images/BrandLogo/BlackThemeLogo.png";
import { useState } from "react";
const Header = (props) => {
  var className = "inverted";
  const [addClass, setAddClass] = useState("");

  var scrollTrigger = 20;

  const onToggle = () => {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("stamenu").className = "active";
  };

  const onCloseNav = () => {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("stamenu").className = "";
  };
  window.onscroll = function () {
    setAddClass();
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementsByTagName("nav")[0].classList.add(className);
      // setLogo("blackLogo");
    } else {
      document.getElementsByTagName("nav")[0].classList.remove(className);
      // setLogo("whiteLogo");
    }
  };

  // const [click, setClick] = React.useState(false);
  // const handleClick = () => setClick(!click);
  return (
    <>
      <div className={addClass}>
        <div className="header">
          <div className=" sticky-top" id="stamenu">
            <Navbar expand="lg" collapseOnSelect>
              <div className="inner-header">
                <Navbar.Brand href="/home">
                  <img
                    src={ThemeLogo}
                    alt="themeLogo"
                    className="img-fluid mx-auto WLogo"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "200px",
                      height: "100px",
                    }}
                  />
                  <img
                    src={BlackThemeLogo}
                    alt="themeLogo"
                    className="img-fluid mx-auto BLogo"
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      width: "200px", // Set your desired width
                      height: "100px", // Set your desired height
                    }}
                  />
                </Navbar.Brand>
                <Button
                  className="btn-navbar navbar-toggle"
                  onClick={onToggle}
                  data-toggle="collapse"
                  data-target=".nabar-ex1-collapse"
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </Button>

                <div id="mySidenav" className="sidenav menu-vertical">
                  <div className="close-nav hidden-md hidden-lg hidden-xl ">
                    <span>Menu</span>
                    <Button
                      className="closebtn pull-right"
                      onClick={onCloseNav}
                    >
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </Button>
                  </div>

                  <Nav
                    className="justify-content-center"
                    id="myOverlay"
                    style={{ flex: 1, marginTop: "30px" }}
                  >
                    <Nav.Link href="home">
                      <Link to="/home"> Home </Link>
                    </Nav.Link>
                    <Nav.Link href="#aboutus">
                      <Link to="/aboutus">About Us</Link>
                    </Nav.Link>
                    <Nav.Link href="#service">
                      <Link to="/service">Services</Link>
                    </Nav.Link>
                    <Nav.Link href="#planing">
                      <Link to="/planing">Payments</Link>
                    </Nav.Link>
                    <Nav.Link href="#portfolio">
                      <Link to="/portfolio">Portfolio</Link>
                    </Nav.Link>
                    <Nav.Link href="#blog">
                      <Link to="/blog">Blog</Link>
                    </Nav.Link>
                    <Nav.Link href="#blog">
                      <Link to="/contact">Contact</Link>
                    </Nav.Link>
                    <Nav.Link href="#signin">
                      <span
                        onClick={() => props.onShowMenu(true)}
                        style={{ color: "black !important" }}
                      >
                        {/* <Link to="/signin">Sign in</Link> */}
                      </span>
                    </Nav.Link>
                  </Nav>
                </div>
                <div className="w3-overlay w3-animate-opacity"></div>
                <button className="ourSurvic">
                  <Link to="/signin"> </Link>
                </button>
              </div>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
