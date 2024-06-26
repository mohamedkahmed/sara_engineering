import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useFetchWiringDevices} from "../../components/featchData/FeatchData";
import "./WiringDevices.scss";
const WiringDevices = () => {
    const {loading, wiringDevices} = useFetchWiringDevices();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Wiring Devices" desc="Advanced Wiring Devices, featuring smart home technologies, energy-efficient systems, and advanced metering infrastructure for real-time energy monitoring and optimized consumption." img="/images/36.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="wiring_Devices_wrapper">
            {wiringDevices.map((items) => {
              const {id,image, title, para1,para2,brandImage} = items;
              return (
                <div   className="wiring_content" key={id}>
                    <div  className="content_text" data-aos="fade-down">
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
          </section>
    </>
  )
}

export default WiringDevices