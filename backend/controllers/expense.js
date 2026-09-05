import { group } from "../models/group";
import { expense } from "../models/expense";
import { paySplit } from "../models/paysplit";

export const createExpense = async (req, res) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const groupId = req.params.groupId
    const paidBy=req.userId
    try {
        const groupExist = await group.findById(groupId);
        if(groupExist){
            const savedExpense= await expense.create({amount:amount,description:description,groupId:groupId,paidBy:paidBy})
            // Split-amount
            const members=groupExist.members
            const filteredMember=members.filter(m=> m !== paidBy)
            const splitAmount=amount/members.length
    
            const savedSplit= await Promise.all( filteredMember.map(async(e)=>{
                await paySplit.create({amount:splitAmount,expense:savedExpense._id,ownedTo:paidBy,ownedby:e})
                
            }))
            res.status(200).json( { message: "Expense created and split successfully" } )
        }
        else{
            return res.status(404).json({error:"No group found"})
        }

        // Split-amount 


    }
    catch(e){
        res.json({e})
    }
    
 }