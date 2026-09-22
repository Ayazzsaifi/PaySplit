
function GroupCard({ group }) {

    return <div className=" bg-[#0f0f0f] p-6 border border-[#222] rounded-xl flex justify-between">
        <div>
            <h3 className="text-white font-bold">{group.name}</h3>
            <h3 className="text-gray-400"> {group.expense} </h3>
            <h3 className="text-gray-400">{group.member} </h3>
        </div>
        <div>
            <h3 className="text-green-400"> {group.balance} </h3>
        </div>
    </div>
}

export default GroupCard