import React, { useState } from 'react';
import "./sidebar.css";
import {AiFillHome} from "react-icons/ai";
import {FcExpand} from "react-icons/fc";
import {DiGoogleAnalytics} from "react-icons/di"

import { NavLink } from "react-router-dom";

const Sidebar = () => {
    let [isCollapsed, setIsCollapsed] = useState("false");

    function handlerToggler(){
        setIsCollapsed(!isCollapsed);
    }
    
    return (
        <div className="sidebar-Container">
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
                                <DiGoogleAnalytics className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>About Me</span>
                            </li>
                        </NavLink>

                        <NavLink to="work-experince">
                            <li className="sidebarListItem">
                                <DiGoogleAnalytics className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>Work Experince</span>
                            </li>
                        </NavLink>

                        <NavLink to="skills">
                            <li className="sidebarListItem">
                                <AiFillHome className="sidebar-icons" />
                                <span className={`sidebarListItemLabel ${!isCollapsed ? 'd-none' : ""}`}>Skills</span>
                            </li>
                        </NavLink>

                         <NavLink to="projects">
                         <li className="sidebarListItem">
                                <AiFillHome className="sidebar-icons" />
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
