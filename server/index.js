import express from "express";
import "dotenv/config";
import dbConnect from "./config/dbConfig.js";
import UserRoutes from "./routes/user.routes.js";
import MovieRoutes from "./routes/movie.routes.js";
import ShowRoutes from "./routes/show.routes.js";
import BlogRoutes from "./routes/blog.routes.js";
import EjsRoutes from "./routes/ejs.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import ejs from "ejs";
import morgan from "morgan";
const app = express();
// enable CORS inside app
app.use(cors());
// external logging middleware
app.use(morgan("tiny"));
app.set("view engine", "ejs");
// convert serelised data into Json
app.use(express.json());
// need cookieParser middleware before we can do anything with cookies
app.use(cookieParser());
// Use express.urlencoded() to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", UserRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);
app.use("/api/blog", BlogRoutes);
app.use("/api/ejs", EjsRoutes);
//running frontend on same port
app.use("/", express.static("public"));
app.listen(3000, async () => {
  await dbConnect();
  console.log("Server is Running at http://localhost:3000");
});


