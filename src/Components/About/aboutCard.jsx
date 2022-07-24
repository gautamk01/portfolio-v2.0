import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { AiFillProject } from "react-icons/ai";
export default function AboutCard() {
  return (
    <div className="about__card">
      <article>
        <FaAward />
        <h4>Experiance</h4>
        <h5>3+ year of work Experiance</h5>
      </article>
      <article>
        <FiUsers />
        <h4>Clients</h4>
        <h5>200+ World wide</h5>
      </article>
      <article>
        <AiFillProject />
        <h4>Project</h4>
        <h5>80+ Projects were completed</h5>
      </article>
    </div>
  );
}
