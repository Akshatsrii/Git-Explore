const errorMiddleware = (err, req, res, next) => {
  console.error(err.message);

  if (err.response) {
    return res.status(err.response.status).json({
      error: err.response.data.message
    });
  }

  res.status(500).json({
    error: "Server Error"
  });
};

export default errorMiddleware;
