import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
const app = express();

import connectDB from "./configs/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import globleErrorHandler from "./middlewares/globleErrorHandler.js";

dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const __dirname = path.resolve();

app.use("/api/contact", contactRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json("Api Working Fine.");
  });
}

app.use(globleErrorHandler);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
