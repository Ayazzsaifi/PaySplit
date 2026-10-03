import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")
    const [error, setError] = useState("")
    const navigateToLogin=useNavigate()

    async function SignupButton() {
        const response = await fetch("http://localhost:3000/api/auth/signup",
            {
                headers: { "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({ username: username, email: email, password: password })
            })
        const data = await response.json()
        console.log(data)
        const isArry = Array.isArray(data.error)
        if (isArry) {
            if (data.error[0].path[0] === "password") {
                setError("Password: 8+ chars, upper, lower, number & symbol")
            }
            else if (data.error[0].path[0] === "email") {
                setError("Email not valid")
            }
        }
        else if(data.error === "User Already Exist"){
            setError("User Already Exist")
        }

        if(data.token && data.message){
            navigateToLogin( "/login" )
        }
        
    }

    return <div className=" bg-[#0f0f0f] flex min-h-screen flex-col  justify-center items-center gap-4 text-white">
        <h3 className="text-3xl font-bold">Pay <span className="text-indigo-500 ">Split</span></h3>
        <p className="text-sm text-gray-400">Create your account</p>
        <input className=" bg-[#1c1c1c] border rounded-lg px-4 py-2" type="text" value={username} placeholder="Username" onChange={(e) => setusername(e.target.value)} />
        <input className=" bg-[#1c1c1c] border rounded-lg px-4 py-2" type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
        <input className=" bg-[#1c1c1c] border rounded-lg px-4 py-2" type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="password" />
        <p className="text-red-500">{error}</p>
        <button className=" cursor-pointer bg-indigo-500 rounded-full px-4 py-2" onClick={SignupButton}>Sign Up</button>
        <div>
            <p>Already have an account? <button className="text-indigo-500" onClick={()=>{navigateToLogin("/login")}}>Log in</button></p>
        </div>
    </div>
}

export default Signup