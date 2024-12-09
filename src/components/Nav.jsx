import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
    <nav>
        <div className="nav">
            <ul className="name">
                <Link to={"/"}>Glory Menga</Link>
            </ul>
            <ul className="menus">
                <Link to={"/"}>Home</Link>
                <Link to={"/works"}>Works</Link>
                <ul className="contact">
                <a href="mailto:mengaglory@gmail.com">Contact me!</a>
                </ul>
            </ul>
        </div>
        <div className="nav-container">
            <Link to={"/"} className="name">Glory Menga</Link>
            <div 
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            >
            <span></span>
            <span></span>
            <span></span>
            </div>

            <div className={`menus ${isMenuOpen ? 'active' : ''}`}>
            <Link to={"/"} onClick={closeMenu}>Home</Link>
            <Link to={"/works"} onClick={closeMenu}>Works</Link>
            <div className="contact">
                <a href="mailto:mengaglory@gmail.com" onClick={closeMenu}>Contact me!</a>
            </div>
            </div>
        </div>
    </nav>
  );
}

export default Nav;