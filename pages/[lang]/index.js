import NavBar from "../../components/navbar";
import {getPageText} from '../../lib/api'
import Layout from "../../components/layout";
import Link from "next/link";
import Skillbutton from "../../components/skillbutton";
import NovasTitle from "../../components/novastitle";
import ContactForm from "../../components/contactform";


export default function Home(props) {
    return (
        <Layout>
            <div id="index">
                <svg className="novas-lines small-screen">
                    <line x1="56%" y1="0" x2="100%" y2="100%"/>
                    <line x1="50%" y1="0" x2="78.5%" y2="65%"/>
                </svg>
                <div className="novas-lines large-screen one"></div>
                <div className="novas-lines large-screen two"></div>
                <NavBar items={props.navbar.items} lang={props.lang} isIndexPage={true}/>
                <div className="welcome container">
                    <div className="row main">
                        <div className="left col-12 col-md-7 my-auto">
                            <img src="novas-logo.png" className="img-fluid" alt="Logo Novas"/>
                            <p className="welcome-message">
                                {props.index.welcomeMessage}
                            </p>
                        </div>
                        <div className="right col-12 col-md-5">
                            <picture>
                                <source srcSet="mobile-index-image.png" media="(max-width: 540px)"/>
                                <source srcSet="index-image.png" media="(max-width: 2000px)"/>
                                <img src="index-image-2x.png" alt="Image supernova"/>
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="skillbar container-fluid">
                    <div className="row justify-content-around">
                        <Skillbutton text="Droit public" link={`${props.lang}/droit-public/skill`}/>
                        <Skillbutton text="Droit des étrangers" link={`${props.lang}/droit-des-etrangers/skill`}/>
                        <Skillbutton text="Droit pénal" link={`${props.lang}/droit-penal/skill`}/>
                        <Skillbutton text="Droit du préjudice corporel" link={`${props.lang}/droit-du-prejudice-corporel/skill`}/>
                    </div>
                </div>
                <div className="cabinet container">
                    <div className="row">
                        <div className="col-12 col-md-6 titleSection">
                            <NovasTitle text="Le cabinet"></NovasTitle>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <picture>
                                <img src="portraits/novas-delphine-pierre.jpg" className="img-fluid rounded"
                                     alt="portait Maître Combes et Maître Donguy"/>
                            </picture>
                        </div>
                        <div className="col-12 col-md-6 biographies">
                            <div className="row">
                                <div className="col-12">
                                    <h3>Delphine Combes</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h3>Pierre Donguy</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                        eirmod</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="actualites container">
                    <div className="row">
                        <div className="col-12 col-md-6 titleSection">
                            <NovasTitle text="Nos actualités"></NovasTitle>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3>Titre actu</h3>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren…
                            </p>
                            <Link href="todo"><a><strong>En savoir plus</strong></a></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-6">
                            <h3>Titre actu</h3>
                            <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                                accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren…
                            </p>
                            <Link href="todo"><a><strong>En savoir plus</strong></a></Link>
                        </div>
                    </div>
                </div>
                <div className="contact container">
                    <div className="row">
                        <div className="col-12 col-md-6 titleSection">
                            <NovasTitle text="Nous contacter"></NovasTitle>
                        </div>
                        <div className="col-12 col-md-6">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <footer>
                    <p>Novas Avocats</p>
                    <address>2, Boulevard Agutte Sembat <br></br> 38000 Grenoble</address>
                    <a href="tel:07 82 82 97 96">T. 07 82 82 97 96</a>
                    <a href="tel:07 82 82 97 96"> - F. 07 82 82 97 96</a>
                </footer>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{params: {lang: 'en'}}, {params: {lang: 'fr'}}],
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const props = getPageText(params.lang, 'home');
    return {
        props
    }
}
