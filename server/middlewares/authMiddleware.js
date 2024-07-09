import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token)
    return res
      .status(403)
      .send({ success: false, message: "Token is required" });

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(401).send("Invalid Token");
    req.body.id = decoded.id;
    req.body.role = decoded.role;
    next();
  });
};

export default verifyToken;
