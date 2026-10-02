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
        <h3 className="text-3xl font-bold">Pay <span className="text-indigo-500 ">Split</span></h3>
        <p className="text-gray-400 text-sm ">Split bills, not friendships</p>
        <div className="flex flex-col gap-4 w-60">
        <input className=" bg-[#1c1c1c] border rounded-lg px-4 py-2" type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username" />
        <input className=" bg-[#1c1c1c] border rounded-lg px-4 py-2" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
        <p className="text-red-500">{error}</p>
        <button className=" cursor-pointer bg-indigo-500 rounded-full px-4 py-2" onClick={loginSubmit}>Log in</button>
        </div>

    </div>
}

export default Login