import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  changePassword,
} from "../controllers/userController.js";
import { isLoggedIn, restrictTo } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", isLoggedIn, restrictTo("admin"), registerUser);
router.post("/changepassword", isLoggedIn, changePassword);

router.route("/").get(isLoggedIn, restrictTo("admin"), getAllUsers);

router
  .route("/:id")
  .get(isLoggedIn, restrictTo, getUser)
  .delete(isLoggedIn, restrictTo("admin"), deleteUser);

export default router;
