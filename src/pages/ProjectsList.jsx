import { Col } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { Project } from "../components/Project"
import { Sidebar } from "../components/Sidebar"
import projects from "../data/projects.json"
import "./ProjectsList.css"

export function ProjectList() {
    const { tagName } = useParams();
    let filtered_projects = projects
    if (tagName !== undefined) {
        filtered_projects = projects.filter(item => item.technology.find(tag => tag.name === tagName))
    }
    return (
        <>
            {/* <Sidebar /> */}
            <h1>Projektai</h1>
            {filtered_projects.map(item => (
                <Col key={item.name}>
                    <Project key={"project-" + item.name} {...item} />
                </Col>
            ))}
        </>
    )
}