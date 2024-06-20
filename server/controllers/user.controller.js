import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const userData = req.body;
    userData.password = await bcrypt.hash(userData.password, 10);
    const response = await User.create(userData);
    res.status(200).send({ status: true, message: "Scccesfully registered" });
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // now we need to compare useremeil and password from DB
    // check is user exist
    const userData = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );
    if (!userData) {
      res.status(401).send({ status: false, message: "Invalid Credentials" });
      //compare passwords usinf decrypyt(encrypted one and the one user entered)
    } else if (!bcrypt.compare(userData.password, password)) {
      res.status(401).send({ status: false, message: "Invalid Password" });
    }
    //1. Generate JWT token
    const jwtToken = await userData.generateToken();
    //2. Add to cookies
    res.cookie("token", jwtToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).send({ status: true, message: "Logged in Successfully" });
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
};

// TODO : get profile without the id, iplement JWT here
export const getprofile = async (req, res) => {
  try {
    // read the value of user id passed on from middleware
    const userId = req.user.id;
    //search for user id in DB and return the profile
    const userDetail = await User.findById(userId);
    res.status(200).send(userDetail);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
};
