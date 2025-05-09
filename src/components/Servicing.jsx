import React from "react";
const Marquee = React.lazy(() => import("react-fast-marquee"));
import { assets } from "../assets/assets";




const Servicing = () => {
  return (
    <div className="servicing">
            <h2>Global Servicing  Around the World</h2>

        <Marquee pauseOnHover={true} speed={60}>
      <div className="marquee_img">
      <img src={assets.client_logo_one} alt="" />
      <img src={assets.client_logo_two} alt="" />
      <img src={assets.client_logo_three} alt="" />
      <img src={assets.client_logo_four} alt="" />
      <img src={assets.client_logo_five} alt="" />
      <img src={assets.client_logo_six} alt="" />
      </div>
     </Marquee>
    </div>
  );
};

export default Servicing;
