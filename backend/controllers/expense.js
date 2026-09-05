import { group } from "../models/group";
import { User } from "../models/user";
import { expense } from "../models/expense";

export const createExpense = async (req, res) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const groupId = req.params.groupId
    const paidBy=req.userId
    try {
        const groupExist = await group.findById(groupId);
        if(groupExist){
            const savedExpense= await expense.create({amount:amount,description:description,groupId:groupId,paidBy:paidBy})
        }
        else{
            return res.status(404).json({error:"No group found"})
        }
        
    }
    catch(e){
        res.json({e})
    }
    
 }