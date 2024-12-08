import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Nav from '../components/Nav.jsx';

function Works() {
  const [projects, setProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate(); 

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects"); // Replace with your API endpoint
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="works-container">
      <Nav />
      <div className='work-title'>
         <h1>My work</h1>
         <div className='bar'>
            <div className='filled-bar'></div>
         </div>
      </div>
      <div className="works-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div 
              key={project._id} 
              className={`project-card ${hoveredProject === project._id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredProject(project._id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => navigate(`/project?id=${project._id}`)} // Navigate to the project page
            >
              <div 
                className="project-image" 
                style={{ backgroundImage: `url(${project.main_image})` }}
              >
                <div className="project-overlay">
                  <h2 className="project-name">{project.name}</h2>
                  <div className="project-details">
                    <p className="project-technologies">
                      {project.technologies.join(" - ")}
                    </p>
                    <p className="project-description">
                      {project.short_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading projects...</p>
        )}
      </div>
    </div>
  );
}

export default Works;
