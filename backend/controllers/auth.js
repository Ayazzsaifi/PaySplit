import { User } from "../models/user";
import z from "zod";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const signupSchema =z.object({
    username:z.string(),
    password:z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,"passsword should contain at least one uppercase, one lowercase, one number, and one special character"),
    email:z.string().email()
    
})

export const signup = async (req,res)=>{
    const result= signupSchema.safeParse(req.body)
    if (!result.success){
       return res.status(400).json({error:result.error.errors})
    }
    const username= result.data.username;
    const email=result.data.email;
    
    const userExist= await User.findOne({$or:[{username},{email}]})

    if(userExist){
        return res.json({error:"User Already Exist"})
    }
    else{
        const password=result.data.password
        const hasedPassword=await bcrypt.hash(password,8)
        try{
            const saveData=await User.create({username:result.data.username,password:hasedPassword,email:result.data.email})
            const token = jwt.sign({userID:saveData._id},process.env.JWT_SECRET)
            return res.status(200).json({token:token,message:"Your SignUp"})
        }
        catch(e){
            res.json({error:e})
        }
    
    }

}