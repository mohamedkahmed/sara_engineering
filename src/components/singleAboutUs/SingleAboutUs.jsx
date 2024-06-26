import { MdKeyboardArrowDown } from "react-icons/md";
import "./SingleAboutUs.scss";
const SingleAboutUs = () => {
  return (
    <section className='single_about_us'>
        <div className="about_img" data-aos="fade-right" >
            <img src="/images/aboutUs.png" alt="aboutUs img" />
        </div>
        <div className="about_content" data-aos="fade-left">
            <h2>About US</h2>
            <p>At Sara Engineering & Energy, we dedicate ourselves to enriching life experiences by enhancing indoor environments and streamlining sustainable building management with cutting-edge building and industrial automation solutions. Established in 2011, we have consistently led the way in adopting advanced technologies to tailor solutions that address the unique challenges and opportunities within the dynamic markets of the UAE and the broader Gulf region.</p>
            <p>Our unwavering commitment to innovation and quality drives us to deliver integrated solutions that are not only efficient but also environmentally sustainable and in line with national and regional goals for sustainability. By harnessing the power of centralization of assets performance and efficiency, we empower our clients with the ability to remotely monitor and manage their facility's assets and equipment thereby increasing flexibility, boosting productivity, and increasing energy saving and efficiency.</p>
            <p>Join us at Sara Engineering & Energy as we continue to push the boundaries of what is possible, creating smarter, greener, and more efficient spaces that transform the way we live and work across the UAE and the Middle East.</p>
        </div>
        <div className="about_down_icon">
            <MdKeyboardArrowDown className="top"/>
            <MdKeyboardArrowDown className="down"/>
        </div>
    </section>
  )
}

export default SingleAboutUs