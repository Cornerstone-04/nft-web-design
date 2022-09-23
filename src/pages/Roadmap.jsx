import React from "react";
import Details from "../data/roadmap.jsx";
import '../styles/roadmap.css'

const Roadmap = () => {
  return (
    <section className="roadmap" id="roadmap">
      <h1 className="title">Roadmap</h1>
      <div className="map">
        {Details && Details.map((details)=>(
          <div className="box" key={details.id}>
            <p className="head">{details.title}</p>
            <p className="line"><hr /></p>
            <p className="desc">{details.desc}</p>
            <p className="sub">{details.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;
