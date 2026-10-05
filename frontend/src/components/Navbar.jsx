import { useNavigate } from "react-router-dom"

function Navbar({ balance, username }) {
    const navigateTo = useNavigate()


    function logout() {
        localStorage.removeItem("token","username")
        navigateTo("/login")
    }
    return <>
        <nav className="bg-[#0f0f0f] flex justify-between items-center px-6 py-4 border-b border-[#222]">
            <div>
                <h3><span className="text-white">Pay</span> <span className="text-indigo-500" >Split</span></h3>
            </div>
            <div className=" flex gap-4 items-center">
                <div className="flex flex-col"><span className="text-xs text-gray-400">you are owed</span> <span className="text-green-400 font-semibold"> {balance} </span> </div>
                <div className="w-px h-8 bg-[#333]"></div>

                <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-indigo-500 rounded-full font-semibold text-white flex justify-center items-center">{username.toUpperCase().slice(0, 1)} </div>

                    <div className="flex flex-col items-start">
                        <p className="text-white font-semibold">{username}</p>
                        <button className="text-xs text-gray-300 hover:text-white  cursor-pointer" onClick={logout}>Log out</button>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
export default Navbar