import React, { useState } from 'react';
import "./topbar.css";
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi";
const Topbar = () => {
    let [isHamburger, setIsHamburger] = useState(true);
    function HandlerClick(){
        //console.log(isHamburger);
        setIsHamburger(!isHamburger);
    }
  return (
    <>
        <div className='topbar'>
            <div className='wrapper'>
                <div className='logo'>
                    <h1 className='logo-title'> vijay kumar </h1>
                </div>  
                <label htmlFor="hamburgerMenu">
                <input type="checkbox" hidden name="" id="hamburgerMenu" onClick={HandlerClick} />
                    <div className="hamburgerMenu"> 
                       { 
                         isHamburger ? <GiHamburgerMenu className='hamburgerMenuIcon'/> : <i className="fa-solid fa-xmark hamburgerMenuIcon closedIcon"></i>
                       } 
                    </div>

                    <div className="mobileViewSlider">
                        <ul>
                            <div className="iconAndLabel">
                                <i className="fa-brands fa-github"></i>
                                <li className='github'><a href="https://github.com/Vijaykumar308/">GitHub</a></li>
                            </div>

                            <div className='iconAndLabel'>
                                <i className="fa-brands fa-linkedin"></i>
                                <li className='linkedIn'><a href="https://www.linkedin.com/in/vijay-kumar-679ab2221/">LinkedIn</a></li>
                            </div>
                            <div className='iconAndLabel'>
                                <i className="fa-brands fa-instagram"></i>
                                <li className='instagram'><a href="https://instagram.com/mr.vijay.kumar308">Instagram</a></li>
                            </div>
                            <a href="">
                                <button className='btn btn-success-100'>Download CV</button>
                            </a>
                        </ul>
                    </div>    
                </label>


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
