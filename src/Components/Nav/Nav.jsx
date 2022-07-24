import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineWork } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { useState } from "react";

export default function Nav() {
  const [active, setactive] = useState(0);

  return (
    <nav>
      <a
        href="#Home"
        onClick={() => setactive(0)}
        className={active === 0 ? "active" : ""}
      >
        <AiFillHome />
      </a>
      <a
        href="#About"
        onClick={() => setactive(1)}
        className={active === 1 ? "active" : ""}
      >
        <BsFillPersonFill />
      </a>
      <a
        href="#Experiance"
        onClick={() => setactive(2)}
        className={active === 2 ? "active" : ""}
      >
        <MdOutlineWork />
      </a>
      <a
        href="#service"
        onClick={() => setactive(3)}
        className={active === 3 ? "active" : ""}
      >
        <MdHomeRepairService />
      </a>
      <a
        href="#contact"
        onClick={() => setactive(4)}
        className={active === 4 ? "active" : ""}
      >
        <BsFillTelephonePlusFill />
      </a>
    </nav>
  );
}
