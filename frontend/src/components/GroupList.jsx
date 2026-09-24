import { useEffect, useState } from "react"

import GroupCard from "./GroupCard"
function GroupList() {
    const [groupList, setGroupList] = useState([])
    useEffect(() => {
        getList()
    }, [])

    async function getList() {
        const response = await fetch("http://localhost:3000/api/group", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
        const data = await response.json()
        setGroupList(data)
    }

    return <div className="bg-[#0f0f0f] p-6">
        <div className="flex justify-between">
            <h2 className="text-xl text-white font-bold ">Your Groups</h2>
            <div className=" flex gap-4">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg ">Add Group</button>
                <button className="border-[#444] px-4 py-2 rounded-lg text-white ">See More</button>
            </div>
        </div>
        <div>
            {groupList.map((group) => <GroupCard key={group._id} group={group} />)}
        </div>

    </div>

}



export default GroupList
