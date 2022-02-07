import express from "express";
import { getTransactions, postTransaction } from "../controllers/userController";
import validateOperation from "../middlewares/validateOperation.js"
import validateToken from "../middlewares/validateToken.js"

const userRouter = express.Router()

userRouter.use(validateToken)
userRouter.use('/mywallet/wallet', getTransactions)
userRouter.use('mywallet/transaction', validateOperation, postTransaction)

export default userRouter