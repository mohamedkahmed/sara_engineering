import { MdKeyboardArrowDown } from "react-icons/md";
import { useFetchHomeSlider, useFetchHomeBackground } from "../featchData/FeatchData";
import { Loading } from "../../components";
import Slider from "react-slick";
import "./Header.scss";
const Header = () => {
  const { loading, homeslider } = useFetchHomeSlider();
  const {homeBackg } = useFetchHomeBackground();

  if (loading) {
    return <Loading />;
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="header">
      <div className="main-header">
        <div className="background_cover_src">
          
          {homeBackg[0]?.youWantToAddVideo ? (
                      <video className="single_video" height="786px" autoPlay muted loop>
                      <source src={homeBackg[0]?.videoLink} type="video/mp4" />
                    </video>
                    ) : (
                      <img src={homeBackg[0]?.image} alt="background" />
                    )}
        </div>
        <div className="container">
          <Slider {...settings}>
            {homeslider.map((items) => {
              const { title, id, desc, image, url } = items;
              return (
                <div className="header-content" key={id}>
                  <div className="header-text" data-aos="fade-right">
                    <div className="t-x">
                      <h1>{title}</h1>
                      <p>{desc}</p>
                    </div>
                    <div className="down-icon">
                      <MdKeyboardArrowDown className="top-icon" />
                      <MdKeyboardArrowDown className="down2-icon" />
                    </div>
                  </div>
                  <div className="header-image" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    {url ? (
                      <video className="single_video" height="786px" autoPlay muted loop>
                        <source src={url} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={image} alt={title} />
                    )}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Header;
