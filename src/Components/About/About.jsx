import React from "react";
import "./about.css";
import profile from "../../assets/me-about.jpg";
import AboutCard from "./aboutCard";

export const AboutMe = () => {
  return (
    <section id="About">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me__image">
          <img src={profile} alt="profileImage" />
        </div>

        <div className="about___data__container">
          <AboutCard />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <a href="#gdasg" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};
