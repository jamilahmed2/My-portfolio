import React from 'react'
import { BsLinkedin,BsGithub, } from "react-icons/bs"
import { SiFiverr } from "react-icons/si"
export const HeaderSocials = () => {
  return (
    <div className=' header__socials'>
        <a href="https://www.linkedin.com/in/jamil-ahmed-54655220b/" rel="noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/jamilahmed2" rel="noreferrer" target='_blank'><BsGithub/></a>
        <a href="https://fiverr.com/jamil_ahmed1"rel="noreferrer"  target='_blank'><SiFiverr/></a>
    </div>
  )
}
