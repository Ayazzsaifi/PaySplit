import mongoose from "mongoose";


const paySplitSchema = new mongoose.Schema({

    ownedBy:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    ownedTo:{type:mongoose.Schema.Types.ObjectId, ref:"user"},
    amount:{type:Number},
    expense:{type:mongoose.Schema.Types.ObjectId, ref:"expense"},
},{timestamps:true})

export const paySplit= mongoose.model("paySplit",paySplitSchema) 