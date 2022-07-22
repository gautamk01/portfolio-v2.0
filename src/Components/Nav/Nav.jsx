import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";

export default function Nav() {
  return (
    <nav>
      <a href="#Home">
        <AiFillHome />
      </a>
      <a href="#About">
        <BsFillPersonFill />
      </a>
      <a href="#Experiance">
        <MdOutlineWork />
      </a>
      <a href="#Service">
        <MdHomeRepairService />
      </a>
      <a href="#Contact">
        <BsFillTelephonePlusFill />
      </a>
    </nav>
  );
}
