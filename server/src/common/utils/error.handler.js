export const ErrorHandler = (err, req, res, next) => {
  return res.json({
    statusCode: err.status || 500,
    error: {
      message: err.message || "internal Error",
      invalidParams:err.error
    },
  });
};

export const NotFoundHandler = (req, res, next) => {
  return res.status(404).json({ status: res.status, message: "Not Found Route" });
};
