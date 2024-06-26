import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useFetchIndustrialAutomation} from "../../components/featchData/FeatchData";
import "./IndustrialAutomation.scss";
const IndustrialAutomation = () => {
    const {loading, industrialAutomation} = useFetchIndustrialAutomation();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Industrial Automation" desc="Revolutionize your industrial operations with Sara Engineering & Energy Systems' Industrial Automation solutions, leveraging advanced control systems and information technologies to enhance efficiency and reduce reliance on manual processes" img="/images/26.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="industrial_Automation_wrapper">
            {industrialAutomation.map((items) => {
              const {id,image, title, para1,para2,brandImage} = items;
              return (
                <div   className="industrial_content" key={id}>
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
          </section>
    </>
  )
}

export default IndustrialAutomation