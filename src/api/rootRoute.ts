export const rootRoute = (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
        JSON.stringify({
            payload: 'Here is some payload',
            query: req.query,
        })
    );
};
