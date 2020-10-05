import styles from './novastitle.module.css';

function NovasTitle(props) {
    const withUnderline = !('hideUnderline' in props);
    return (
        <div className={styles.novasTitle}>
            <div className={styles.firstline}/>
            <h2>{props.text}</h2>
            <div className={styles.secondline}/>
            {withUnderline && <div className={styles.underline}/>}
        </div>
    )

}

export default NovasTitle;