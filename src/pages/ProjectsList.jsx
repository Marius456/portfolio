import { Col } from "react-bootstrap"
import { Project } from "../components/Project"
import projects from "../data/projects.json"
import "./ProjectsList.css"

export function ProjectList() {
    return (
        <>
            <h1>Projektai</h1>
            {projects.map(item => (
                <Col key={item.id}>
                    <Project {...item} />
                </Col>
            ))}
        </>
    )
}