import React from 'react';
import Slider from 'react-slick';
import { LuMoveRight } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft  } from "react-icons/hi";
import {Loading} from "../../components";
import {useFetchHomeSolution} from "../featchData/FeatchData";
import './HomeSolutions.scss';
import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
        
     >
      <HiOutlineArrowNarrowRight style={{ ...style, fontSize: "18px" }}/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
    >
      <HiOutlineArrowNarrowLeft style={{ ...style, fontSize: "18px" }}/>
    </div>
  );
}

const HomeSolutions = () => {

  const {loading, homesolution} = useFetchHomeSolution();
  if (loading) {
    return (
      <Loading/>
    )
  }
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <section id="solutions" className="solutions-home-wrapper">
    <div className="container">
    <div className="solutions-title">
            <h1 data-aos="fade-left" data-aos-duration="6000">
              Solutions & Sectors
            </h1>
            <p data-aos="fade-right" data-aos-duration="6000"> We build a better future with Our  Cutting-edge Innovating and tailored technologies that  not only elevate operational efficiency and sustainability but also align with the evolving demands of the dynamic sectors we serve. 
</p>
          </div>
          <Slider {...settings}>
            {homesolution.map((items) => {
                const {title, id, image, url} = items;
                return (
                    <div className='items' key={id}>
                    <img src={image} alt={title} />
                    <div data-aos="fade-up" className="text">
                    <h5>{title}</h5>
                    </div>
                    <div className="overlay_background">
                      <Link to={url}>
                      view more <LuMoveRight />
                      </Link>
                    <div className="arrow_down">
                      <MdKeyboardArrowDown/>
                      <MdKeyboardArrowDown/>
                    </div>
                    </div>
                  </div>
                )
            })}

        </Slider>
    </div>
  </section>
  )
}

export default HomeSolutions