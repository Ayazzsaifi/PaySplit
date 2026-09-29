import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login(){
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const takeToDashboard=useNavigate()
    

    function loginSubmit(){
        // sends data at backend
        takeToDashboard("/")
    }

    return <div>
        <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Username" />
        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password" />
        <p>{username}</p>
        <button onClick={loginSubmit}>Submit</button>

    </div>
}

export default Login