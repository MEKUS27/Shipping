import React from "react";
import { assets } from "../assets/assets";
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Experience = () => {
  return (
    <div className="Experience">
      <div className="left">
        <div className="text">
          <h1>34 + </h1>
          <span>Our Experince</span>
          <h1></h1>
        </div>
        <img className="img_shape" src={assets.star_curve_shape_blue} alt="" />
        <img className="img_1" src={assets.about_img_2} alt="" />

        <img className="img_2" src={assets.about_img_1} alt="" />
        <img
          className="img_dot"
          src="https://trazen.netlify.app/assets/images/abstract/dot-1.svg"
          alt=""
        />
      </div>
      <div className="right">
        <p className="first_p">GLOBAL TRANSPORT AND LOGISTICS</p>
        <h1>
          Providing <span> Exclusive </span> Logistics & Transport Services for
          You
        </h1>
        <p className="section_test">
          With years of experience in logistics and transportation, we pride
          ourselves on delivering customized solutions to businesses worldwide.
          From freight management.
        </p>
        <hr />


          <div className="details">
          <li>
            <GiCheckMark className="check_icon" /> Real-Time Tracking
          </li>
          <li className="shift_1">
            <GiCheckMark className="check_icon" /> Customizable Logistics
            Solutions
          </li>
          </div>
          <div className="details">
          <li>
            <GiCheckMark className="check_icon" /> On-Time Delivery
          </li>
          <li className="shift">
            <GiCheckMark className="check_icon" /> 24/7 Customer Support
          </li>
          </div>

        <p className="section_test_2">
          From freight management to supply chain optimization, we are committed
          to providing the best services to ensure your success.
        </p>

       <div className="smith">
       <button>
          <Link className="nav_button">
            Get In Touch <IoIosArrowRoundForward className="nav_get_arrow" />
          </Link>
        </button>
        <div className="content">
        <img src={assets.signature} alt="" />
        <p>CEO, Founder of Transan</p>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Experience;
