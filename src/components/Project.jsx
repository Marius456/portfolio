import eye from "../assets/eye.svg"
import "./styles/Project.css"
export function Project(props) {
    return (
        <>
            <div className="project-box">
                <div className="project-title bold">
                    <h2>{props.name}</h2>
                </div>
                <div className="project-text">
                    <span>{props.description}</span>
                    <br />
                    <span className="bold">Nuorodos: </span>
                    {props.view_link ?
                        <a href={props.view_link}>
                            <img src={eye} className="icon" alt="ViewWebsite" />
                        </a>
                        : null}
                    <a href={props.code_link}>
                        <img src="imgs/github.png" className="icon" alt="Github" />
                    </a>
                    <br />
                    <span className="bold">Technologijos: </span>
                    <br />
                    {props.technology.map(item => (
                        <span key={"technology-" + item.name} className="badge">{item.name}</span>
                    ))}
                </div>
                <div className="project-picture">
                    <img src={props.image} className="image" />
                </div>
            </div>
        </>
    )
}