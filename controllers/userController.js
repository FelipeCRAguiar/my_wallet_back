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

