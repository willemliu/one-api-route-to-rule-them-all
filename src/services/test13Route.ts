export const test13Route = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      payload: "/test13 payload",
      query: req.query,
    }),
  );
};
