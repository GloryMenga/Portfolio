import React, { useState } from 'react';
import Nav from '../components/Nav.jsx';

// Dummy project data
const projectsData = [
  {
    id: 1,
    name: "Portfolio Website",
    technologies: ["React", "GSAP", "Tailwind CSS"],
    description: "A responsive personal portfolio showcasing my web development and design skills, featuring smooth animations and modern UI/UX design.",
    image: "https://via.placeholder.com/400x300?text=Portfolio+Website"
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    description: "A full-stack e-commerce application with secure payment integration, responsive design, and dynamic product management.",
    image: "https://via.placeholder.com/400x300?text=E-Commerce+Platform"
  },
  {
    id: 3,
    name: "Social Media Dashboard",
    technologies: ["React", "Redux", "Firebase"],
    description: "A comprehensive social media analytics dashboard with real-time data visualization and user engagement tracking.",
    image: "https://via.placeholder.com/400x300?text=Social+Media+Dashboard"
  },
  {
    id: 4,
    name: "Weather Forecast App",
    technologies: ["Vue.js", "OpenWeatherMap API"],
    description: "An intuitive weather application providing detailed forecasts, interactive maps, and location-based predictions.",
    image: "https://via.placeholder.com/400x300?text=Weather+Forecast+App"
  },
  {
   id: 5,
   name: "Weather Forecast App",
   technologies: ["Vue.js", "OpenWeatherMap API"],
   description: "An intuitive weather application providing detailed forecasts, interactive maps, and location-based predictions.",
   image: "https://via.placeholder.com/400x300?text=Weather+Forecast+App"
   },
];

function Works() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="works-container">
      <Nav />
      <div className='work-title'>
         <h1>
            My work
         </h1>
         <div className='bar'>
            <div className='filled-bar'></div>
         </div>
      </div>
      <div className="works-grid">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${hoveredProject === project.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="project-image" style={{backgroundImage: `url(${project.image})`}}>
              <div className="project-overlay">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-details">
                  <p className="project-technologies">
                    {project.technologies.join(" - ")}
                  </p>
                  <p className="project-description">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;