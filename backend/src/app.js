import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://flats-and-flatmates.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js";
import flatRouter from "./routes/flat.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/flats", flatRouter);

export { app };
