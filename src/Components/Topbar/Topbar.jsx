import React from 'react';
import "./topbar.css";
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
const Topbar = () => {
  return (
    <>
        <div className='topbar'>
            <div className='wrapper'>
                <div className='logo'>
                    <h1 className='logo-title'> vijay kumar </h1>
                </div>  
                <input type="checkbox"  name="" id="hamburgerMenu" />
                <label htmlFor="hamburgerMenu">
                <div className="hamburgerMenu">
                    <GiHamburgerMenu className='hamburgerMenuIcon'/>
                </div>
                </label>

                <div className="mobileViewSlider">
                </div>    

                <div className='nav'>
                    <a href='https://www.instagram.com/mr.vijay.kumar308/' target={"_blank"} rel="noreferrer">
                        <AiFillGithub />
                    </a>
                  
                    <a href='https://www.instagram.com/mr.vijay.kumar308/' target={"_blank"} rel="noreferrer">
                        <AiFillLinkedin />
                    </a>

                    <a href='https://www.instagram.com/mr.vijay.kumar308/' target={"_blank"} rel="noreferrer">
                        <AiFillInstagram />
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Topbar;
