import express from "express";
import "dotenv/config";
import dbConnect from "./config/dbConfig.js";
import UserRoutes from "./routes/user.routes.js";
import MovieRoutes from "./routes/movie.routes.js";
import ShowRoutes from "./routes/show.routes.js";
import BlogRoutes from "./routes/blog.routes.js";
import EjsRoutes from "./routes/ejs.routes.js";
import TheatreRoutes from "./routes/theatre.routes.js";
import BookingRoutes from "./routes/booking.routes.js";
import PaymentRoutes from "./routes/payment.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import ejs from "ejs";
import morgan from "morgan";
import { Server } from "socket.io";
import http from "http";
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
app.use("/ping", (req, res) => {
  res.send("Welcome to BookAnyShow");
});
app.use("/api/user", UserRoutes);
app.use("/api/movie", MovieRoutes);
app.use("/api/show", ShowRoutes);
app.use("/api/blog", BlogRoutes);
app.use("/api/ejs", EjsRoutes);
app.use("/api/theatre", TheatreRoutes);
app.use("/api/booking", BookingRoutes);
app.use("/api/payment", PaymentRoutes);
//running frontend on same port
// app.use("/", express.static("public"));
// listening socket connection
const server = http.createServer(app);
const io = new Server(server);
io.on("connection", (socket) => {
  console.log("a user connected");
  setTimeout(() => {
    socket.emit("custom","Custom Event from Server");
  }, 3000);
  socket.on("event", (data) => {
    console.log(`${data}`);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(3000, async () => {
  await dbConnect();
  console.log("Server is Running at http://localhost:3000");
});


// app.listen(3000, async () => {
//   await dbConnect();
//   console.log("Server is Running at http://localhost:3000");
// });


