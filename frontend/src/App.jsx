import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GroupDetail from "./pages/GroupDetail";

function App(){

    return<>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={ <Dashboard /> } />
        <Route path="/group/:id" element={<GroupDetail/> } />
    </Routes>
    
    </BrowserRouter>
    </>
}

export default App