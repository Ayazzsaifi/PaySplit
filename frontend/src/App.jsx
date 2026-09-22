import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import GroupDetail from "./pages/GroupDetail";

function App() {

    return <>
        <BrowserRouter>
            <div className="bg-[#0f0f0f] min-h-screen">
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/group/:id" element={<GroupDetail />} />

            </Routes>
        </div>

    </BrowserRouter >
    </>
}

export default App