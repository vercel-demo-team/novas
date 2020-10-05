import Head from "next/head";
import styles from './layout.module.scss'

export default function Layout({ children }) {

    return <div>
        <Head>
            <title>NOVAS</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap" rel="stylesheet"/>
        </Head>
        <main className={styles['main']}>
            {children}
        </main>
    </div>
}
