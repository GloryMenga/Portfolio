import React from "react";
import { Link } from "react-router-dom";
function Nav(){
    return(
        <nav>
            <ul className="name">
                <Link to={"/"}>Glory Menga</Link>
            </ul>
            <ul className="menus">
                <Link to={"/"}>Home</Link>
                <Link to={"/works"}>Works</Link>
                <Link to={"/about"}>About</Link>
            </ul>
            <ul className="contact">
                <Link to={"/contact"}>Contact me!</Link>
            </ul>
        </nav>
    );
}

export default Nav;