import React, { useState } from 'react';
import "./sidebar.css";
import {AiFillHome} from "react-icons/ai";
import {FcExpand} from "react-icons/fc";
import {FaGraduationCap, FaBriefcase} from 'react-icons/fa';
import {SiPolymerproject, SiAboutdotme} from 'react-icons/si';

import { NavLink } from "react-router-dom";

const Sidebar = () => {
    let [isCollapsed, setIsCollapsed] = useState("false");

    function handlerToggler(){
        setIsCollapsed(!isCollapsed);
    }
    
    return (
        <div className={`sidebar ${!isCollapsed ? "collapsed" : ""}`}>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <NavLink to="/">
                            <li className="sidebarListItem">
                                <AiFillHome className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>Home</span>
                            </li>
                        </NavLink>

                        <NavLink to="/about">
                            <li className="sidebarListItem">
                                <SiAboutdotme className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>About Me</span>
                            </li>
                        </NavLink>

                        <NavLink to="work-experince">
                            <li className="sidebarListItem">
                                <FaBriefcase className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>Work Experience</span>
                            </li>
                        </NavLink>

                        <NavLink to="skills">
                            <li className="sidebarListItem">
                                <FaGraduationCap className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>Skills</span>
                            </li>
                        </NavLink>

                         <NavLink to="projects">
                         <li className="sidebarListItem">
                                <SiPolymerproject className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>Projects</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <div className='expandCollapse'>
                <div className="expandCollapseWrapper">
                    <button 
                        className={`expandCollapseIcon ${isCollapsed ? "leftArrow": "rightArrow"}`}
                        onClick={handlerToggler}
                    >
                        <FcExpand/>
                    </button>
                </div> 
            </div>
        </div>
    )
}
export default Sidebar;
