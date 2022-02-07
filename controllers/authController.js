import db from "../db.js";
import {v4 as uuid} from "uuid"
import bcrypt from "bcrypt"

export async function signIn(req, res){
    const {email, password} = req.body

    try {
        const user = await db.collection('users').findOne({email})
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid()

            await db.collection('session').insertOne({
                userId: user._id,
                token
            })

            let userInfo = {...user, token}

            delete userInfo.password
            res.send(userInfo)
        } else {
            res.sendStatus(401)
        }

    } catch {
        res.sendStatus(500)
    }
}