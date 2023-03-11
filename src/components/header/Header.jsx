import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chinmay Agarwal</h1>
        <h5 className="text-light">A Tech Enthusiast</h5>
        <CTA/>
        <HeaderSocials/>
        <a href="#contact" className="scroll__down">Scroll down</a>
      </div>
    </header>
  )
}

export default Header