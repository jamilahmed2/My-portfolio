import React from 'react'
import "./portfolio.css"
import gamedev from "../../assets/p2.png"
import moviesite from "../../assets/p3.png"
import newsapp from "../../assets/newsapp.png"
import portfolio from "../../assets/portfolio.png"
import textutils from "../../assets/textutils.png"
import notebooks from "../../assets/notebooks.png"

const Portfolio = () => {

  const data = [
    {
      id:1,
      image: notebooks,
      title: "Notebooks App  ",
      github:"https://github.com/jamilahmed2/Notebooks"
    },
    {
      id:2,
      image: newsapp,
      title: "News App   ",
      github:"https://github.com/jamilahmed2/Newsapp---React"
    },
    {
      id:3,
      image: gamedev,
      title: "Gamedevelopment Website ",
      github:"https://github.com/jamilahmed2/Game-development-website"
    },
    {
      id:4,
      image: moviesite,
      title: "Movies Webiste ",
      github:"https://github.com/jamilahmed2/Movie-website"
    },
    {
      id:5,
      image: textutils,
      title: "Text-Utils  App",
      github:"https://github.com/jamilahmed2/Text-utils"
    },
    {
      id:6,
      image: portfolio,
      title: "Portfolio  - React",
      github:"https://github.com/jamilahmed2/My-portfolio"
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
                  <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
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