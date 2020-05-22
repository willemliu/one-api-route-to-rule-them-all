export const test8Route = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      payload: "/test8 payload",
      query: req.query,
    }),
  );
};
