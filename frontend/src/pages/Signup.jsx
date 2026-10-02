import { useState } from "react"

function Signup(){
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [username,setusername]=useState("")
    const [error,setError]=useState("")
    
    async function SignupButton(){
        const response= await fetch("http://localhost:3000/api/auth/signup",
            {headers:{"Content-Type": "application/json"},
            method:POST,
            Body:JSON.stringify({username:username,email:email,password:password})
        })
        const data=await response.json()
        console.log(data)
    }

    return<div>
        <h3>Sign Up</h3>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="password" />
    </div>
}

export default Signup