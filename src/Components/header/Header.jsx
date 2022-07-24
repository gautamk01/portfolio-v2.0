import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
    <header id="Home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="Name__header">Gautam Krishna M</h1>
        <h5 className="text-light">Full stack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="Profile" />
        </div>
        <a href="#gfrag" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
