import express from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
} from "../controllers/userController.js";
import { isLoggedIn, restrictTo } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);

router.route("/").get(isLoggedIn, restrictTo("admin"), getAllUsers);

router
  .route("/:id")
  .get(isLoggedIn, restrictTo, getUser)
  .get(isLoggedIn, restrictTo("admin"), deleteUser);

export default router;
