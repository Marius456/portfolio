import eye from "../assets/eye.svg"
import "./Project.css"
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
                    
                    <a href={props.view_link}>
                        <img src={eye} className="icon" alt="ViewWebsite" />
                    </a>
                    <a href={props.code_link}>
                        <img src="imgs/github.png" className="icon" alt="Github" />
                    </a>
                    <br />
                    <span className="bold">Technologijos: </span>
                    <br />
                    {props.technology.map(item => (
                        <span className="badge">{item.name}</span>
                    ))}
                </div>
                <div className="project-picture">
                    <img src={props.image} className="image" />
                </div>
            </div>
        </>
    )
}