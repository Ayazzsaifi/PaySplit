import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    amount:{type:Number},
    description:{type:String},
    paidBy:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    groupId:{type:mongoose.Schema.Types.ObjectId, ref:"group"}
},{timestamps:true})

 export const expense= mongoose.model("expense",expenseSchema);