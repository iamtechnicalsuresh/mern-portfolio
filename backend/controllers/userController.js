import User from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import CustomAppError from "../middlewares/customAppError.js";
import { jsonWebToken } from "../middlewares/jsonToken.js";

export const registerUser = asyncHandler(async (req, res, next) => {
  const { fullname, email, password, cpassword } = req.body;
  if (password !== cpassword) {
    return next(
      new CustomAppError("Password and Confirm password do not match.", 400)
    );
  }
  const user = await User.create({
    fullname,
    email,
    password,
  });

  res.status(201).json({
    status: "success",
  });
});

export const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    return next(new CustomAppError("Email and Password can't be empty."));
  }
  const user = await User.findOne({ email });

  if (!user.email || !(await user.isPasswordMatch(password, user.password))) {
    return next(new CustomAppError("Invalid username and password", 404));
  } else {
    let token = jsonWebToken(user._id);

    res.status(200).json({
      fullname: user.fullname,
      email: user.email,
      profilePic: user.profilePic,
      token,
    });
  }
});

export const getAllUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().select("-password");
  res.status(200).json({
    status: "success",
    users,
  });
});

export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).select("-passwored");
  if (!user) {
    return next(
      new CustomAppError("Invalid User Please Insert corect Details.", 400)
    );
  }
  res.status(200).json({
    status: "success",
    user,
  });
});

export const deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) {
    return next(
      new CustomAppError("User not found please enter correct detail.", 400)
    );
  }
  res.status(200).json({
    status: "success",
    message: "User Removed Successfully.",
  });
});
