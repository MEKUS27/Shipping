import React from 'react'
import { assets } from '../assets/assets'


const Experience = () => {
  return (
    <div className='Experience'>
        <div className="left">
            <div className="text">
            <h1>34 + </h1>
            <span>Our Experince</span>
            <h1></h1>
            </div>
            <img className='img_shape' src={assets.star_curve_shape_blue} alt="" />
            <img className='img_1' src={assets.about_img_2} alt="" />

            <img className='img_2' src={assets.about_img_1} alt="" />
            <img className='img_dot' src="https://trazen.netlify.app/assets/images/abstract/dot-1.svg" alt="" />
        </div>
        <div className="right">
            <p className='first_p'>GLOBAL TRANSPORT AND LOGISTICS</p>
            <h1>Providing <span> Exclusive </span> Logistics & Transport Services for You</h1>
            <p className='section_test'>With years of experience in logistics and transportation, we pride ourselves on delivering 
            customized solutions to businesses worldwide. From freight management.</p>
            {/* <hr /> */}
        </div>
    </div>
  )
}

export default Experience