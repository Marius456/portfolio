import { Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Project } from "../components/Project"
import projects from "../data/projects.json"

export function ProjectList() {
    const { tagName } = useParams();
    let filtered_projects = projects
    if (tagName !== undefined) {
        filtered_projects = projects.filter(item => item.technology.find(tag => tag.name === tagName))
    }
    return (
        <>
            {filtered_projects.map(item => (
                <Col key={item.name}>
                    <Project key={"project-" + item.name} {...item} />
                </Col>
            ))}
        </>
    )
}