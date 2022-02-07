import joi from "joi"

const newUserSchema = joi.object({
    username: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required()
})

export default newUserSchema