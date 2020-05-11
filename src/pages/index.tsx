import React, { useState } from 'react';

function Page() {
    const [payload, setPayload] = useState('');

    async function handleApiCall(e: React.MouseEvent<HTMLAnchorElement>) {
        try {
            setPayload(
                await fetch(
                    `${window.location.protocol}//${
                        window.location.host
                    }${e.currentTarget.getAttribute('data-endpoint')}`
                )
                    .then((res) => res.json())
                    .then((json) => JSON.stringify(json, null, 2))
            );
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1>One API route to rule them all</h1>
            <p>
                The following routes are all handles by the same API Route in
                <i> /pages/api/router/...</i>.
            </p>
            <ul>
                <li>
                    Clicking on any of the links below will open the route in a
                    new tab.
                </li>
                <li>
                    <a
                        href="/api/router?testParam=testing1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        /api/router
                    </a>
                </li>
                <li>
                    <a
                        href="/api/router/test1?testParam=testing2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        /api/router/test1
                    </a>
                </li>
                <li>
                    <a
                        href="/api/router/test1/test2?testParam=testing3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        /api/router/test1/test2
                    </a>
                </li>
            </ul>

            <h2>Fetch</h2>

            <ul>
                <li>
                    Clicking on any of the links below will perform a fetch to
                    that endpoint and show the results in the textarea below.
                </li>
                <li>
                    Fetch:{' '}
                    <a onClick={handleApiCall} data-endpoint="/api/router">
                        /api/router
                    </a>
                </li>
                <li>
                    Fetch:{' '}
                    <a
                        onClick={handleApiCall}
                        data-endpoint="/api/router/test1"
                    >
                        /api/router/test1
                    </a>
                </li>
                <li>
                    Fetch:{' '}
                    <a
                        onClick={handleApiCall}
                        data-endpoint="/api/router/test1/test2"
                    >
                        /api/router/test1/test2
                    </a>
                </li>
                <li>
                    <textarea value={payload} readOnly={true} />
                </li>
            </ul>

            <a
                href="https://github.com/willemliu/one-api-route-to-rule-them-all"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
            >
                <figure>
                    <picture>
                        <source
                            media="(max-width: 640px)"
                            srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x`}
                        />
                        <source
                            media="(min-width:641px)"
                            srcSet={`/assets/github/GitHub-Mark-32px.png, /assets/github/GitHub-Mark-64px.png 2x, /assets/github/GitHub-Mark-120px.png 3x`}
                        />
                        <img
                            alt="GitHub"
                            src={`/assets/github/GitHub-Mark-32px.png`}
                        />
                    </picture>
                </figure>
            </a>
        </>
    );
}

export default Page;
