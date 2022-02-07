import express from "express";
import { signIn, signUp } from "../controllers/authController.js";
import validateNewUser from "../middlewares/validateNewUser.js";
import validateUser from "../middlewares/validateUser.js";

const authRouter = express.Router()

authRouter.post('/mywallet/sign-in', validateUser, signIn)

authRouter.post('/mywallet/sign-up', validateNewUser, signUp)

export default authRouter