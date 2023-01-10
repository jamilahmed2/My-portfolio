import React from 'react'
import "./footer.css"
import { BsLinkedin,BsGithub, } from "react-icons/bs"
import { SiFiverr } from "react-icons/si"
import { AiOutlineVerticalAlignTop } from "react-icons/ai"

const Footer = () => {
   // eslint-disable-next-line
  return (
    <footer>
        <a href="" className="footer__logo">JAMIL AHMED</a>

        <ul className="parmalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className=' footer__socials'>
          <a href="https://www.linkedin.com/in/jamil-ahmed-54655220b/" rel="noreferrer" target='_blank'><BsLinkedin/></a>
         <a href="https://github.com/jamilahmed2" rel="noreferrer" target='_blank'><BsGithub/></a>
          <a href="https://fiverr.com/jamil_ahmed1"rel="noreferrer"  target='_blank'><SiFiverr/></a>
       </div>

    <div className="footer__copyright">
      <small>&copy;All right reserved | Jamil Ahmed </small><a href="#"><AiOutlineVerticalAlignTop /></a>
    </div>
    </footer>
  )
}

export default Footer