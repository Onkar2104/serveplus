import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar-box sticky-top">
            <div className="nav-container container">
                <div className="logo">
                    <img src="/assests/images/icno-serve.png" alt="" />
                    <h1>ServePlus</h1>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/donate">Donate Food</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="any">
                    <div className="hamburger" onClick={toggleMenu}>
                        ☰
                    </div>
                    <div className="login-btn">
                        <Link to="/login" className="login-link">Login / Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
