const LMwHomework = (req, res, next) => {
  console.log("new request homework at", new Date());
  next();
};

module.exports = LMwHomework;
