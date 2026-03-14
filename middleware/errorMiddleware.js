export const error = (err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: err.message || "Internal server error" });
  next();
};
