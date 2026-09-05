import jwt from "jsonwebtoken"
export const authMiddleware=(req,res,next)=>{
    try{
     if(req.headers.authorization){
          const token=req.headers.authorization.split(" ")[1]
          const validToken=jwt.verify(token,process.env.JWT_SECRET)
         if(validToken){
            req.userID=validToken.userID
            next()
        }}
        else{
            res.status(401).json({error:" Login First" })
        }
    }
    catch(e){
        res.status(401).json({error:e})
    }
}