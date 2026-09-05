import jwt from "jsonwebtoken"
export const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    try{
        const validToken=jwt.verify(token,process.env.JWT_SECRET)
        if(validToken){
            req.userID=validToken.userID
            next()
        }
    }
    catch(e){
        res.status(401).json({error:e})
    }
}