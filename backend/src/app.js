import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser());

// routes
import userRouter from "./routes/user.routes.js";
import flatRouter from "./routes/flat.routes.js";

app.use("/api/v1/users", userRouter);
app.use("/api/v1/flats", flatRouter);

app.get("/hello", (req, res) =>{
    res.send("hello Rishabh")
})

export { app };
