const blogChecker = (req, res, next) => {
  console.log(req.method, req.ip, req.hostname, new Date());
  next();
};

export default blogChecker;
