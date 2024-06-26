import React, { useState, useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useFetchContactUs } from "../../components/featchData/FeatchData";
import "./Contact.scss";
import { Link } from "react-router-dom";
import {Loading, ArrowDownIcon, BreadCrumb} from "../../components";

const Contact = () => {
  const { loading, contactLinks } = useFetchContactUs();
  const [customer_data, setcustomer_data] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const navigate = useNavigate();
  const isSubmitting = navigate.state === "submitting";

  if (loading) {
    return (
      <Loading/>
    );
  }

  const inputHandler = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setcustomer_data({ ...customer_data, [id]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_zfqztbt",
        "template_ieo8dyr",
        customer_data,
        "9kvLwSC9wW1DSu4wy"
      );
      setcustomer_data({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        inquiry_type: "",
        about_here: "",
        message: "",
      });

      toast.success("Thanks for Your Message");
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
    <BreadCrumb title="Contact Us" desc="Reach out to establish a partnership with the region's most client-centric power and energy distributor." img="/images/Rectangle 605.svg"/>
    <ArrowDownIcon alignItems="right" />
      <section className="contact-wrapper">
        <div className="container">
          {contactLinks.map((item) => {
            const { id, email, phone, location } = item;
            return (
              <div className="contact-us-links" key={id}>
                <a href={`mailto:${email}`}>
                  <div data-aos="fade-right" className="link-items-ch">
                    <CiMail />
                    <p>{email}</p>
                  </div>
                </a>
                <a href={`tel:${phone}`}>
                  <div data-aos="fade-down" className="link-items-ch">
                    <BsTelephone />
                    <p>{phone}</p>
                  </div>
                </a>
                <Link target="_blanck" to="https://maps.app.goo.gl/WxGskDcXDCuVp4YL8">
                  <div data-aos="fade-up" className="link-items-ch">
                    <CiLocationOn />
                    <p>{location}</p>
                  </div>
                </Link>
                <div data-aos="fade-right" className="link-items-ch">
                <Link target="_blanck" to='https://www.facebook.com/profile.php?id=61558036290195'><FaFacebookF /></Link>
          <Link target="_blanck" to='https://www.linkedin.com/company/sara-engineering-and-energy-system/?viewAsMember=true'><FaLinkedinIn /></Link>
          <Link target="_blanck" to='https://www.instagram.com/saraenergysystem/'><FaInstagram  /></Link>
                </div>
              </div>
            );
          })}
          <div className="contact-title-text py-3">
            <p>Get answers to all your questions you might have. you might have.</p>
            <p>
            We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.
            </p>
          </div>

          {/* form section */}
          <form className="form-section py-5" onSubmit={handleFormSubmit}>
            <div className="up main-parent">
              <div>
                <label>First Name</label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter First Name"
                  id="first_name"
                  onChange={inputHandler}
                  value={customer_data.first_name}
                  required
                  maxLength={20}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="name"
                  name="name"
                  onChange={inputHandler}
                  value={customer_data.last_name}
                  id="last_name"
                  placeholder="Enter Last Name"
                  required
                  maxLength={20}
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  onChange={inputHandler}
                  value={customer_data.email}
                  id="email"
                  required
                  maxLength={40}
                />
              </div>
            </div>
            <div className="center main-parent">
              <div>
                <label>phone</label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  onChange={inputHandler}
                  value={customer_data.phone}
                  id="phone"
                  required
                  maxLength={20}
                />
              </div>
              <div>
                <label>Inquiry Type</label>
                <select required onChange={inputHandler}
                  value={customer_data.inquiry_type}
                  id="inquiry_type">
                  <option value="" disabled selected hidden>
                    Select Inquiry Type
                  </option>
                  <option value="General">General</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Supplier">Supplier</option>
                  <option value="Customer">Customer</option>
                  <option value="Other (Specify)">Other (Specify)</option>
                </select>
              </div>
              <div>
                <label>How Did You Hear About Us?</label>
                <select required onChange={inputHandler}
                  value={customer_data.about_here}
                  id="about_here">
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friends and Relatives">Friends and Relatives</option>
                  <option value="Online Advertisement">Online Advertisement</option>
                  <option value="Street Advertisment">Street Advertisment</option>
                </select>
              </div>
            </div>
            <div className="message">
              <label>message</label>
              <textarea
                name="text"
                placeholder="Enter your Message here.."
                onChange={inputHandler}
                id="message"
                value={customer_data.message}
                maxLength={300}
              ></textarea>
            </div>
            <div className="send-dm">
              <div>
                <input
                  required
                  className="check-input"
                  type="checkbox"
                  name="chek"
                />
                I agree with <Link to="/privacy">Privacy Policy</Link>
              </div>
              <div>
              <button className="submit-input" type="Send Your Message" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Send Your Message"}
              </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
