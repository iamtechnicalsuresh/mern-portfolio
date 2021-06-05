import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
const app = express();

import connectDB from "./configs/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import globleErrorHandler from "./middlewares/globleErrorHandler.js";

dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.json("Api Working Fine.");
});

app.use(globleErrorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
