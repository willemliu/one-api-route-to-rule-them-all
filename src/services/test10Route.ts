export const test10Route = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      payload: "/test10 payload",
      query: req.query,
    }),
  );
};
