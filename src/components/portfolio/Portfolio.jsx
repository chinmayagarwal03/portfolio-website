import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/jobify.png'
import IMG2 from '../../assets/real_estate.png'
import IMG3 from '../../assets/covid-19.png'
import IMG4 from '../../assets/number_plate.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Jobify',
    github: "https://github.com/chinmayagarwal03/Mern_jobify.git",
    demo: "https://jobify-v2mq.onrender.com/landing"
  },
  {
    id: 2,
    image: IMG2,
    title: 'Real Estate App',
    github: "https://github.com/chinmayagarwal03/lets-find-it.git",
    demo: null
  },
  {
    id: 3,
    image: IMG3,
    title: 'Covid-19 Tracker',
    github: "https://github.com/chinmayagarwal03/covid-19tracker.git",
    demo: "https://chinmayagarwal03.github.io/covid-19tracker/#"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Number Plate Recognition',
    github: "https://github.com/chinmayagarwal03/Vehicle-Number-Plate-Detection.git",
    demo: null
  }
]

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id , image , title , github , demo})=>{
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">GitHub</a>
                {demo!==null&&<a href={demo} className="btn btn-primary" target="_blank">Live demo</a>}                                            
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