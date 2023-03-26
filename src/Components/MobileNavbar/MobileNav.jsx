import "./mobileNav.css";
import {AiFillHome} from "react-icons/ai";
import {FaGraduationCap, FaBriefcase} from 'react-icons/fa';
import {SiPolymerproject, SiAboutdotme} from 'react-icons/si';
import {FaUserAlt} from 'react-icons/fa';

import { NavLink } from "react-router-dom";

function mobileNav() {
  return (
    <div className='mobileNav sidebarmobilenav'>
        <div className="sidebar-container">
            {/* <HomeIcon /> */}
            <NavLink to="/work-experince">
                <FaBriefcase className="menuIcons"/>
            </NavLink>
            
            <NavLink to="/skills">
                <FaGraduationCap className="menuIcons"/>
            </NavLink>
            <NavLink to="/portfolio">
                {/* <img src={HomeIcon}  alt="sdf" className="menuIcons"/> */}
                <AiFillHome  className="menuIcons"/>
            </NavLink>
            <NavLink to="/about">
                <FaUserAlt className="menuIcons aboutMeIcon"/>
                {/* <img src={AboutMeIcon}  alt="sdf" className="menuIcons"/> */}

            </NavLink>
            <NavLink to="/projects">
                <SiPolymerproject className="menuIcons"/>
                {/* <img src={projectIcon}  alt="sdf" className="menuIcons"/> */}
            </NavLink>
        </div>
    </div>
  )
}
export default mobileNav;
