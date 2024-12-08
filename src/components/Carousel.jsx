import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Carousel() {
  const [projects, setProjects] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };
    fetchProjects();
  }, []);

  const moveSlide = (direction) => {
    let nextSlide = currentSlide;

    if (direction === 'right') {
      nextSlide = currentSlide + 1 >= projects.length ? 0 : currentSlide + 1;
    } else {
      nextSlide = currentSlide - 1 < 0 ? projects.length - 1 : currentSlide - 1;
    }

    setCurrentSlide(nextSlide);
  };

  return (
    <div className="works">
      <div className="carousel-text">
        <h1>Works</h1>
        <p>Here can you see my work</p>
      </div>
      <div className="carousel">
        <div className="carousel__nav">
          <span id="moveLeft" className="carousel__arrow" onClick={() => moveSlide('left')}>
            <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
            </svg>
          </span>
          <span id="moveRight" className="carousel__arrow" onClick={() => moveSlide('right')}>
            <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </span>
        </div>

        {projects.length > 0 &&
          projects.map((project, index) => (
            <div
              key={project._id}
              className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
            >
              <div
                className="carousel-item__image"
                style={{ backgroundImage: `url(${project.main_image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}
              ></div>
              <div className="carousel-item__info">
                <div className="carousel-item__container">
                  <h2 className="carousel-item__subtitle">
                    {project.technologies.join(" - ")}
                  </h2>
                  <h1 className="carousel-item__title">{project.name}</h1>
                  <p className="carousel-item__description">{project.short_description}</p>
                  <button
                    className="carousel-item__btn"
                    onClick={() => navigate(`/project?id=${project._id}`)}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Carousel;
