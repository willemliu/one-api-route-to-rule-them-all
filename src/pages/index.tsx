import React, { useState } from 'react';

const linkStyle: React.CSSProperties = {
    cursor: 'pointer',
    textDecoration: 'underline',
};

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
                    <a
                        style={linkStyle}
                        onClick={handleApiCall}
                        data-endpoint="/api/router"
                    >
                        /api/router
                    </a>
                </li>
                <li>
                    Fetch:{' '}
                    <a
                        style={linkStyle}
                        onClick={handleApiCall}
                        data-endpoint="/api/router/test1"
                    >
                        /api/router/test1
                    </a>
                </li>
                <li>
                    Fetch:{' '}
                    <a
                        style={linkStyle}
                        onClick={handleApiCall}
                        data-endpoint="/api/router/test1/test2"
                    >
                        /api/router/test1/test2
                    </a>
                </li>
                <li>
                    <textarea
                        style={{ maxWidth: '100%' }}
                        rows={10}
                        value={payload}
                        readOnly={true}
                    />
                </li>
            </ul>
        </>
    );
}

export default Page;
