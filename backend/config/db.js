import mongoose from "mongoose"
export async function connectDb(){
    try{await mongoose.connect(process.env.MONGO_URI)
        console.log("connectDb")
    }
    catch(e){console.log("not connectDb" + e)}
}
