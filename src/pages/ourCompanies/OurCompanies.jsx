import { BreadCrumb, ArrowDownIcon, Loading } from "../../components";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import {useFetchOurCompanies} from "../../components/featchData/FeatchData";
import "./OurCompanies.scss";
import { Link } from "react-router-dom";
const OurCompanies = () => {
    const {loading, ourCompanies} = useFetchOurCompanies();
    const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
  
      if (!element) return;
  
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash, loading]);
    if (loading) {
        return (
            <Loading/>
        )
      }
  return (
    <>
          <BreadCrumb title="Our Companies" desc="Sara Group, comprising Sara Electrical Supplies, Sara Engineering & Energy  Systems, Sara Digital, and EV Gate, exemplifies excellence and innovation across  diverse sectors." img="/images/46.png"/>
          <ArrowDownIcon alignItems="right" />
          <section className="our_Companies_wrapper">
            {ourCompanies.map((items) => {
              const {id,image, para1,para2,brandImage, right, logoImg, arrowColor, idTitle} = items;
              return (
                <div id={idTitle}   className="our_Companies_content" key={id} ref={ref} >
                    <div className={right ? "content_text order-2" : "content_text"} data-aos={right ? "fade-left" : "fade-right"}>
                        <img src={logoImg} alt="logo" />
                        <p>{para1}</p>
                        <p>{para2}</p>
                        <div className="brand_images">
                            {brandImage.map((img, index) => {
                                return <img key={index} src={img} alt="brand" />
                            })}
                        </div>
                    </div>
                    <div className={right ? "image order-1" : "image" } data-aos={right ? "fade-right" : "fade-left"}>
                        <img src={image} alt="image" />
                        <div className="go_to_site" style={right ? {padding: "50px 0 20px 15%"} : {padding: "50px 15% 20px 0"}}>
                            <div className={right ? "arrow" : "arrow order-2" } style={{color: `${arrowColor}`}}>
                                <MdKeyboardArrowRight/>
                            </div>
                            <Link to="#" className={right ? "go" : "go order-1" }>
                                <p>Go To Website</p> 
                                <MdKeyboardArrowRight style={{color: `${arrowColor}`}}/>
                            </Link>
                        </div>
                    </div>
                </div>
              )
            })}
          </section>
    </>
  )
}

export default OurCompanies