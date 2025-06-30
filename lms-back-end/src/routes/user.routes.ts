import express from "express";
import createUser from "../controllers/user/user";

const userRoute = express.Router()

userRoute.post("/signup",  createUser)


export default userRoute;