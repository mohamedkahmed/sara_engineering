import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="container">
        <div className="footer_content">
          <div className="logo">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="content_text">
            <div className="top_text">
              <p>
              Sara Engineering & Energy Systems Specializes in Building Automation, Industrial Automation, Energy & Monitoring,  and Wiring Devices, leading the way in innovative and sustainable solutions across  the UAE and the Middle East.
              </p>
            </div>
            <div className="footer_links">
              <div className="link">
                <h5>Home</h5>
                <ul>
                  <li>
                    <Link to='/'>Why Choose Us</Link>
                  </li>
                  <li>
                    <Link to='/'>Solutions & Sectors</Link>
                  </li>
                  <li>
                    <Link to='/'>History & Excellence</Link>
                  </li>
                  <li>
                    <Link to='/'>Our Emphasis!</Link>
                  </li>
                  <li>
                    <Link to='/'>Latest News</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Who We Are</h5>
                <ul>
                  <li>
                    <Link to='/about'>About US</Link>
                  </li>
                  <li>
                    <Link to='/about'>CEO Message</Link>
                  </li>
                  <li>
                    <Link to='/about'>Vision</Link>
                  </li>
                  <li>
                    <Link to='/about'>Mission</Link>
                  </li>
                  <li>
                    <Link to='/about'>Team</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Solutions & Sectors</h5>
                <ul>
                  <li>
                    <Link to='/buildingAutomation'>Building Automation</Link>
                  </li>
                  <li>
                    <Link to="/industrialAutomation"> Industrial Automation</Link>
                  </li>
                  <li>
                    <Link to="/energyMonitoring">Energy & Monitoring</Link>
                  </li>
                  <li>
                    <Link to="/wiringDevices">Wiring Devices & UPS</Link>
                  </li>
                  <li>
                    <Link to="/electricVehiclesChargers">Electric Vehicles Chargers</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Our Companies</h5>
                <ul>
                  <li>
                    <Link to="/ourCompanies">Sara Electrical Supplies</Link>
                  </li>
                  <li>
                    <Link to="/ourCompanies">Sara Digital & Solution</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Projects</h5>
                <ul>
                  <li>
                    <Link to="/projects">Building Automation</Link>
                  </li>
                  <li>
                    <Link to="/projects">Industrial Automation</Link>
                  </li>
                  <li>
                    <Link to="/projects">Energy & Monitoring</Link>
                  </li>
                  <li>
                    <Link to="/projects">Wiring Devices</Link>
                  </li>
                  <li>
                    <Link to="/projects">EV Chargers</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>News</h5>
                <ul>
                  <li>
                    <Link to="/news">all news</Link>
                  </li>
                  <li>
                  <Link to="/news">lates news</Link>
                  </li>
                </ul>
              </div>
              <div className="link">
                <h5>Contact Us</h5>
                <ul>
                  <li>
                    <Link to="/contact">contact form</Link>
                  </li>
                  <li>
                    <Link to="/privacy">privacy policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="down_reserves">
              <div className="right">
                <p>All rights reserved Sara Electrical &copy; 2024 
                </p>
              </div>
              <div className="social_media">
          <Link target="_blanck" to='https://www.facebook.com/profile.php?id=61558036290195'><FaFacebookF /></Link>
          <Link target="_blanck" to='https://www.linkedin.com/company/sara-engineering-and-energy-system/?viewAsMember=true'><FaLinkedinIn /></Link>
          <Link target="_blanck" to='https://www.instagram.com/saraenergysystem/'><FaInstagram  /></Link>
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
