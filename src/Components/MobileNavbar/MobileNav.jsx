import "./mobileNav.css";

/* Icons added */
import HomeIcon from "../../FlatIcons/homeIcon.png";
import AboutMeIcon from "../../FlatIcons/aboutMeIcon.png";
import WorkExperience  from "../../FlatIcons/workingIcon.png";
import SkillsIcon from "../../FlatIcons/skillsIcon.png";
import projectIcon from "../../FlatIcons/projectIcon.png";
import { NavLink } from "react-router-dom";

function mobileNav() {
  return (
    <div className='mobileNav sidebarmobilenav'>
        <div className="sidebar-container">
            {/* <HomeIcon /> */}
            <NavLink to="/work-experince">
                <img src={WorkExperience}  alt="sdf" className="menuIcons"/>
            </NavLink>
            
            <NavLink to="/skills">
                <img src={SkillsIcon}  alt="sdf" className="menuIcons"/>
            </NavLink>
            <NavLink to="/">
                <img src={HomeIcon}  alt="sdf" className="menuIcons"/>
            </NavLink>
            <NavLink to="/about">
                <img src={AboutMeIcon}  alt="sdf" className="menuIcons"/>
            </NavLink>
            <NavLink to="/projects">
                <img src={projectIcon}  alt="sdf" className="menuIcons"/>
            </NavLink>
        </div>
    </div>
  )
}
export default mobileNav;
