import jwt from "jsonwebtoken";
const isLoggedIn = function (req, res, next) {
  try {
    //pick jwt from cookies
    const token = req.cookies.token;
    //decrypt it with the help of plugin
    console.log("token", token);
    const tokenDetails = jwt.verify(token, process.env.JWT_KEY);
    console.log("tokenDetails", tokenDetails);
    if (!tokenDetails || !token) {
      res.status(401).send("Request Unauthinticated");
    }
    // passing data to controller from middleware
    req.user = tokenDetails;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).send("jwt must be provided JWT verification failed");
  }
  
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
