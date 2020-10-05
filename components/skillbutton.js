import Link from "next/link";
import styles from './skillbutton.module.scss';

function Skillbutton(props) {
    return(
        <div className={`col-6 col-md-3 ${styles.skillButton}`}>
            <div className={styles.underline}></div>
            <Link href={props.link}>
                <a><strong>{props.text}</strong></a>
            </Link>
        </div>
    )
}

export default Skillbutton;