import React from 'react'
import logo from "../Assets/logo/naruto.png"
import logo1 from "../Assets/logo/hunter.png"
import logo2 from "../Assets/logo/onepiece.png"
import logo3 from "../Assets/logo/dragon.png"
import logo4 from "../Assets/logo/myhero.png"
const Logo = () => {
  return (
    <div className='logo-container'>
      <div className='logo-wrapper'>
        <a href=""><img src={logo} alt="" /></a>
      </div>
      <div className='logo-wrapper'>
        <a href=""><img src={logo1} alt="" /></a>
      </div>
      <div className='logo-wrapper'>
        <a href=""><img src={logo2} alt="" /></a>
      </div>
      <div  className='logo-wrapper'>
        <a href=""><img src={logo3} alt="" /></a>
      </div>
      <div  className='logo-wrapper'>
        <a href=""><img src={logo4} alt="" /></a>
      </div>
    </div>
  )
}

export default Logo;
