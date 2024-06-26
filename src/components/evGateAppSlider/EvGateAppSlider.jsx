import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import {useFetchAppManage} from "../featchData/FeatchData";
import {Loading} from "../../components"
import './EvGateAppSlider.scss'

const EvGateAppSlider = () => {
  const {loading, appManage} = useFetchAppManage();
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
        dots: true,
        slidesToShow: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",

      };
  return (
    <section className='app-feature-wrapper'>
        <Slider {...settings}>
            {appManage.map((item) => {
                const {id, image , title, desc} = item;
                return (
                    <div data-aos="fade-right" className='items' key={id}>
                                    <div className="app-images">
                <img src={image} alt="app image" />
              </div>
                    <div className="text">
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <div className="see-all">
                  <Link to="/portalmobileApp">See all</Link>
                </div>
                    <div className="download-app">
                      <div><p>download the app now</p></div>
                      <div className='images_load'>
                      <Link to="#"> <img src="/images/googlePlay.png" alt="download google play app " /> </Link>
                <Link to="#"> <img src="/images/appStore.png" alt="download app store" /> </Link>
             
                      </div>
              </div>
                    </div>
                  </div>
                )
            })}

        </Slider>
    </section>
  )
}

export default EvGateAppSlider