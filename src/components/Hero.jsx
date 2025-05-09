import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <div className="hero">
       <div className="left-content">
        <div className="section-tag">
            <p>GLOBAL TRANSPORT & LOGISTICS</p>
        </div>
       <h1>Any <span>Freight,</span> <br /> Any Destination with Trazan</h1>
       <p className="section-tex">We carry clearness to intricacy, separating basic subtleties 
        from confounded data to make modern, direct arrangements.</p>
        <div >
            <button >
                <Link className="nav_button">Get In Touch <IoIosArrowRoundForward className="nav_get_arrow" /> </Link>  
            </button>
        </div>
       </div>
       <div className="right-content">

       <div className="element_1">
          <img src={assets.element1} alt="" />
        </div>

        <div className="image">
        <img src={assets.element1} alt="" />
        </div>

       <div className="element_4">
          <img src={assets.element4} alt="" />
        </div>
       
       </div>
      </div>
    </>
  );
};

export default Hero;
