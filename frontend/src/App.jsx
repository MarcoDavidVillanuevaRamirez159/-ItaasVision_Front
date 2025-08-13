import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Topbar from "./components/Topbar.jsx";

function App() {
  return (
    <div className="flex min-h-dvh w-screen bg-[#0b0f1a] text-slate-200">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="min-w-0 flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
