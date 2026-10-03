import Navbar from "../components/Navbar"
import GroupList from "../components/GroupList"
import { useState } from "react"

function Dashboard (){
    const [loading,setloading]=useState(true)

    return<>
    <Navbar username="ayaz" balance={1200} />
    <GroupList loadingChange={setloading} />
    {loading && <div className="fixed inset-0 bg-[#0f0f0f] flex justify-center items-center text-gray-400">Loading...</div>}

    </>
}

export default Dashboard