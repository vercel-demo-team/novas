import {getPageText} from "../../../lib/api";
import NovasTitle from "../../../components/novastitle";
import NovasCard from "../../../components/novascard";
import NovasPage from "../../../components/novaspage";


function Card(props) {
    const {card} = props;
    return (
        <div className="col-12 col-md-6">
            <NovasCard title={card.title} bullets={card.bullets}/>
        </div>
    )
}

function CardRows(props) {
    const {cards} = props;
    let rowCards = []
    let stopLoop = cards.length;
    let isOdd = false;

    if (cards.length % 2 !== 0) {
        stopLoop -= 1;
        isOdd = true;
    }

    for (let i = 0; i < stopLoop; i += 2) {
        rowCards.push(
            <div className="row cardRow align-items-stretch">
                <Card card={cards[i]}/>
                <Card card={cards[i + 1]}/>
            </div>
        );
    }

    if (isOdd) {
        rowCards.push(
            <div className="row cardRow align-items-stretch">
                <Card card={cards.slice(-1).pop()}/>
            </div>
        );
    }
    return rowCards;
}


export default function Skill(props) {
    const {lang, text, navbar} = props;
    return (
        <NovasPage navbar={props.navbar} lang={props.lang}>
            <div id="skills" className="container">
                <div className="row title">
                    <NovasTitle text={text.title}/>
                </div>
                <div className="cardRows">
                    <CardRows cards={text.cards}/>
                </div>
            </div>
        </NovasPage>
    )

}

export async function getStaticPaths() {
    const langs = ['fr', 'en']
    const skills = ['droit-public', 'droit-penal', 'droit-des-etrangers', 'droit-du-prejudice-corporel']
    let paths = []
    langs.forEach(lang => {
        skills.forEach(skill => paths.push({params: {lang, skill}}))
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    let props = getPageText(params.lang, 'skills');
    props = {lang: params.lang, text: props[params.skill], navbar: props.navbar}
    return {
        props
    }
}