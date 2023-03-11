import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {GiBrain} from 'react-icons/gi'
import {VscFolderLibrary} from'react-icons/vsc';

function About() {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>ECE at TIET Patiala, expected 2024</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>

            <article className='about__card'>
              <GiBrain className='about__icon'/>
              <h5>Coding problems solved</h5>
              <small>1100+ across various platforms</small>
            </article>
          </div>
          
          <p>
            Hey there! I am Chinmay Agarwal, Ex Teaching Assistant at Coding Ninjas, a 3rd year
            ECE student at Thapar Institute of Engineering and Technology, Patiala, I like coding and problem-solving, 
            I have a contest rating of 1600+ at Leetcode. I am comfortable with Full-Stack web development and have worked with libraries and frameworks like ReactJS and NodeJS. 
            I would be very interested in applying for any full-time positions for SDE-1 roles soon, if you know of any opportunities like this, I’d love to chat. 
            I’ve uploaded my resume above for your consideration, and you can reach me directly via LinkedIn or Email.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About