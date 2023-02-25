import React from 'react';
import "./topbar.css";
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai";
const Topbar = () => {
  return (
    <>
        <div className='topbar'>
            <div className='wrapper'>
                <div className='logo'>
                    <h1 className='logo-title'> &#10100; VJ &#125;</h1>
                </div>  
                {/* <div className='fgd'>
                    <a href='https://www.instagram.com/mr.vijay.kumar308/' target={"_blank"} rel="noreferrer">
                    <button className='button'>Download cv</button>
                    </a>
                </div>  */}

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
