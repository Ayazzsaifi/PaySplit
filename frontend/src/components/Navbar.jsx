function Navbar({ balance, username }) {

    return <>
        <nav className="bg-[#0f0f0f] flex justify-between items-center px-6 py-4 border-b border-[#222]">
            <div>
                <h3><span className="text-white">Pay</span> <span className="text-indigo-500" >Split</span></h3>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm"> <span className="text-gray-400">Hi</span> </p>
                <p><span className="text-2xl font-medium text-white" >{username}</span></p></div>
            <div className="flex flex-col items-end">
                <p> <span className="text-gray-400">you are owed</span> </p>
                <span className="text-green-400"  >{balance}</span></div>
        </nav>
    </>
}
export default Navbar