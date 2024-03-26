import React, { useState } from 'react';
import './Navbar.css';

import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import images from '../../constants/images.js'
const Navbar = () => {
  const [menu , setMenu] = useState(false) ;
  const [i , setI] = useState(0)
  return (
  <div className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.gericht} alt="logo" />
    </div>
    <div className="app__navbar-menu">
      <ul className="app__navbar-menu_links flex__center">
        <li className="p__opensans"><a href="#">Home</a></li>
        <li className="p__opensans"><a href="#">Pages</a></li>
        <li className="p__opensans"><a href="#">Contact Us</a></li>
        <li className="p__opensans"><a href="#">Blog</a></li>
        <li className="p__opensans"><a href="#">Landing</a></li>
      </ul>
    </div>
    <div className="app__navbar-log ">
      <div className="app__navbar-log_login p__opensans">Log In</div>
      <div className='mysvg'>
        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="57" viewBox="0 0 2 57" fill="none">
          <path d="M1 0V57" stroke="url(#paint0_radial_0_363)"/>
          <defs>
            <radialGradient id="paint0_radial_0_363" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1.5 28.5) rotate(90) scale(28.5 0.5)">
              <stop offset="0.588542" stop-color="white"/>
              <stop offset="1" stop-color="white" stop-opacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="appnavbar-log_book p__opensans">BookTable</div>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu  color='#fff' fontSize={'27px'} 
        onClick={()=>{
          setMenu(true) 
          setI(1)
          console.log(i)
          }}>
      </GiHamburgerMenu>
      {
        menu &&  (
          <div className={"app__navbar-smallscreen_overlay flex__center slide-bottom"}>
            <MdOutlineRestaurantMenu color='#fff' fontSize={27} className="overlay__close" onClick={() => {setMenu(false) ; console.log(i)} }  />
            <div className="app__navbar-smallscreen-menu">
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#">Home</a></li>
                <li className="p__opensans"><a href="#">Pages</a></li>
                <li className="p__opensans"><a href="#">Contact Us</a></li>
                <li className="p__opensans"><a href="#">Blog</a></li>
                <li className="p__opensans"><a href="#">Landing</a></li>
              </ul>
            </div>
          </div>
        )
      }
      {
        !menu && i === 1 && (
          <div className={"app__navbar-smallscreen_overlay flex__center slide-bottom-up"}>
            <MdOutlineRestaurantMenu color='#fff' fontSize={27} className="overlay__close" onClick={() => {setMenu(false) ; setI(0)} }  />
            <div className="app__navbar-smallscreen-menu">
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#">Home</a></li>
                <li className="p__opensans"><a href="#">Pages</a></li>
                <li className="p__opensans"><a href="#">Contact Us</a></li>
                <li className="p__opensans"><a href="#">Blog</a></li>
                <li className="p__opensans"><a href="#">Landing</a></li>
              </ul>
            </div>
          </div>
        )
      }
    </div>
  </div>
);
}
  

export default Navbar;
