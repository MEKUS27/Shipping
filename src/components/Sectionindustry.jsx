import React from 'react'
import { assets } from '../assets/assets'
import { PiHeartbeatBold, PiLaptopBold  } from "react-icons/pi";
import { LiaLaptopCodeSolid, LiaStoreAltSolid, LiaCarSideSolid   } from "react-icons/lia";
import { LuRefrigerator, LuHeartHandshake  } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";




const Sectionindustry = () => {
  return (
    <div className='sectionindustry'>
        <div className="sectionindustry_content">
           <div className="text">
           <p className='section-tag'>OUR INDUSTRY</p>
           <h2>Our <span>Industry</span> sectors</h2>
           <p className='section-text'>
           Regardless of your industry, your commodity, or your key markets, Maersk offers 
           global and local logistics solutions.</p>
           </div>
           <div className="industry_list">
            <ul>
                <li>
                   <span className='industry_icon'><PiHeartbeatBold  /></span> <a href="">Fashion & Lifestyle</a>
                </li>
                <li>
                   <span className='industry_icon'><PiLaptopBold  /></span> <a href="">Technology</a>
                </li>
                <li>
                   <span className='industry_icon'><LuRefrigerator /></span> <a href="">Refrigerate Goods</a>
                </li>
                <li>
                   <span className='industry_icon'><LuHeartHandshake /></span> <a href="">Pharma & Healthcare</a>
                </li>
                <li>
                   <span className='industry_icon'><LiaStoreAltSolid /></span> <a href="">Retails</a>
                </li>
                <li>
                   <span className='industry_icon'><GoBriefcase /> </span><a href="">Business</a>
                </li>
                <li>
                   <span className='industry_icon'><HiOutlineClipboardDocumentList /></span> <a href="">FCGH</a>
                </li>
                <li>
                   <span  className='industry_icon'><LiaCarSideSolid /></span> <a href="">Automotive</a>
                </li>
            </ul>
           </div>
        </div>
        <div className='sectionindustry_img'>
        <img className='img_one' src={assets.world_globe_dark} alt="" />
        <img className='img_two' src={assets.industry_shape} alt="" />
        </div>
    </div>
  )
}

export default Sectionindustry