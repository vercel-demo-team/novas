import {getPageText} from "../../lib/api";
import ContactForm from "../../components/contactform";
import NovasTitle from "../../components/novastitle";
import NovasPage from "../../components/novaspage";


export default function Contact(props) {
    return (
        <NovasPage navbar={props.navbar} lang={props.lang}>
            <div id="contacts">
                <div className="container-fluid" style={{'padding': 0}}>
                    <div className="row justify-content-center address" style={{'marginRight': 0, 'marginLeft': 0}}>
                        <address>Cabinet Novas Avocats <br/> 2 Boulevard Agutte Sembat 38000 Grenoble </address>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 order-1 col-md-6 infoAvocats">
                            <div className="row align-items-center">
                                <div className="col-12 contactItem">
                                    <NovasTitle hideUnderline className="name" text="Me Delphine Combes"/>
                                    <div className="coordonnees">
                                        <a className="email" href = "mailto:combes@novas-avocats.frr">
                                            combes@novas-avocats.fr
                                        </a>
                                        <a className="phone" href="tel:07 82 82 97 96">07 82 82 97 96</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 contactItem">
                                    <NovasTitle hideUnderline className="name" text="Me Pierre Donguy"/>
                                    <div className="coordonnees">
                                        <a className="email" href = "mailto:donguy@novas-avocats.fr">
                                            donguy@novas-avocats.fr
                                        </a>
                                        <a className="phone" href="tel:07 60 07 04 72">07 60 07 04 72</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 order-2 col-md-6">
                            <ContactForm/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1182.2682592456918!2d5.724997829692913!3d45.18864173195663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478af48ec96f22cf%3A0x2248bf93c241f2e1!2s2%20Boulevard%20Agutte%20Sembat%2C%2038000%20Grenoble!5e0!3m2!1sfr!2sfr!4v1600527442628!5m2!1sfr!2sfr"
                                width="100%" height="100%" frameBorder="0" allowFullScreen=""
                                aria-hidden="false" tabIndex="0"/>

                            <div className="infoSup">
                                <p className="infoCab">
                                    La cabinet se trouve au-dessus de la pharmacie de la place Victor Hugo de Grenoble (1er étage). <br/>
                                    Il reçoit exclusivement sur rendez-vous. <br/>
                                </p>
                                <p className="mobiliteReduite">
                                    Le cabinet reçoit toute personne à mobilité réduite, sur simple demande, et en toute confidentialité, à la Maison de l’Avocat située 45 rue Pierre Sémard à Grenoble (face au Palais de Justice).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NovasPage>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{params: {lang: 'en'}}, {params: {lang: 'fr'}}],
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const props = getPageText(params.lang, 'contacts');
    return {
        props
    }
}