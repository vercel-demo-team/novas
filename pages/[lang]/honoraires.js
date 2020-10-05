import NovasPage from "../../components/novaspage";
import {getPageText} from "../../lib/api";
import NovasTitle from "../../components/novastitle";


export default function Honoraires(props) {

    const items = props.text.map((item) =>
        <div className="row">
            <p>{item}</p>
        </div>
    )

    return (
        <NovasPage navbar={props.navbar} lang={props.lang}>
            <div id="honoraires" className="container">
                <div className="row title">
                    <NovasTitle text={props.title}/>
                </div>
                <div className="honoraireInfo">{items}</div>
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
    const props = getPageText(params.lang, 'honoraires');
    return {
        props
    }
}