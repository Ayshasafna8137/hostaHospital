import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./pages/Sidebar";
import TopBar from "./pages/TopBar";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [theme, setTheme] = useState("light");

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} />

      {/* Main Content - margin changes based on sidebar state */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${
        sidebarOpen ? 'ml-64' : 'ml-20'  // ← FIXED: matches sidebar widths
      }`}>
        <TopBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          theme={theme}
          setTheme={setTheme}
        />

        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add other routes as needed */}
            {/* <Route path="/patients" element={<Dashboard />} />
            <Route path="/doctors" element={<Dashboard />} />
            <Route path="/appointments" element={<Dashboard />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;