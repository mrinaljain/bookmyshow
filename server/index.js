import express from "express";
import "dotenv/config";
import dbConnect from "./config/dbConfig.js";
import UserRoutes from "./routes/user.routes.js";
import MovieRoutes from "./routes/movie.routes.js";
import ShowRoutes from "./routes/show.routes.js";
import cookieParser from "cookie-parser";
const app = express();

// in order to enable access to the post request body
// convert serelised data into Json
app.use(express.json());
// need cookieParser middleware before we can do anything with cookies
app.use(cookieParser());

app.use("/api/user", UserRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);

app.listen(3000, async () => {
  await dbConnect();
  console.log("Server is Running at :3000");
});
