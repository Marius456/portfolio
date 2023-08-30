import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

export function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => item.id == id);
  return <h1>{project.name}</h1>;
}
