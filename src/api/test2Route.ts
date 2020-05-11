export const test2Route = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
        JSON.stringify({
            payload: '/test1/test2 payload',
            query: req.query,
        })
    );
};
