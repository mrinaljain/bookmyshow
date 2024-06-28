import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(403).send("Token is required");

  jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
    if (err) return res.status(401).send("Invalid Token");

    req.user = decoded;
    next();
  });
};

// Protected route
// app.get("/protected", verifyToken, (req, res) => {
//   res.send("This is protected data");
// });

export default verifyToken;
