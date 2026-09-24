import Navbar from "../components/Navbar"
import GroupList from "../components/GroupList"

function Dashboard (){

    return<>
    <Navbar username="ayaz" balance={1200} />
    <GroupList />
    </>
}

export default Dashboard