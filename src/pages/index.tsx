import React from 'react';

function Page() {
    return (
        <>
            <h1>One API route to rule them all</h1>
            <p>The following routes are all handles by the same API Route.</p>
            <ul>
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
        </>
    );
}

export default Page;
