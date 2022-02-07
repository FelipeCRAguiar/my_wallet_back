import operationSchema from "../schemas/operationSchema.js"

export default function(req, res, next) {
    const validation = operationSchema.validate(req.body)

    if (validation.error) {
        res.sendStatus(422)
        return
    }

    next()
}