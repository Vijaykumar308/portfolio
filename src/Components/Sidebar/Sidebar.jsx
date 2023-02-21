import React from 'react';
import "./sidebar.css";
import { NavLink } from "react-router-dom";

import {AiFillHome} from "react-icons/ai";

import {DiGoogleAnalytics} from "react-icons/di"

const Sidebar = () => {
    return (
        <div className="sidebar-Container">
            <div className="sidebarWrapper-df">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <NavLink to="/">
                            <li className="sidebarListItem">
                                <AiFillHome className="sidebar-icons" />
                                Home
                            </li>
                        </NavLink>

                        <NavLink to="/about">
                            <li className="sidebarListItem">
                                <DiGoogleAnalytics className="sidebar-icons" />
                                About Me
                            </li>
                        </NavLink>

                        <NavLink to="work-experince">
                            <li className="sidebarListItem">
                                <DiGoogleAnalytics className="sidebar-icons" />
                                Work Experince
                            </li>
                        </NavLink>

                        <NavLink to="skills">
                            <li className="sidebarListItem">
                                <AiFillHome className="sidebar-icons" />
                                Skills
                            </li>
                        </NavLink>

                         <NavLink to="projects">
                         <li className="sidebarListItem">
                                <AiFillHome className="sidebar-icons" />
                                Projects
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;
