import { useParams } from "react-router-dom";
import { Gallery } from "../components/Gallery";
import projects from "../data/projects.json";
import eye from "../assets/eye.svg";
import "./styles/ProjectDetails.css";

export function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id == id);
  function openGallery() {
    if (project.images.length != 0) {
      document.getElementById("project-" + project.name).style.display =
        "block";
    }
  }
  return (
    <>
      <Gallery {...project} />
      <div className="project-box">
        <div className="project-title bold">
          <h2>{project.name}</h2>
        </div>
        <div className="project-text">
          <span>{project.description}</span>
          <br />
          <span className="bold">Nuorodos: </span>
          {project.view_link ? (
            <a href={project.view_link}>
              <img src={eye} className="icon" alt="ViewWebsite" />
            </a>
          ) : null}
          <a href={project.code_link}>
            <img src="imgs/github.png" className="icon" alt="Github" />
          </a>
          <br />
          <span className="bold">Technologijos: </span>
          <br />
          {project.technology.map((item) => (
            <span key={"technology-" + item.name} className="badge">
              {item.name}
            </span>
          ))}
        </div>
        {project.images.length != 0 ? (
          <div className="project_picture_details" onClick={openGallery}>
            <img src={project.images[0]} className="image" />
          </div>
        ) : null}
      </div>
    </>
  );
}
