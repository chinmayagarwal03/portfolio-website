import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'


function HeaderSocials() {
  return (
    <div className="header__socials">
       <a href="https://www.linkedin.com/in/chinmay-agarwal-b26b0b165/" target="_blank"><BsLinkedin/></a>
       <a href="https://github.com/chinmayagarwal03" target="_blank"><FaGithub/></a>  
       <a href="https://leetcode.com/rockzzz/" target="_blank"><SiLeetcode/></a>  
    </div>
  )
}

export default HeaderSocials