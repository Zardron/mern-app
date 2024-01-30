export const serverError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message;

  return res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;

  return error;
};
