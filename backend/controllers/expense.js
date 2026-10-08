import { group } from "../models/group.js";
import { expense } from "../models/expense.js";
import { paySplit } from "../models/paysplit.js";

export const createExpense = async (req, res) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const groupId = req.params.groupId
    const paidBy = req.userID
    try {
        const groupExist = await group.findById(groupId);
        if (groupExist) {
            const savedExpense = await expense.create({ amount: amount, description: description, groupId: groupId, paidBy: paidBy })
            // Split-amount
            const members = groupExist.members
            const filteredMember = members.filter(m => m.toString() !== paidBy.toString())
            const splitAmount = amount / members.length

            const savedSplit = await Promise.all(filteredMember.map(async (e) => {
                await paySplit.create({ amount: splitAmount, expense: savedExpense._id, ownedTo: paidBy, ownedBy: e })

            }))
            res.status(200).json({ message: "Expense created and split successfully" })
        }
        else {
            return res.status(404).json({ error: "No group found" })
        }


    }
catch (e) {
    res.json({ error: e.message })
}

}

export const getExpensesByGroup = async (req, res) => {
    try {
        const findingExpense = await expense.find({ groupId: req.params.groupId })
        if (findingExpense.length === 0) {
            return res.status(404).json({ message: "No expenses Found" })
        }
        res.json({ findingExpense })
    }

    catch (e) {
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getUserBalances = async (req, res) => {
    try {
        const userID = req.userID
        const splits = await paySplit.find({ ownedTo: userID })
        const total = splits.reduce((sum, s) => sum + s.amount, 0)

        const currentUser = await user.findById(userID)
        if (!currentUser) {
            return res.status(404).json({ error: "User not found" })
        }

        res.status(200).json({ username: currentUser.username, balance: total })
    } catch (e) {
        res.status(500).json({ error: "Internal server error" })
    }
}