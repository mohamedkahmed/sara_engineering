import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./AsNavFor.scss";
function AsNavFor({ slides, url }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);


  return (
    <div className="slider-container">
      <Slider asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
        {slides?.length > 1 &&
          slides?.map((img, index) => <img src={img} key={`item-#${index}`} />)}
        {url?.length > 0 &&
          url?.map((video, index) => (
            <video
              key={`item-#${index}`}
              className="single_video"
              autoPlay
              muted
              loop
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
      >
        {slides?.length > 1 &&
          slides?.map((img, index) => <img src={img} key={`item-#${index}`} />)}

        {url?.length > 0 &&
          url?.map((video, index) => (
            <video
              key={`item-#${index}`}
              className="single_video"
              autoPlay
              muted
              loop
            >
              <source src={video} type="video/mp4" />
            </video>
          ))}
      </Slider>
    </div>
  );
}

export default AsNavFor;
