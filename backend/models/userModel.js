import mongoose from "mongoose";
import validator from "validator";
import bcryptjs from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      validate: validator.isEmail,
      unique: true,
    },
    profilePic: {
      type: String,
      default: "default.jpg",
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["admin", "user"],
    },
  },
  {
    createAt: true,
  }
);

userSchema.methods.isPasswordMatch = async function (
  userPassword,
  dbStoredPassword
) {
  return await bcryptjs.compare(userPassword, dbStoredPassword);
};

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  // this.password = await bcryptjs.hash(this.password, 10);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
