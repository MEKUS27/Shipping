import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { LiaShipSolid, LiaShippingFastSolid, LiaWarehouseSolid   } from "react-icons/lia";
import { IoAirplaneOutline } from "react-icons/io5";
import { MdOutlineDirectionsRailway } from "react-icons/md";
import { PiCodesandboxLogo } from "react-icons/pi";
import { Link } from "react-router-dom";



import { assets } from "../assets/assets";

// Sample data with additional div content
const logisticsData = [
  {
    id: 1,
    
    content: (
      <div className="content">
        <div className="img-cover">
        <img className="service-thumbnail "  src={assets.service_thumbnail_1} alt="" /></div>
        {/* <p>Additional content for the truck in transit</p> */}
        <div className="icon-holder">
            <LiaShipSolid   />
        </div>
       <div className="content_text">
       <h1>Maritime Transportation</h1>
       <p>We are committed to providing the best service to ensure your success</p>
       </div>
       <Link className="btn_link">
        <button>Read More <IoIosArrowRoundForward className="btn_link_icon" /> </button>  
       </Link>
      </div>
    ),
  },
  {
    id: 2,
  
    content: (
        <div className="content">
        <div className="img-cover">
        <img className="service-thumbnail "  src={assets.service_thumbnail_2} alt="" />
        </div>
        <div className="icon-holder">
            <LiaShippingFastSolid    />
        </div>
        <div className="content_text">
       <h1>Cargo Freight</h1>
       <p>We are committed to providing the best service to ensure your success</p>
       </div>
       <Link className="btn_link">
        <button>Read More <IoIosArrowRoundForward className="btn_link_icon" /> </button>  
       </Link>
        {/* <p>Additional content for the truck in transit</p> */}
      </div>
    ),
  },
  {
    id: 3,
   
    content: (
        <div className="content">
        <div className="img-cover">
        <img className="service-thumbnail "  src={assets.service_thumbnail_3} alt="" />
        </div>
        <div className="icon-holder">
            <IoAirplaneOutline    />
        </div>
        <div className="content_text">
       <h1>Inter modal Shipping</h1>
       <p>We are committed to providing the best service to ensure your success</p>
       </div>
       <Link className="btn_link">
        <button>Read More <IoIosArrowRoundForward className="btn_link_icon" /> </button>  
       </Link>
        {/* <p>Additional content for the truck in transit</p> */}
      </div>
    ),
  },
  {
    id: 4,
   
    content: (
        <div className="content">
        <div className="img-cover">
        <img className="service-thumbnail "  src={assets.service_thumbnail_4} alt="" />
        </div>
        <div className="icon-holder">
        <MdOutlineDirectionsRailway />
        </div>
        <div className="content_text">
       <h1>Raily Transport</h1>
       <p>We are committed to providing the best service to ensure your success</p>
       </div>
       <Link className="btn_link">
        <button>Read More <IoIosArrowRoundForward className="btn_link_icon" /> </button>  
       </Link>
        {/* <p>Additional content for the truck in transit</p> */}
      </div>
    ),
  },
  {
    id: 5,
   
    content: (
        <div className="content">
        <div className="img-cover">
        <img className="service-thumbnail "  src={assets.service_thumbnail_5} alt="" />
        </div>
        <div className="icon-holder">
        <LiaWarehouseSolid  />
        </div>
        <div className="content_text">
       <h1>Maritime Transportation</h1>
       <p>We are committed to providing the best service to ensure your success</p>
       </div>
       <Link className="btn_link">
        <button>Read More <IoIosArrowRoundForward className="btn_link_icon" /> </button>  
       </Link>
        {/* <p>Additional content for the truck in transit</p> */}
      </div>
    ),
  },
  {
    id: 6,
   
    content: (
        <div className="content">
        <div className="img-cover">
        <img className="service-thumbnail "  src={assets.service_thumbnail_6} alt="" />
        </div>
        <div className="icon-holder">
        <PiCodesandboxLogo  />
        </div>
        <div className="content_text">
       <h1>Maritime Transportation</h1>
       <p>We are committed to providing the best service to ensure your success</p>
       </div>
       <Link className="btn_link">
        <button>Read More <IoIosArrowRoundForward className="btn_link_icon" /> </button>  
       </Link>
        {/* <p>Additional content for the truck in transit</p> */}
      </div>
    ),
  },
  
];

const LogisticsSwiper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="logistics-swiper-container">
      <div className="custom-navigation">
        <button ref={prevRef} className="custom-arrow prev-arrow">
          <IoIosArrowRoundBack size={30} />
        </button>
        <button ref={nextRef} className="custom-arrow next-arrow">
          <IoIosArrowRoundForward className="left" size={30} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={3}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 200000 }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          767: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1115: { slidesPerView: 2 },
          1366: { slidesPerView: 3 },
        }}
      >
        {logisticsData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link className="card_link">
            <div className="logistics-card">
              {/* <div className="logistics-icon">{item.icon}</div> */}
             
              {item.content}
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogisticsSwiper;
