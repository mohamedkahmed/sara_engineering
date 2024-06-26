import { MdKeyboardArrowDown } from "react-icons/md";
import "./ChooseUs.scss";

const ChooseUs = () => {
  return (
    <section className="choose_us">
        <div className="choose_parent">
          <div className="image" data-aos="fade-right">
            <img src="/images/chooseUs.png" alt="choose us" />
          </div>
          <div className="text" data-aos="fade-left">
            <div className="top-text">
              <h1>why choose us</h1>
              <p>
              At Sara Engineering & Energy, we dedicate ourselves to enriching life experiences by enhancing indoor environments and streamlining facility management with cutting-edge building and industrial automation solutions. Established in 2011, we have consistently led the way in adopting advanced technologies to tailor solutions that address the unique challenges and opportunities within the dynamic markets of the UAE and the broader Gulf region.
              </p>
            </div>
            <div className="feats">
              <div className="feat">
                <img src="/images/Group 48095870.png" alt="buildin" />
                <h5>Building Automation</h5>
              </div>
              <div className="feat">
                <img
                  src="/images/Group 48095835.png"
                  alt="Industrial"
                />
                <h5>Industrial Automation</h5>
              </div>
              <div className="feat">
                <img src="/images/Group 1392.png" alt="Energy" />
                <h5>Energy & Monitoring</h5>
              </div>
              <div className="feat">
                <img
                  src="/images/Group 48095869.png"
                  alt="Wiring"
                />
                <h5>Wiring Devices & UPS</h5>
              </div>
              <div className="feat">
                <img src="/images/Group 48095867.png" alt="EV Chargers" />
                <h5>EV Chargers</h5>
              </div>
              <MdKeyboardArrowDown className="arrow_down"/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default ChooseUs;
