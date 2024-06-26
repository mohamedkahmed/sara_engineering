import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useFetchEnergyMonitoring} from "../../components/featchData/FeatchData";
import "./EnergyMonitoring.scss";
const EnergyMonitoring = () => {
    const {loading, energyMonitoring} = useFetchEnergyMonitoring();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Energy & Monitoring" desc="Under our Energy & Monitoring services, Sara Engineering & Energy Systems empowers businesses and homeowners with real-time energy consumption monitoring, providing crucial insights that help identify inefficiencies and enhance overall energy management." img="/images/31.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="energy_Monitoring_wrapper">
            {energyMonitoring.map((items) => {
              const {id,image, title, para1,para2,brandImage} = items;
              return (
                <div   className="energy_content" key={id}>
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

export default EnergyMonitoring