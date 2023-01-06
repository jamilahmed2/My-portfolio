import React from 'react'
import { BsLinkedin,BsGithub, } from "react-icons/bs"
import { SiFiverr } from "react-icons/si"
export const HeaderSocials = () => {
  return (
    <div className=' header__socials'>
        <a href="https://linkedin.com" rel="noreferrer" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" rel="noreferrer" target='_blank'><BsGithub/></a>
        <a href="https://fiverr.com"rel="noreferrer"  target='_blank'><SiFiverr/></a>
    </div>
  )
}
