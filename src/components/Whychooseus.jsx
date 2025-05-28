import React from "react";
import ProgressBar from "./ProgressBar";
import ProgressBar2 from "./ProgressBar2";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiPhone } from "react-icons/pi";
import { assets } from "../assets/assets";


const Whychooseus = () => {
  return (
    <div className="whychooseus">
      <div className="whychooseus_content">
        <div className="left">
          <span className="section-tag">WHY CHOOSE TRANSAN</span>
          <h2 className="section-title ">
            We Are A <span>Leading</span> one-Stop Logistic Service
          </h2>
          <p className="section_text">
            Regardless of your industry, your commodity, or your key markets,
            Maersk offers global and local logistics solutions.
          </p>
          <div className="pro">
            <ProgressBar progress={62} />
            <ProgressBar2 progress={92} />
          </div>
          <div className="contact">
            <img
              className="img_dot"
              src="https://trazen.netlify.app/assets/images/abstract/dot-1.svg"
              alt=""
            />
            <div className="link">
            <a href="" >
              <button>
                Eplore More <IoIosArrowRoundForward className="nav_get_arrow" />
              </button>
            </a>
            <div className="phone">
            <span><PiPhone /></span> 
            <div>
                <p>Call Us</p>
                <a href="tel: +532093213333"><h3>+532 (09) 321 33 33</h3></a>
            </div>
            </div>
            </div>
          </div>
        </div>
        <div className="right">
            <div className="image">
                <img className="img_1" src={assets.why_choose_us_person} alt="" />
            </div>
            <div className="image">
                <img className="img_2" src={assets.world_globe_white} alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Whychooseus;
