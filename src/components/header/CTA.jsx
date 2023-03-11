import React from 'react'
// import CV from '../../assets/Resume for SDE-1 roles.pdf'
import CV from '../../assets/Chinmay_Resume.pdf'
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download="Chinmay_Resume" className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact me</a> 
    </div>
  )
}

export default CTA