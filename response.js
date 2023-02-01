const response = (statuscode, data, message, res) => {
  res.status(statuscode).json({
    payload: data,
    message,
    pagination: {
      prev: "",
      next: "",
      max: "",
    },
  });
};

module.exports = response;
