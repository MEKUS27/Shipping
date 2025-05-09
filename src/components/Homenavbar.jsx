import { useState, useEffect } from "react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlMenu } from "react-icons/sl";
import { CgClose } from "react-icons/cg";
import { HiMiniChevronDown } from "react-icons/hi2";

const Homenavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
 const [isServicesOpen, setIsServicesOpen] = useState(false);
 const [isProjectsOpen, setIsProjectsOpen] = useState(false)


  return (
    <div>
      <div className="nav_first_layout">Lorem, ipsum dolor.</div>

      <div className="main_navbar">
        <img className="logodark" src={assets.logodark} alt="" />
        <div className="nav_dropdowns">
          <div className="dropdown hover-dropdown">
            <button className="dropdown-toggle">Home</button>
          </div>
          <div className="dropdown hover-dropdown">
            <button className="dropdown-toggle">
              Pages
              <BiChevronDown className="drop_dwon_icon" />
            </button>
            <ul className="dropdown-menu">
              <li onClick={() => alert("You selected: Option 1")}>About</li>{" "}
              <hr className="hr" />
              <li onClick={() => alert("You selected: Option 1")}>
                Pricing
              </li>{" "}
              <hr className="hr" />
              <li onClick={() => alert("You selected: Option 1")}>
                Teams
              </li>{" "}
              <hr className="hr" />
              <li onClick={() => alert("You selected: Option 1")}>
                Team Details
              </li>{" "}
              <hr className="hr" />
              <li onClick={() => alert("You selected: Option 1")}>
                FAQ's
              </li>{" "}
              <hr className="hr" />
              <li onClick={() => alert("You selected: Option 1")}>Error 404</li>
            </ul>
          </div>

          <div className="dropdown hover-dropdown">
            <button className="dropdown-toggle">
              Projects
              <BiChevronDown className="drop_dwon_icon" />
            </button>
            <ul className="dropdown-menu">
              <li onClick={() => alert("You selected: Option 1")}>Projects</li>{" "}
              <hr className="hr" />
              <li onClick={() => alert("You selected: Option 1")}>
                Project Details
              </li>
            </ul>
          </div>

          <div className="dropdown hover-dropdown">
            <button className="dropdown-toggle">
              Services
              <BiChevronDown className="drop_dwon_icon" />
            </button>
            <ul className="dropdown-menu">
              <li onClick={() => alert("You selected: Option 1")}>Service</li>{" "}
              <hr className="hr" />
              <li onClick={() => alert("You selected: Option 1")}>
                Service Details
              </li>
            </ul>
          </div>

          <div className="dropdown hover-dropdown">
            <button className="dropdown-toggle">Contact</button>
          </div>
          <div className="dropdown hover-dropdown">
            <button className="dropdown-toggle">Developers</button>
          </div>
        </div>

        <div className="nav_btn">
          <button>
            <Link className="nav_button">
              Get In Touch <IoIosArrowRoundForward className="nav_get_arrow" />{" "}
            </Link>
          </button>
        </div>
        <div className="nav_menu_icon">
          <SlMenu className="menu_icon" onClick={() => setIsOpen(true)} />
          {/* Overlay */}
          {isOpen && (
            <div className="overlay" onClick={() => setIsOpen(false)}></div>
          )}

          {/* Sidebar */}
          <nav className={`side-nav ${isOpen ? "open" : ""}`}>
            <CgClose className="close-btn" onClick={() => setIsOpen(false)} />

            <div className="side_nav_logo">
              <img src={assets.logodark} alt="" />
            </div>
            <ul>
              <li>
                <button
                  className="side_nav_dropdown-toggle"
                  onClick={() => setIsPagesOpen(!isPagesOpen)}
                >
                  Pages{" "}
                  <HiMiniChevronDown className="side_nav_drop_dwon_icon" />
                </button>
                {isPagesOpen && (
                  <ul className="side_nav_dropdown-menu">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <hr className="nav_side_hr" />
                    <li>
                      <a href="#">Pricing</a>
                    </li>
                    <hr className="nav_side_hr" />
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <hr className="nav_side_hr" />
                    <li>
                      <a href="#">Team Details</a>
                    </li>
                    <hr className="nav_side_hr" />
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                    <hr className="nav_side_hr" />
                    <li>
                      <a href="#">Error 404</a>
                    </li>
                    <hr className="nav_side_hr" />
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="side_nav_dropdown-toggle"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services{" "}
                  <HiMiniChevronDown className="side_nav_drop_dwon_icon" />
                </button>
                {isServicesOpen && (
                  <ul className="side_nav_dropdown-menu">
                    <li>
                      <a href="#">Service</a>
                    </li> <hr className="nav_side_hr" />
                    <li>
                      <a href="#">Service Details</a>
                    </li><hr className="nav_side_hr" />
                  </ul>
                )}
              </li>

              <li>
                <button
                  className="side_nav_dropdown-toggle"
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                >
                  Projects{" "}
                  <HiMiniChevronDown className="side_nav_drop_dwon_icon" />
                </button>
                {isProjectsOpen && (
                  <ul className="side_nav_dropdown-menu">
                    <li>
                      <a href="#">Service</a>
                    </li> <hr className="nav_side_hr" />
                    <li>
                      <a href="#">Service Details</a>
                    </li><hr className="nav_side_hr" />
                  </ul>
                )}
              </li>

              <a href="">
              <li>
                <button
                  className="side_nav_dropdown-toggle"
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                >
                  Contact Us{" "}
                </button>
                </li>
              </a>
                <a href="">
                    <li>
                <button
                  className="side_nav_dropdown-toggle"
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                >
                  Developers{" "}
                </button>
                </li>
                </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Homenavbar;
