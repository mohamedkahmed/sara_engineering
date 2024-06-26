import { BreadCrumb, ArrowDownIcon, Loading, ElecticSolution, EvGateAppSlider, EvGatePortalSlider } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import {useFetchElectricVehiclesChargers} from "../../components/featchData/FeatchData";
import "./ElectricVehiclesChargers.scss";
const ElectricVehiclesChargers = () => {
    const {loading, electricVehiclesChargers} = useFetchElectricVehiclesChargers();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Electric Vehicles Chargers" desc="At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge." img="/images/37-37.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="electric_Vehicles_wrapper">
            {electricVehiclesChargers.map((items) => {
              const {id,image, title, para1,para2,brandImage} = items;
              return (
                <div   className="electric_content" key={id}>
                    <div className="content_text" data-aos="fade-down">
                        <h2>{title}</h2>
                        <p title={para1}>{para1}</p>
                        <p title={para2}>{para2}</p>
                        <div className="brand_images">
                            {brandImage.map((img, index) => {
                                return <img key={index} src={img} alt="brand" />
                            })}
                        </div>
                    </div>
                    <div className="image" data-aos="zoom-in">
                    <div className="u-img">
                        <img src={image} alt={title} />
                        </div>
                        <div className="side_img_di">
                    </div>
                    </div>
                    <div className="arrow_icon">
                     <MdKeyboardArrowDown/>
                    </div>
                </div>
              )
            })};

            {/* solution & sectors */}
            <ElecticSolution/>

            {/* our services background */}
            <section className="our_services_background">
              <div className="container">
                <div className="text">
                  <h2>Our Services</h2>
                  <p>At EV Gate, we are not just revolutionizing electric mobility; we're paving the way for a future where sustainability and technological innovation converge.</p>
                  <div className="arrow_icon">
                     <MdKeyboardArrowDown style={{color: "#80C804"}}/>
                     <MdKeyboardArrowDown style={{color: "#F9BF58"}}/>
                    </div>
                </div>
              </div>
            </section>
            {/* ev gate portal */}
            <EvGatePortalSlider/>
            {/* ev gate app */}
            
            <EvGateAppSlider/>


            {/* background for go to ev gate website */}

            <section className="evgate_website_background">
              <div className="container">
                <div className="parent">
                <div className="top">
                <MdKeyboardArrowDown/>
                     <MdKeyboardArrowDown/>
                </div>
                <div className="website_btn">
                  <a target="_blank" href="https://www.evgate.com/">go to website <GoArrowUpRight/></a>
                </div>
                </div>
              </div>
            </section>

          </section>
    </>
  )
}

export default ElectricVehiclesChargers