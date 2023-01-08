import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/p1.png"
import IMG2 from "../../assets/p2.png"
import IMG3 from "../../assets/p3.png"

const Portfolio = () => {

  const data = [
    {
      id:1,
      image: IMG1,
      title: "WorkSimplr - figma template",
      github:"https://github.com/jamilahmed2"
    },
    {
      id:2,
      image: IMG2,
      title: "Game Development - figma template",
      github:"https://github.com/jamilahmed2"
    },
    {
      id:3,
      image: IMG3,
      title: "Movies Webiste  - Design",
      github:"https://github.com/jamilahmed2"
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio___container">
        {
          data.map(({id,title,image,github})=>{
            return (
              <article key={id} className="portfolio__item">
                 <div className="portfolio__item-image">
                    <img src={ image } alt={title} />
                  </div>
                 <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                 </div>
               </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio