import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Vision.scss";

const Vision = () => {
  const ref = useRef();
  const { hash } = useLocation();
  useEffect(() => {
    const id = hash.replace("#", "");
    const element = ref.current;

    if (!element) return;

    if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
  }, [hash]);
  return (
    <section id="vission" className='vision_wrapper' ref={ref}>
        <div className="container">
            <div className="vision_content" data-aos="fade-left">
                <h2>Vision</h2>
                <p>Our vision at Sara Engineering and Energy Systems is to spearhead to  shape a world where sustainable building and industrial excellence are the standard.</p>
                <p>We envision a future where smart automation and energy-efficient solutions are universal, accessible, and seamlessly integrated into every building and industrial process. By pioneering innovative technologies and championing environmental stewardship, we aim to catalyze a paradigm shift toward eco-conscious infrastructure, driving a global movement towards a greener, more sustainable tomorrow.</p>
                <div className="vision_icons">
                    <img src="/images/aa1.png" alt="icon" />
                    <img src="/images/aa2.png" alt="icon" />
                    <img src="/images/aa3.png" alt="icon" />
                    <img src="/images/aa4.png" alt="icon" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Vision