import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {useFetchOurTeams} from "../../components/featchData/FeatchData";
import "./TeamSection.scss"
import {Loading} from "../../components";
const TeamSection = () => {
    const {load, ourteam} = useFetchOurTeams();
    const ref = useRef();
    const { hash } = useLocation();
    useEffect(() => {
      const id = hash.replace("#", "");
      const element = ref.current;
  
      if (!element) return;
  
      if (id == element.id) element.scrollIntoView({ behavior: "smooth" });
    }, [hash, load]);
    if (load) {
        return (
            <Loading/>
        )
      }
  return (
    <section id='our-team' className="great-team-section" ref={ref}>
    <div className="container">
    <div className="great-team-title-top">
    <h2 data-aos="fade-left">The Team</h2>
      <p data-aos="fade-right">Our team consists of dedicated experts committed to delivering innovative and sustainable solutions.</p>
  </div>
  <div className="our-team">
    {ourteam.map((team) => {
      const {name, job, id,image, url} = team;
      return (
        <Link to={url} target='_blanck' data-aos="zoom-out-down" className="feat" key={id}>
          <img src={image} alt={name} />
          <h5>{name}</h5>
          <p>{job}</p>
        </Link>
      )
    })}
  </div>
    </div>
  </section>
  )
}

export default TeamSection