import mongoose from "mongoose";

const groupSchema=new mongoose.Schema({
    name:{type:String},// group name 
    creatorID:{type:mongoose.Schema.Types.ObjectId , ref:"user"},
    members:[{type:mongoose.Schema.Types.ObjectId,ref: "user" }],

},{timestamps:true})

export const group = mongoose.model('group',groupSchema)