import { useEffect, useState } from "react"
import AddGroupModal from "./AddGroupModal"
import { useNavigate } from "react-router-dom"
import GroupCard from "./GroupCard"
function GroupList(props) {
    const [groupList, setGroupList] = useState([])
    const [showModal, setShowModal] = useState(false)
    const navigateTo = useNavigate();
    useEffect(() => {
        if (!localStorage.token) {
            navigateTo("/login")
        }
        else {
            getList()
        }
    }, [])



    async function getList() {
        const response = await fetch("http://localhost:3000/api/group/getGroups", { headers: { "Authorization": "Bearer " + localStorage.getItem("token") } })
        const data = await response.json()
        if(data.success ==="yes"){
           
            setGroupList(data.message)
            props.loadingChange(false)
        }
        else{
            navigateTo("/login")
        }
    }

    return <div className="bg-[#0f0f0f] p-6">
        <div className="flex justify-between">
            <h2 className="text-xl text-white font-bold ">Your Groups</h2>
            <div className=" flex gap-4">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg " onClick={() => setShowModal(true)}>Add Group</button>
                <button className="border-[#444] px-4 py-2 rounded-lg text-white ">See More</button>
            </div>
        </div>
        <div>
            {groupList.map((group) => <GroupCard key={group._id} group={group} />)}
        </div>
        <AddGroupModal isopen={showModal} onclose={() => setShowModal(false)} />
    </div>

}



export default GroupList
