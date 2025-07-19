import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import chef from "../../../assets/home/chef-service.jpg";
import SectionTitle from "../../../Components/SectionTitle";

const Category = () => {
  
  return (
    <div className="container mx-auto px-4">
      <SectionTitle
        time="---From 11:00am to 10:00pm---"
        title="ORDER ONLINE"
      ></SectionTitle>
      <div className=" font-[100px] cinzel ">
        <Swiper
          centeredSlides={false}
          spaceBetween={5}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className=" text-center text-3xl  text-white w-66 uppercase -mt-16">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="  text-center text-3xl text-white w-66 uppercase -mt-16">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className=" text-center text-3xl text-white w-66 uppercase -mt-16">
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className=" uppercase text-center text-3xl text-white w-66 -mt-16">
              desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className=" uppercase text-center text-3xl text-white w-66 -mt-16">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
      <div
        className="relative mt-20 md:mt-30 bg-fixed h-[300px] md:h-[572px] bg-center bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url(${chef})`,
        }}
      >
        <div className="bg-white bg-opacity-90 p-8 md:p-16 max-w-4xl text-center shadow-lg rounded">
          <h2 className="text-3xl md:text-4xl font-cinzel font-bold mb-4">
            Bistro Boss
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            Step into a cozy atmosphere where delicious aromas welcome you at the door. Our chefs prepare each dish with care, combining rich flavors and quality ingredients to create meals you’ll remember. From comforting classics to chef-inspired specials, there's something on our menu for everyone to enjoy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
