export const test11Route = (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      payload: "/test11 payload",
      query: req.query,
    }),
  );
};
