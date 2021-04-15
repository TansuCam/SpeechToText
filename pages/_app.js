import Layout from '../components/Layout'
import React from 'react'
function MyApp({ Component, pageProps }) {

    return (
        <Layout title=" | SpeechToText">
            <Component {...pageProps} />
        </Layout>
    )
}
export default MyApp