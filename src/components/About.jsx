import React from "react";
import Glory from "../assets/glory.png";
function About(){
    return(
        <div className="about">
            <div className="text-about-me">
                <h1>Glory Menga</h1>
                <h2>Web developer</h2>
                <p>I specialize in web development, with expertise in HTML/CSS, and JavaScript. My skills in frameworks like Laravel, Vue.js, and React.js enable me to create dynamic, user-focused applications. I also work with databases such as PHPMyAdmin and MongoDB to ensure efficient data management.</p>
                <p>In addition to development, I have a creative edge, using Adobe Photoshop, XD, and Illustrator to design intuitive interfaces and engaging visuals. This combination of technical and design expertise allows me to deliver well-rounded digital solutions.</p>
            </div>
            <div className="me">
                <img src={Glory} alt="Glory Menga" />
            </div>
        </div>
    );
}

export default About;