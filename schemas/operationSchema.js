import joi from "joi"

const operationSchema = joi.object({
    value: joi.string().required(),
    description: joi.string().required(),
    type: joi.string().required().valid("deposit", "withdrawl")
})

export default operationSchema