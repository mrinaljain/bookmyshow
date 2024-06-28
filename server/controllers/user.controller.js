import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const userData = req.body;
    //encrypting the password usinf bcrypt pluging , it uses salt rounds
    userData.password = await bcrypt.hash(userData.password, 10);
    // checking if user already exists on DB
    const userExists = await User.findOne({
      email: userData.email.toLowerCase(),
    });
    if (userExists) {
      res.status(409).send({ success: false, message: "User Already Exists" });
      return;
    }
    // create new user
    let newUser = await User(userData);
    await newUser.save();
    // Generate JWT token
    //? The generate token method will be called on the instance of the model class not on the parent class
    const jwtToken = await newUser.generateToken();
    res
      .status(200)
      .cookie("token", jwtToken, {
        path: "/",
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: false,
        sameSite: "None",
      })
      .send({
        success: true,
        message: "Scccesfully registered",
        token: jwtToken,
      });
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check is user exist
    // also we will append password to our response as it was ommited in user model
    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );
    if (!user) {
      res.status(401).send({ status: false, message: "Invalid Credentials" });
      return;
      //compare passwords usinf decrypyt(encrypted one and the one user entered)
    } else {
      const passcheck = await bcrypt.compare(user.password, password);
      console.log(passcheck);
      if (!passcheck) {
        res.status(401).send({ status: false, message: "Invalid Password" });
        return;
      }
    }
    // Generate JWT token
    //? The generate token method will be called on the instance of the model class not on the parent class
    const jwtToken = await user.generateToken();

    //? Add JWT as an authintication header and in cookies
    res
      .status(200)
      .cookie("token", jwtToken, {
        path: "/",
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: true,
      })
      .send({
        success: true,
        message: "Logged in Successfully",
        token: jwtToken,
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getprofile = async (req, res) => {
  try {
    // read the value of user id passed on from middleware
    const userId = req.body.id;

    //search for user id in DB and return the profile
    const userDetail = await User.findById(userId);

    res.status(200).send(userDetail);
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
};

export const logout = async (req, res) => {
  try {
    // read the value of user id passed on from middleware
    const userId = req.body.id;

    res.status(200).send({ success: true, message: "Logged out Succesfully" });
  } catch (error) {
    res.statusCode = 500;
    res.send(error.message);
  }
};

export const verifyUser = async (req, res) => {
  try {
    const userId = req.body.id;
    const user = await User.findById(userId);
    res
      .status(200)
      .send({ success: true, message: "You are verified", data: user });
  } catch (error) {
    res.status(500).send(error.message);
  }
};


//TODO : Need to fix login password comparision not working

