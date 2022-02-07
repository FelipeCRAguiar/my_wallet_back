import joi from "joi"

const userSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required()
})

export default userSchema