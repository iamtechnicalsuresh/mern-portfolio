import express from "express";
import {
  createContact,
  getAllContacts,
  getContact,
} from "../controllers/contactController.js";
import { isLoggedIn, restrictTo } from "../middlewares/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(createContact)
  .get(isLoggedIn, restrictTo("admin"), getAllContacts);

router.route("/:id").get(isLoggedIn, restrictTo("admin"), getContact);

export default router;
