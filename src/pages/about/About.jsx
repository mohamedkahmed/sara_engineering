
import {BreadCrumb, ArrowDownIcon,Features , Mission, SingleAboutUs, CeoMessage, Vision, TeamSection} from '../../components'
import { MdKeyboardArrowUp } from "react-icons/md";
import "./About.scss";
const About = () => {
  return (
    <>
    <BreadCrumb title="Who We Are" desc="Leaders in innovative and sustainable building automation solutions across the UAE and the Middle East, we empower clients with efficient, remote management of facilities to enhance productivity and energy savings. Join us in transforming spaces into smarter, greener environments." img="/images/10.png"/>
    {/* arrow down icon */}
    <ArrowDownIcon alignItems="right" />
     {/* about us */}
     <SingleAboutUs/>
     {/* ceo message */}
     <CeoMessage/>
     {/* Vision */}
     <Vision/>
     {/* arrow down icon */}
     <ArrowDownIcon alignItems="center" />
     {/* mission */}
     <Mission/>
     {/* arrow down icon */}
     <ArrowDownIcon alignItems="center" />
     {/* Features */}
     <Features/>
                 {/* meet team section */}
                 <section className='meet-team-section'>
              <div className="container">
              <div className="meet-team-title-top">
              <h2 data-aos="fade-left">Meet Team</h2>
                <p data-aos="fade-right">Our team at Sara Engineering and Energy Systems is comprised of highly skilled professionals dedicated to delivering innovative and sustainable solutions with expertise and precision.</p>
            </div>
              </div>
            <div className="meet-team-image">
              <img src="/images/18.png" alt="team pic" />
              <div className="upper_icons">
              <MdKeyboardArrowUp/>
              <MdKeyboardArrowUp/>
              </div>
              <div className="do_icons">
              <MdKeyboardArrowUp/>
              <MdKeyboardArrowUp/>
              </div>
            </div>
            </section>

            {/* about text */}
            <section className="hypper_text">
               <div className="container">
                  <p>At Sara Engineering and Energy Systems, our teams thrive on collaboration and synergy, pooling their diverse expertise to craft solutions that are not only innovative but also seamlessly integrated. This collaborative environment fosters a wealth of shared knowledge and experiences, empowering each team member to excel and innovate. Together, we leverage our collective skills to overcome challenges and achieve excellence in every project, ensuring that our solutions set industry standards for quality and sustainability.</p>
               </div>
            </section>
            {/* team section */}
            <TeamSection/>
    </>
  )
}

export default About