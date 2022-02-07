import db from "../db.js";

export async function getTransactions(req, res) {
    try {
        const user = res.locals.user

        const transactions = await db.collection('transactions').find({userId: user._id}).toArray()

        res.send(transactions)
    } catch {
        res.sendStatus(500)
    }
}

export async function postTransaction(req, res) {
    const user = res.locals.user

    const transaction = req.body

    try {
        await db.collection('transactions').insertOne({...transaction, userId: user._id, date: Date.now()})

        res.status(201).send(transaction)

    } catch {
        res.sendStatus(500)
    }
}