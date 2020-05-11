import React from 'react';
import Head from 'next/head';
import './_app.scss';

function App({ Component, pageProps }: any) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, user-scalable=no"
                />
                <title>One API Route to rule them all</title>
                <meta
                    name="description"
                    content="Minimal show-case of how to have a single API Route handle all incoming requests."
                />
                <link href="/favicon.ico" rel="shortcut icon" />
                <meta
                    property="og:title"
                    content="One API Route to rule them all"
                />

                <meta
                    property="og:description"
                    content="Minimal show-case of how to have a single API Route handle all incoming requests."
                />

                <meta
                    property="og:site_name"
                    content="https://one-api-route-to-rule-them-all.now.sh/"
                />

                <meta property="og:type" content="article" />

                <meta
                    property="og:url"
                    content="https://one-api-route-to-rule-them-all.now.sh/"
                />

                <meta property="twitter:name" content="summary" />

                <meta
                    property="twitter:title"
                    content="One API Route to rule them all"
                />

                <meta
                    property="twitter:site"
                    content="https://one-api-route-to-rule-them-all.now.sh/"
                />

                <meta
                    property="twitter:description"
                    content="Minimal show-case of how to have a single API Route handle all incoming requests."
                />
            </Head>

            <Component {...pageProps} />
        </>
    );
}

export default App;
