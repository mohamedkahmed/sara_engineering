import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import { MdKeyboardArrowDown } from "react-icons/md";
import {useFetchBuildingAutomation} from "../../components/featchData/FeatchData";
import "./BuildingAutomation.scss";
const BuildingAutomation = () => {
    const {loading, buildingAutomation} = useFetchBuildingAutomation();
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Building Automation" desc="Leverages advanced technology to optimize building operations, enhance energy efficiency, and improve occupant comfort and productivity." img="/images/19.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="building_Automation_wrapper">
            {buildingAutomation.map((items) => {
              const {id,image, title, para1,para2,prandImage} = items;
              return (
                <div   className="build_content" key={id}>
                    <div className="content_text" data-aos="fade-down" >
                        <h2>{title}</h2>
                        <p title={para1}>{para1}</p>
                        <p title={para2}>{para2}</p>
                        <div className="brand_images">
                            {prandImage.map((img, index) => {
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
            })}
          </section>
    </>
  )
}

export default BuildingAutomation