import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className='topnav'>
            <div className='topnav-left'>
                <NavLink
                    className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
                    to="/AboutMe"
                >
                    ABOUT ME
                </NavLink>
                <div className="navbar__name">
                    MARIAM KATILE
                </div>
            </div>
            <div className='topnav-right'>
                <NavLink
                    className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
                    to="/Portfolio"
                >
                    PORTFOLIO
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
                    to="/Contact"
                >
                    CONTACT
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "navbar__link navbar__link--active" : "navbar__link"}
                    to="/Resume"
                >
                    RESUME
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
