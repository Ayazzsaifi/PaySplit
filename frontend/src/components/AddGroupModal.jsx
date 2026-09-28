import { useState } from "react"


function AddGroupModal({ isopen, onclose }) {
    const [members, setMembers] = useState([])
    const [username, setUsername] = useState("")
    const [groupName, setGroupName] = useState("")
    if (!isopen) { return null }

    function handleAddMember() {
        setMembers([...members, username])
        setUsername("")

    }

    async function handleSubmit() {
        const response = await fetch("http://localhost:3000/api/group/createGroup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer " + localStorage.getItem("token")
            },
            body: JSON.stringify({ name: groupName, memberUsername: members })
        })
        setMembers([]);
        setUsername("")
        setGroupName("")
        onclose()
    }
    function handelClose() {
        setMembers([]);
        setUsername("")
        setGroupName("")
       onclose()
    }

    return <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
            <div className="bg-[#1a1a1a] p-6 rounded-xl w-96">

                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white ">Create Group</h3>
                    <button onClick={handelClose} className="text-gray-400 hover:text-white">X</button>
                </div>



                {members.map((member) => {
                    return <p className="text-gray-400 text-sm" key={member}>{member}</p>
                })}

                <input className="bg-[#2a2a2a] text-white border w-full rounded-lg p-2 mb-3" type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} placeholder="Group Name" />

                <div className="flex gap-2">
                    <input className="bg-[#2a2a2a] text-white border w-full rounded-lg p-2 mb-3" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Add member by Email" />
                    <button className="bg-indigo-500 text-white px-3 rounded-lg" onClick={handleAddMember}>Add Member</button>
                </div>
                <button onClick={handleSubmit} className="bg-green-500 text-white w-full py-2 rounded-lg mt-2" > Submit</button>
            </div>
        </div>
    </>
}

export default AddGroupModal

