import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

function getInitialLocale() {
    const [browserSetting] = navigator.language.split('-')
    if (['fr', 'en'].includes(browserSetting)) {
        return browserSetting
    }
    return 'fr'
}

export default function Index() {
    const router = useRouter()
    React.useEffect(() => {
        router.replace('/[lang]', `/${getInitialLocale()}`)
    })
    return (
        <Head>
            <meta name="robots" content="noindex, nofollow" />
            <title>Novas Avocats</title>
        </Head>
    )
}