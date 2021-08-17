import CustomAppError from "./customAppError.js";

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  console.log(errors);

  const message = `Invalid input data. ${errors.join(". ")}`;
  return new CustomAppError(message, 400);
};

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new CustomAppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new CustomAppError(message, 400);
};

const tokenExpiredError = (err) => {
  const message = "Your session has been expired. Login again.";
  return new CustomAppError(message, 401);
};

const sendErrDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrProd = (err, res) => {
  // Operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error
  } else {
    // 1) Log error
    console.error("ERROR 💥: ", err);

    // 2) Send generic message
    res.status(500).json({
      status: "error",
      message: "Something went very wrong!",
    });
  }
};

const globleErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    let error = { ...err };
    console.log(error);
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError") {
      error = handleValidationErrorDB(error);
    }
    if (error.name === "TokenExpiredError") error = tokenExpiredError(error);
    sendErrDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    console.log(error);
    if (error.name === "CastError") error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === "ValidationError")
      error = handleValidationErrorDB(error);
    if (error.name === "TokenExpiredError") error = tokenExpiredError(error);

    sendErrProd(err, res);
  }
};

export default globleErrorHandler;
