import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Programming</h2>

      <div className="container services__container">
         <article className="service">
           <div className="service__head">
            <h3>Web Development</h3>
           </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient in Front-End Development</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient with using ReactJS, JavaScript, HTML, CSS</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient in Back-End Development</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient with using MongoDB, ExpressJS, NodeJS</p>
              </li>
            </ul>
         </article>
         
         <article className="service">
           <div className="service__head">
            <h3>DSA and Problem Solving</h3>
           </div>
            <ul className="service__list">
              <li>
                <BiCheck className="service__list-icon"/>
                <p>Proficient in DSA and Problem Solving</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Solved 1100+ problems across various platforms</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Contest rating of 1600+ on leetcode</p>
              </li>

              <li>
                <BiCheck className="service__list-icon"/>
                <p>Solved around 650+ questions on leetcode</p>
              </li>
            </ul>
         </article>
      </div>
    </section>
  )
}

export default Services