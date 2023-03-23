import "./styles/About.css";

export function About() {
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
                        <p>Baigęs kursus studentas be darbo patirties.</p>
                        <p>Baigiau KTU "Programų sistemų" studijas.</p>
                        <a href='files/CV.pdf' download>Atsisiųsti CV pdf failą</a>
                    </div>
                </div>
                <div className="info">
                    <div className="title bold">
                        Apie mane
                    </div>
                    <div className="info-box">
                        <p>
                            Esu lakoniškas žmogus. 
                            <br/>
                            Mano privalumai:
                            <ul>
                                <li>atsakingai atlieku darbą</li>
                                <li>greitai išmokstu naujų dalykų (universitete mokiausi &gt;8 vidurkiu)</li>
                            </ul>        
                            Mano trūkumai:
                            <ul>
                                <li>esu uždaras/nekalbus</li>
                                <li>esu atsargus priimti sprendimus (studijuodamas neieškojau darbo, todėl dabar neturiu darbo patirties)</li>
                            </ul>                            
                        </p>
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
                            Kauno miesto poliklinika
                        </p>
                        <p>
                            Praktika
                        </p>
                        <p>
                            IT pagalbinis darbuotojas
                        </p>
                        <p>
                            01/02/2021 - 31/05/2021
                        </p>
                        <p>
                            Sukuriau sportavimo planų planavimo ir sekimo sistemą, kurią apgyniau bakalaurinio darbo gynime.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}