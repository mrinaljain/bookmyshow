import express from "express";
import "dotenv/config";
import dbConnect from "./config/dbConfig.js";
import UserRoutes from "./routes/user.routes.js";
import MovieRoutes from "./routes/movie.routes.js";
import ShowRoutes from "./routes/show.routes.js";
import BlogRoutes from "./routes/blog.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
// enable CORS inside app
app.use(cors());

// convert serelised data into Json
app.use(express.json());
// need cookieParser middleware before we can do anything with cookies
app.use(cookieParser());
app.use("/api/user", UserRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);
app.use("/api/blog", BlogRoutes);
app.use("/", express.static("public"));
app.listen(3000, async () => {
  await dbConnect();
  console.log("Server is Running at http://localhost:3000");
});


