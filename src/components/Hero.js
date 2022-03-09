import React from "react";
import group from "../images/group.png";

function Hero() {
  return (
    <section className="hero">
      <img src={group} className="hero--img" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
export default Hero;
