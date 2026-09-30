import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const takeToDashboard=useNavigate()
    

    async function loginSubmit(){
        const response=await fetch("http://localhost:3000/api/auth/login",{
            headers:{"Content-Type": "application/json"},
            method:"POST",
            body:JSON.stringify({username:username,password:password})
        })
        const data= await response.json()
        if(data.token){
            localStorage.setItem( "token",data.token)
            takeToDashboard("/")
        }
        else{
            setError("invalid Username Or Password")
        }
    }

    return <div className=" bg-[#0f0f0f] flex min-h-screen flex-col justify-center items-center text-white gap-4 ">
        <div className="flex flex-col gap-4 w-60">
        <input className=" bg-[#1c1c1c] border rounded-lg px-4 py-2" type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username" />
        <input className=" bg-[#1c1c1c] border rounded-lg px-4 py-2" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
        <p className="text-red-500">{error}</p>
        <button className=" cursor-pointer bg-indigo-800 rounded-xl  px-4 py-2" onClick={loginSubmit}>Submit</button>
        </div>

    </div>
}

export default Login