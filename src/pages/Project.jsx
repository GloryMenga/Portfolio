import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Project() {
  const [project, setProject] = useState(null);
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("id");

  useEffect(() => {
    const fetchProject = async () => {
        try {
            const response = await fetch(`https://portfolio-backend-nenv.onrender.com/api/projects/${projectId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProject(data);
        } catch (error) {
            console.error("Error fetching project", error);
        }
    };

    if (projectId) {
        fetchProject();
    }
    }, [projectId]);


  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <div className="project">
      <div className="back-link">
        <a href="/Portfolio/works">Go back to all my works</a>
      </div>
      <div className="project-image" style={{ backgroundImage: `url(${project.main_image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}></div>
      <h1>{project.name}</h1>
      <h2>{project.technologies.join(" - ")}</h2>
      <p>{project.description}</p>
      <div className="other-images">
        {project.images.map((image, index) => (
          <div key={index} className="image" style={{ backgroundImage: `url(${image})`, backgroundSize:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center" }}></div>
        ))}
      </div>
      <a href={project.link} target="_blank" className="link">View project on GitHub</a>
    </div>
  );
}

export default Project;
