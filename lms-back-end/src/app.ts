import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.routes";



const app = express();
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());


// route

app.use("/api/user", userRoute)





app.get("/", (_, res) => {
    res.send("Hello World")
    })


export default app;