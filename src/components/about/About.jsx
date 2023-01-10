import React from 'react'
import "./about.css"
import ME from "../../assets/me-about.jpg"
// import {FaAward} from "react-icons/fa"
// import {FiUsers} from "react-icons/fi"
// import {VscFolderLibrary} from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

      <div className="about__content">
        {/* <div className="about__cards">
          <article className='about__card'>
            <FaAward className="about__icon"/>
            <h5>Experience</h5>
            <small>1+ year working</small>
          </article>
          <article className='about__card'>
            <FiUsers className="about__icon"/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className="about__icon"/>
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
        </div> */}

        <p>
        I am an 19 years old web developer (MERN) and currently studying in college. 
        I am front-end web developer with 1 year of experience.
        </p>
        <div className='qualification'>
        <h3 >Qualification</h3>
        <small>I have passed matriculation examination from F.G. Public School Karachi Cantt with 80% (A Grade).</small><br />
        <small>Studying in F.G Intermediate College </small>
        </div>


        <a href="#contact" className='btn btn-primary' >Let's Talk</a>
      </div>

      </div>
    </section>
  )
}

export default About