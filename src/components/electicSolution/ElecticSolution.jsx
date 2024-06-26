import Slider from 'react-slick';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft  } from "react-icons/hi";
import {Loading} from "../../components";
import {useFetchElecticSolution} from "../../components/featchData/FeatchData";
import './ElecticSolution.scss';

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

const ElecticSolution = () => {

  const {loading, electicSolution} = useFetchElecticSolution();
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
    <section  className="electic_solutions_wrapper">
    <div className="container">
    <div className="electic_title">
            <h2 data-aos="fade-left" data-aos-duration="6000">
              Solutions & Sectors
            </h2>
            <p data-aos="fade-right" data-aos-duration="6000">At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge.</p>
          </div>
          <Slider {...settings}>
            {electicSolution.map((items) => {
                const {title, id, desc, image} = items;
                return (
                    <div className='items' key={id}>
                    <img src={image} alt={title} />
                    <div data-aos="fade-up" className="text">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                    </div>
                  </div>
                )
            })}

        </Slider>
    </div>
  </section>
  )
}

export default ElecticSolution