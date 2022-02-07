import userSchema from "../schemas/useSchema.js"

export default function validateUser(req, res, next) {
    const validation = userSchema.validate(req.body)

    if (validation.error){
        res.sendStatus(422)
        return
    }

    next()
}