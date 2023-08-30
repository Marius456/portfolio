import { Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Project } from "../components/Project";
import "./styles/ProjectsList.css";
import projects from "../data/projects.json";

export function ProjectsList() {
  const { tagName } = useParams();
  let filtered_projects = projects;
  if (tagName !== undefined) {
    filtered_projects = projects.filter((item) =>
      item.technology.find((tag) => tag.name === tagName)
    );
  }
  return (
    <>
      <div className="wrapper_grid">
        {filtered_projects.map((item) => (
          <Project key={"project-" + item.name} {...item} />
        ))}
      </div>
    </>
  );
}
