import jwt from "jsonwebtoken";
const isLoggedIn = function (req, res, next) {
  //pick jwt from cookies
  const { token } = req.cookies;
  //decrypet it with the help of plugin
  const tokenDetails = jwt.verify(token, process.env.JWT_KEY);
  if (!tokenDetails || !token) {
    res.status(401).send("Request Unauthinticated");
    //  return;
  }
  // passing data to controller from middleware
  req.user = tokenDetails;
  next();
};

export default isLoggedIn;

// JWT implementation flow

// generate a JWT token from backend during login
// add to cookies during signin (set cookies)
// now from furthur ongoing requests we will recive JWT token in cookies
// api/user/profile  =>
// pick jwt from cookies
// decrypet it with the help of plugin
// read the value of user id
// search for user id in DB and return the profile
