// pages/_app.js
import React from 'react'
import Head from 'next/head'
import Theme from "../constants/theme";

function MyApp({ Component, pageProps }) {
    return (
        <Theme>
            <Head>
                <title>Ines Maio</title>
                <link rel="icon" href="/favicon.png" sizes="16x16" type="image/png"></link>
            </Head>
            <Component {...pageProps} />
        </Theme>
    )
}

export default MyApp