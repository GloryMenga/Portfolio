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
                <ul className="contact">
                <a href="mailto:mengaglory@gmail.com">Contact me!</a>
                </ul>
            </ul>
        </nav>
    );
}

export default Nav;