import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();
app.use(express.json());
app.use(cors({ credentials: true }));
app.use(cookieParser());



app.get("/", (_, res) => {
    res.send("Hello World")
    })


export default app;