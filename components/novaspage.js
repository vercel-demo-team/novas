import NavBar from "./navbar";
import Layout from "./layout";

import styles from './novaspage.module.css'


export default function NovasPage({ children, navbar, lang }) {
    return (
        <Layout>
            <div className={styles['novasPage']}>
                <div className={styles.navBar}>
                    <NavBar items={navbar.items} lang={lang}/>
                </div>
            </div>
            {children}
        </Layout>
    )
}