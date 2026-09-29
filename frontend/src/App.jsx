import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GroupDetail from "./pages/GroupDetail";
import Login from "./pages/Login";
function App() {

    return <>
        <BrowserRouter>
            <div className="bg-[#0f0f0f] min-h-screen">
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/group/:id" element={<GroupDetail />} />

            </Routes>
        </div>

    </BrowserRouter >
    </>
}

export default App