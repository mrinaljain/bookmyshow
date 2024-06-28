import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
const UserSchema = Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      minLength: [3, "Min 3 characters required"],
      maxLength: [20, "Max 20"],
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already taken"],
      trim: true,
      lowercase: true,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        "Please fill valid Email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minLength: [8, "Min 8 characters required"],
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN", "SUPER"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);
UserSchema.methods = {
  generateToken: function () {
    var token = jwt.sign({ id: this._id }, process.env.JWT_KEY, {
      expiresIn: process.env.JWT_EXPIRY,
    });
    return token;
  },
  // more methods can be added
};
const User = model("user", UserSchema);

export default User;
