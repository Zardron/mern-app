const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;
  const message = err.message;

  res.json({
    statusCode: statusCode,
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;
