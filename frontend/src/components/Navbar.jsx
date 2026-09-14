function Navbar({ balance, usernmae }) {

    return <>
        <nav className="bg-[#0f0f0f] flex justify-between items-center px-6 py-4 border-b border-[#222]">
            <h3>pay <span className="text-indigo-500" >Split</span></h3>

            <p className="text-sm" >Hi <span className="text-2xl font-medium" >{usernmae}</span></p>
            <p>you are owed <span className="text-green-400"  >{balance}</span></p>
        </nav>
    </>
}
export default Navbar