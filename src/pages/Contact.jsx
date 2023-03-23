import "./styles/Contact.css";

export function Contact() {
    function copy() {
        navigator.clipboard.writeText('marius.zilguzis@gmail.com')
        document.getElementById("custom-tooltip").style.display = "inline";
        setTimeout(function () {
            document.getElementById("custom-tooltip").style.display = "none";
        }, 1000);

    };
    return (
        <>
            <h1>Kontaktai</h1>
            <div className="contact-box">
                <p>Mane galite pasiekti šiais kontaktais:</p>
                <p>Email:</p>
                <div className="button-tooltip-container">
                    <p className="email" onClick={copy}>marius.zilguzis@gmail.com</p>
                    <p id="custom-tooltip">nukopijuota!</p>
                </div>
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