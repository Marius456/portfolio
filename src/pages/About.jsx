import "./styles/About.css";

export function About() {
    function downloadCV(){
        window.open('files/CV - Marius Žilgužis.pdf', '_self');
    }
    return (
        <>
            <div className="box">
                <div className="imagediv">
                    <img src="imgs/profile.jpg" className="image" />
                </div>
                <div className="details">
                    <div className="title">
                        <h1>Esu Marius Žilgužis</h1>
                    </div>
                    <div className="text">
                        <p>
                            Mano privalumai:
                            <ul>
                                <li>atsakingai atlieku darbą</li>
                                <li>greitai išmokstu naujų dalykų</li>
                                <li>siekiu tobulėti</li>
                            </ul>     
                            Šiuo metu ieškau darbo. Nebijau iššūkių, todėl nesibaidau išmokti naują programavimo kalbą ar technologiją jei reikia.      
                        </p>
                        <div onClick={downloadCV} className="CV-button">
                            <span>CV</span>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="title bold">
                        Išsilavinimas
                    </div>
                    <div className="info-box">
                        <p className="bold">
                            Kauno technologijos universitetas
                        </p>
                        <p>
                            Bakalauras
                        </p>
                        <p>
                            Programų sistemos
                        </p>
                        <p>
                            2017-2022
                        </p>
                        <p>
                            Absolventas gali dirbti individualiai, nuotoliniu būdu ar įmonėse ir organizacijose kompiuterinių sistemų projektuotojo, programuotojo, testuotojo ir tinklo administratoriaus darbą, specifikuoti reikalavimus, kurti saityno programas, diegti ir prižiūrėti programų sistemas,vadovauti projektams
                        </p>
                    </div>
                    <div className="info-box">
                        <p className="bold">
                            Žeimelio gimnazija
                        </p>
                        <p>
                            Vidurinis išsilavinimas
                        </p>
                        <p>
                            2005-2017
                        </p>
                    </div>
                </div>
                <div className="info">
                    <div className="title bold">
                        Darbo Patirtis
                    </div>
                    <div className="info-box">
                        <p className="bold">
                            Flexn Academy
                        </p>
                        <p>
                            Praktika
                        </p>
                        <p>
                            2023/05 - 2023/08
                        </p>
                        <p>
                            Praktikos metu reikėjo sukurti filmų peržiūros sistemą. Kas dvi savaites buvo pristatomas progresas. Per dvi savaites reikėjo sukurti veikiančia aplikaciją su duota technologiją. Programavimo kalba - typescript. Panaudotos technologijos sukurti sistemą: Vanilla JS, ReactJS, NextJS, React Native, React Native TV, ReNative.
                        </p>
                    </div>
                    <div className="info-box">
                        <p className="bold">
                            Kauno miesto poliklinika
                        </p>
                        <p>
                            Praktika
                        </p>
                        <p>
                            IT pagalbinis darbuotojas
                        </p>
                        <p>
                            2021/02 - 2021/05
                        </p>
                        <p>
                            Sukuriau sportavimo planų planavimo ir sekimo sistemą, kurią apgyniau bakalaurinio darbo gynime. Panaudotos technologijos: ASP.NET Core ir Angular 12.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}