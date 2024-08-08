import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import NavBar from './NavBar'; 

function Header() {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Navigate to="/about-me" />} />
                <Route path="/aboutme" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </div>
    );
}

export default Header;

