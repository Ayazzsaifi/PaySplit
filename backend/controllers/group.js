import { group } from "../models/group.js";
import { User } from "../models/user.js"

export const createGroup = async (req, res) => {
    const name = req.body.name;
    const memberUsername = req.body.memberUsername;
    const creatorID = req.userID;

    const members = await Promise.all(memberUsername.map((e) => {
        return User.findOne({ username: e })
    }))

    const memberExist = members.some(m => m === null)

    if (memberExist) {
        return res.status(404).json({ error: "userNot found" })
    }

    const membersIds = members.map(e => e._id)
    membersIds.push(creatorID)


    try {
        await group.create({ name: name, creatorID: creatorID, members: membersIds })
        res.status(200).json({ message: "Group Created" })
    } catch (e) {
        res.status(400).json({ e })
    }

}


export const getGroup = async (req, res) => {
    const userID = req.userID
    try {
        const groupIn = await group.find({ members: userID })
        if(groupIn.length === 0){
            return res.status(404).json({error:"No group Found"})
        }
        res.status(200).json({message:groupIn})


    }
    catch(e){
        res.status(500).json({ error: "Internal server error" })
    }
}

export const getGroupById = async (req,res)=>{
    const groupId=req.params.groupId
    try{
    const searchGroupWithID= await group.findById(groupId);
    if(!searchGroupWithID){
        return res.status(404).json({error:"No group Found"})        
    }
    res.json({message:searchGroupWithID})}
    catch(e){
        res.status(500).json({ error: "Internal server error" })
    }
}

export const deleteGroup= async (req,res)=>{
    const userID=req.userID
    const groupID=req.params.groupID

    try{
        const groupExist=await group.findById(groupID)
        if(!groupExist){res.status(404).json({error:"No group Found"})}
        else{
            if(groupExist.creatorID.toString()===userID.toString()){
            await group.deleteOne({_id:groupExist._id})
            res.status(200).json({message:"Successfully Deleted"})
        }
        else{
            return res.status(403).json({error:"youre not a creator"})
        }}
    }
    catch (e) {
        res.status(500).json({ error: e })

    }
}