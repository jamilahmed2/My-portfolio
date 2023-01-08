import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>services</h2>

      <div className="container services__container">
        <articles className="service">
          <div className="service__head">
            <h3>Designing</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
              <p>Photoshop</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>Illustrator</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>Figma</p>
            </li>
          </ul>
        </articles>
        {/* ========= END of UI/UX ============ */}

        <articles className="service">
          <div className="service__head">
            <h3>Frontend</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
              <p>HTML</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>CSS</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>Javascript</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>Bootstrap</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>React</p>
            </li>
          </ul>
        </articles>

        <articles className="service">
          <div className="service__head">
            <h3>Backend</h3>
          </div>

          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
              <p>Node.js</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>Express.js</p>
            </li>
            <li><BiCheck className='service__list-icon'/>
             <p>MongoDB</p>
            </li>
          </ul>
        </articles>
      </div>
    </section>
  )
}

export default services