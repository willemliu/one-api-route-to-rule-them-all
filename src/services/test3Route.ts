export const test3Route = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      payload: "/test3 payload",
      query: req.query,
    }),
  );
};
