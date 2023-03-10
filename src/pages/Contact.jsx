import "./Contact.css";

export function Contact() {
    return (
        <>
            <h1>Kontaktai</h1>
            <div className="box">
                <p>Mane galite pasiekti šiais kontaktais:</p>
                <p>Email:</p>
                <p>marius.zilguzis@gmail.com</p>
                <p>LinkedIn:</p>
                <a href="https://www.linkedin.com/in/marius-%C5%BEilgu%C5%BEis-827173242/">
                    <img src="imgs/linkedin.png" className="icon" alt="LinkedIn" />
                </a>
                <p>Github:</p>
                <a href="https://github.com/Marius456">
                    <img src="imgs/github.png" className="icon" alt="Github" />
                </a>
            </div>
        </>
    )
}