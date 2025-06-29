import express from "express";
import createUser from "../controllers/user/createUser";

const userRoute = express.Router()

userRoute.post("/signup",  createUser)


export default userRoute;