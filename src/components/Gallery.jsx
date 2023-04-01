import { useState } from "react";
import "./styles/Gallery.css"

export function Gallery(props){
    const [imageId, setImageId] = useState(0)

    function closeGallery() {
        document.getElementById("project-" + props.name).style.display = 'none';
        setImageId(0)
    }

    const onClickHandlerRight = () => {
        if (imageId == props.images.length - 1)
            setImageId(0);
        else
            setImageId(imageId => imageId + 1);
    }

    const onClickHandlerLeft = () => {
        if (imageId == 0)
            setImageId(props.images.length - 1);
        else
            setImageId(imageId => imageId - 1);
    }
    return(
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
                        props.images.map((_item, index) =>
                        (
                            <div id={"bullet-" + index} className="bullet" onClick={() => setImageId(index)} />
                        ))
                    }
                </div>
                <div className="gallery-slider">
                    <img src={props.images[imageId]} className="image" />
                </div>
            </div>
    )
}