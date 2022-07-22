import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
export default function HeaderSocial() {
  return (
    <div className="header__social">
      <a href="#linkedin">
        <BsLinkedin />
      </a>
      <a href="#GITHUB">
        <BsGithub />
      </a>
      <a href="#dribble">
        <BsInstagram />
      </a>
    </div>
  );
}
