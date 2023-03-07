import "./About.css";

export function About() {
    return (
        <>
            <div className="box">
                <div className="details">
                    <div className="title">
                        <h1>Esu Marius Žilgužis</h1>
                    </div>
                    <div className="text">
                        <p>Baigęs kursus studentas be darbo patirties.</p>
                        <p>Baigiau KTU "Programų sistemų" studijas.</p>
                        <a href="https://www.linkedin.com/in/marius-%C5%BEilgu%C5%BEis-827173242/">
                            <img src="imgs/linkedin.png" className="icon" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/Marius456">
                            <img src="imgs/github.png" className="icon" alt="Github" />
                        </a>
                    </div>
                </div>
                <div className="imagediv">
                    <img src="imgs/profile.jpg" className="image" />
                </div>
            </div>
        </>
    )
}