import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>Web Development</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
           <h3>Frontend Development</h3>
           <div className="experience__content">
            <article className="experience__details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <h4>ReactJS</h4>
            </article>

            <article className="experience__details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <h4>JavaScript</h4>
            </article>

            <article className="experience__details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <h4>HTML</h4>
            </article>

            <article className="experience__details">
               <BsPatchCheckFill className="experience__details-icon"/>
               <h4>CSS</h4>
            </article>
           </div>
        </div> 
        
        
        <div className="experience__backend">
           <h3>Backend Development</h3>
           <div className="experience__content">
               <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <h4>MongoDB</h4>
               </article>

               <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <h4>ExpressJS</h4>
               </article>

               <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <h4>NodeJS</h4>
               </article>

               
           </div>
        </div>
      </div>
    </section>
  )
}

export default Experience