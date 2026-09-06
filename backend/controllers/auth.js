import { User } from "../models/user.js";
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
            const token = jwt.sign({userID:saveData._id},process.env.JWT_SECRET,{expiresIn :'7d'})
            return res.status(200).json({token:token,message:"Your SignUp"})
        }
        catch(e){
            res.json({error:e})
        }
    
    }

}

export async function logIn (req,res){
    const username= req.body.username;
    const password =req.body.password;


    const userExist= await User.findOne({username})
    if(userExist){
        const passValid =await bcrypt.compare(password,userExist.password)
        if(passValid){
            const token= jwt.sign({userID:userExist._id},process.env.JWT_SECRET,{expiresIn:'7d'})
            return res.status(200).json({token})
        }else{
            res.status(401).json({error:"Password is incorrect"})
        }
    }
    else{
        res.status(404).json({error:"User not found Create Account"})
    }


}