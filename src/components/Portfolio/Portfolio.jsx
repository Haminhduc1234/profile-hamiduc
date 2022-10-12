import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import project_1 from "../../img/project1.png";
import project_2 from "../../img/project2.png";
import project_3 from "../../img/project3.png";
import project_4 from "../../img/project4.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={project_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project_4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
