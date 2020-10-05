import styles from './novascard.module.css';


function NovasCard(props) {
    const {title, bullets} = props;
    const items = bullets.map((bullet, i) =>
        <li key={i}>
            {bullet}
        </li>
    )
    return (
        <div className={styles['novasCard']}>
            <div className={`${styles['card']}`}>
                <div className={styles.firstline}/>
                <div className={styles.secondline}/>
                <div className={`${styles['card-header']} ${styles['header']}`}>
                    <h4>{title}</h4>
                </div>
                <div className={styles["card-body"]}>
                    <ul>{items}</ul>
                </div>
            </div>
        </div>
    )

}

export default NovasCard;