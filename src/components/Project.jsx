import eye from "../assets/eye.svg";
import { Gallery } from "./Gallery";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles/Project.css";

export function Project(projectDetails) {
  function openGallery() {
    if (projectDetails.images.length != 0) {
      document.getElementById("project-" + projectDetails.name).style.display =
        "block";
    }
  }
  return (
    <Nav.Link to={"/projects/" + projectDetails.id} as={NavLink}>
      <div className="project_box">
        <div>
          {projectDetails.images.length != 0 ? (
            <div className="project-picture" onClick={openGallery}>
              <img src={projectDetails.images[0]} className="image" />
            </div>
          ) : null}
        </div>
        <div className="project-title bold">
          <h2>{projectDetails.name}</h2>
        </div>
        <div>
          {projectDetails.technology.map((item) => (
            <span key={"technology-" + item.name} className="badge">
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </Nav.Link>
  );
}
