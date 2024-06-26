import  { useEffect, useRef, useState } from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const btn = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
const pathName = location.pathname;
  useEffect(() => {
    // scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // close menu in mobile devices
    const menuBtn = btn.current;
    
    if(menuBtn){
      if(menuBtn.getAttribute('aria-expanded') == 'true'){
        menuBtn?.click();
      }
    }


    // change header padding 
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathName]);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); 
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <div>
      <nav className={scrollPosition >= 1 ? "navbar navbar-expand-lg navbar-light show_background" : pathName === "/contact" ? "navbar contact_navbar navbar-expand-lg navbar-light" : pathName === "/privacy" ? "navbar privacy_navbar navbar-expand-lg navbar-light" : "navbar navbar-expand-lg navbar-light"}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.svg" alt="logo" />
          </Link>
          <button
          ref={btn}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home 
                </NavLink>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Who We Are
                </Link>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <NavLink onClick={closeDropdown} className="dropdown-item" to="/about">
                  About US
                  </NavLink>
                  <a onClick={closeDropdown} className="dropdown-item" href="/about#ceoSection">
                  CEO Message
                  </a>
                  <a onClick={closeDropdown} className="dropdown-item" href="/about#vission">
                  Vision
                  </a>
                  <a onClick={closeDropdown} className="dropdown-item" href="/about#mission">
                  Mission
                  </a>
                  <a onClick={closeDropdown} className="dropdown-item" href="/about#our-team">
                  Team
                  </a>
                </div>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                <Link
                  className="nav-link dropdown-toggle" 
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions & Sectors
                </Link>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <NavLink onClick={closeDropdown} className="dropdown-item" to="/buildingAutomation">
                  Building Automation
                  </NavLink>
                  <NavLink onClick={closeDropdown} className="dropdown-item" to="/industrialAutomation">
                  Industrial Automation
                  </NavLink>
                  <NavLink onClick={closeDropdown} className="dropdown-item" to="/energyMonitoring">
                  Energy & Monitoring
                  </NavLink>
                  <NavLink onClick={closeDropdown} className="dropdown-item" to="/wiringDevices">
                  Wiring Devices & UPS
                  </NavLink>
                  <NavLink onClick={closeDropdown} className="dropdown-item" to="/electricVehiclesChargers">
                  Electric Vehicles Chargers
                  </NavLink>
                </div>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/ourCompanies"
                  onClick={closeDropdown}
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                Our Companies
                </NavLink>
                <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                  <a onClick={closeDropdown} className="dropdown-item" href="/ourCompanies#sara-Electrical">
                  Sara Electrical Supplies

                  </a>
                  <a onClick={closeDropdown} className="dropdown-item" href="/ourCompanies#sara-digital">
                  Sara Digital & Solution
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <NavLink onClick={closeDropdown} className="nav-link" to="/projects">
                  projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={closeDropdown} className="nav-link" to="/news">
                  news
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink onClick={closeDropdown} className="nav-link" to="/contact">
                  contact us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
