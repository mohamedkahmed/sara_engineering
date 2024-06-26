import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Mission.scss";

const Mission = () => {
      const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
  
      if (!element) return;
  
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash]);
  return (
    <section id="mission" className='mission_wrapper' ref={ref}>
        <div className="container">
            <div className="mission_content" data-aos="fade-right">
                <h2>Mission</h2>
                <p>Our mission at Sara Engineering and Energy Systems is to lead the transformation towards sustainable building and industrial practices.</p>
                <p>We aim to make advanced automation and energy-efficient solutions universally accessible and seamlessly integrated into everyday operations. By developing innovative technologies and upholding stringent environmental standards, we strive to foster a shift towards eco-conscious infrastructure and operations, propelling a worldwide movement towards a greener, more sustainable future.</p>
            </div>
        </div>
    </section>
  )
}

export default Mission