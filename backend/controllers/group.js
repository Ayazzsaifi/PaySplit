import { group } from "../models/group";
import { User } from "../models/user"

export const createGroup = async (req, res) => {
    const name = req.body.name;
    const memberUsername = req.body.memberUsername;
    const creatorID = req.userID;

    const members = await Promise.all(memberUsername.map((e) => {
        return User.findOne({ username: e })
    }))

    const memberExist = members.some(m=> m=== null)

    if(memberExist){
        return res.status(404).json({error:"userNot found"})
    }

    const  membersIds = members.map(e =>e._id) 
    membersIds.push(creatorID)


    try {
        await group.create({ name: name, creatorID: creatorID, members: membersIds })
        res.status(200).json({ message: "Group Created" })
    } catch (e) {
        res.status(400).json({ e })
    }

}