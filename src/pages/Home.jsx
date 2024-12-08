import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Nav from "../components/Nav.jsx";
import Carousel from "../components/Carousel.jsx";
import About from "../components/About.jsx";

function Home(){

    const introRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            introRef.current,
            { opacity: 0, y: 50 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" } 
        );
    }, []);

    return(
        <div className="container">
            <Nav />
            <div ref={introRef} className="home">
                <div className="title-home">
                    <p>Discover my projects, designed to inspire.</p>
                </div>
                <div className="description-home">
                    <p>I’m a multimedia and creative technology student specializing in web development. Proficient in HTML, CSS, JavaScript, and React, I focus on crafting responsive, user-friendly websites. With a strong background in graphic design, I bring ideas to life using Adobe Illustrator, creating UI elements, branding materials, and more. Passionate about blending design and development, I strive to deliver engaging and impactful digital experiences.</p>
                </div>
            </div>
            <Carousel />
            <About />
        </div>
    );
}

export default Home;