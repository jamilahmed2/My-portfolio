import React from "react";
import { CTA } from "../header/CTA";
import "./header.css";
import ME from "../../assets/me.png";
import { HeaderSocials } from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="content">
          <h5>Hello I'm</h5>
          <h1>Jamil Ahmed</h1>
          <h5 className="text-light">Web Developer</h5>
          <CTA />
        </div>
        <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>
       
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
