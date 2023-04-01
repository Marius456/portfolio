import { useState } from "react";
import eye from "../assets/eye.svg"
import "./styles/Project.css"

export function Project(props) {
    const [imageId, setImageId] = useState(0)
    const [imagesList, setImagesList] = useState([])


    function openGallery() {
        setImageId(0)
        setImagesList(props.images)
        if (imagesList.length != 0) {
            document.getElementById("project-" + props.name).style.display = 'block';
            document.getElementById("bullet-" + imageId).style = 'active';
        }
    }
    function closeGallery() {
        document.getElementById("project-" + props.name).style.display = 'none';
    }

    const onClickHandlerRight = () => {
        if (imageId == imagesList.length - 1)
            setImageId(0);
        else
            setImageId(imageId => imageId + 1);
    }

    const onClickHandlerLeft = () => {
        if (imageId == 0)
            setImageId(imagesList.length - 1);
        else
            setImageId(imageId => imageId - 1);
    }
    return (
        <>
            <div id={"project-" + props.name} className="background_blur">
                <div className="closebtn" onClick={closeGallery} >
                    <span>X</span>
                </div>
                <div className="icon-box-left" onClick={onClickHandlerLeft}>
                    <img src="imgs/back.png" className="icon" />
                </div>
                <div className="icon-box-right" onClick={onClickHandlerRight}>
                    <img src="imgs/next.png" className="icon" />
                </div>
                <div className="bullets">
                    {
                        imagesList.map((_item, index) =>
                        (
                            <div id={"bullet-" + index} className="bullet" onClick={() => setImageId(index)} />
                        ))
                    }
                </div>
                <div className="gallery-slider">
                    <img src={props.images[imageId]} className="image" />
                </div>
            </div>
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
                <div className="project-picture" onClick={openGallery}>
                    <img src={props.images[0]} className="image" />
                </div>
            </div>
        </>
    )
}