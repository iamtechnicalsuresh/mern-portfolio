import Jwt from "jsonwebtoken";

import User from "../models/userModel.js";
import asyncHandler from "../utils/asyncHandler.js";
import CustomAppError from "./customAppError.js";

export const isLoggedIn = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(
      new CustomAppError("Please login to access this resource", 404)
    );
  }

  const decode = await Jwt.verify(token, process.env.TOKEN);

  console.log("token", token);

  const user = await User.findById(decode.id).select("-password");

  if (!user) {
    return next(new CustomAppError("Invalid User logged in again."));
  }

  req.user = user;

  next();
});

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new CustomAppError(
          "You don't have permission to perform this action.",
          403
        )
      );
    }
    next();
  };
};
