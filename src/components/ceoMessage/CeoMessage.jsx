import { MdKeyboardArrowDown } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./CeoMessage.scss";
const CeoMessage = () => {
  const ref = useRef();
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace("#", "");
    const element = ref.current;

    if (!element) return;

    if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
  return (
    <section id="ceoSection" className='CeoMessage_wrapper' ref={ref}>
        <div className="CeoMessage_content" data-aos="fade-right">
            <h2>CEO Message</h2>
            <p style={{wordSpacing: "0"}}>Welcome to Sara Engineering and Energy Systems,</p>
            <p>Our dedication to quality and innovation in the areas of energy management and monitoring, building and industrial automation, and both, drives us at Sara Engineering and Energy. Our goal has been to improve our clients' surroundings’ quality and sustainability since our founding in 2011 to enrich lives.</p>
            <p>Every project we work on is supported by our commitment to environmental efficiency and sustainability. Our solutions surpass the changing demands of our dynamic markets in the Middle East and the United Arab Emirates by incorporating the newest technologies and best practices. We are a dependable partner in our industry because our goods and services are thoroughly crafted for dependability, security, and long-term sustainability.</p>

            <p>We think that smart, connected solutions that optimise energy use, improve safety, and increase operational efficiencies are the key to the future of building and industrial operations. With the skills and resources to offer these cutting-edge solutions to our esteemed clients, our knowledgeable team is leading this revolution..</p>

            <p>As we look forward, we remain committed to pushing the boundaries of what is possible, driving innovation, and leading the way in our industry. We are not just engineering systems; we are engineering a better future.</p>

            <p>Thank you for choosing Sara Engineering and Energy Systems. We look forward to continuing to serve you with integrity, innovation, and excellence.</p>
            <p>Sincerely,</p>
        </div>
        <div className="CeoMessage_img" data-aos="fade-left">
            <img src="/images/ceo.png" alt="ceo img" />
            <div className="about_img_founder">
                <p><b>Ghassan Abdelrahman</b>, CEO</p>
                <MdKeyboardArrowDown/>
            </div>
        </div>
    </section>
  )
}

export default CeoMessage