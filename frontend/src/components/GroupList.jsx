import { useEffect, useState } from "react"
import GroupCard from "./GroupCard"
function GroupList(){
    const [groupList, setGroupList]=useState([])    
    useEffect(()=>{
        getList()
    },[])

    return<div className="bg-[#0f0f0f] p-6">
        <h2>Your Groups</h2>
        <div>
            
        </div>
        <button>Add Button</button>
        <button>See More</button>

    </div>
}


export default GroupList
