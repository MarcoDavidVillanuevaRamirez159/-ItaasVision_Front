import { NavLink } from "react-router-dom";
import logo from "../logo.png";
import {
  Squares2X2Icon,
  Cog6ToothIcon,
  BellIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

function Sidebar() {
  const linkBase =
    "mx-2 flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-700/40 hover:text-white";

  return (
    <aside className="h-full w-16 shrink-0 border-r border-white/5 bg-[#0c111a]">
      <div className="flex h-16 items-center justify-center">
        {/* Solo logo, sin texto y sin fondo */}
        <img src={logo} alt="logo" className="h-8 w-8 bg-transparent" />
      </div>
      <nav className="mt-2 grid gap-1">
        <NavLink
          to="/"
          end
          aria-label="Dashboard"
          title="Dashboard"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-slate-700/50 text-white" : ""}`
          }
        >
          <Squares2X2Icon className="h-6 w-6" />
        </NavLink>
        <NavLink
          to="/camaras"
          aria-label="Cámaras"
          title="Cámaras"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-slate-700/50 text-white" : ""}`
          }
        >
          <CameraIcon className="h-6 w-6" />
        </NavLink>
        <NavLink
          to="/alertas"
          aria-label="Alertas"
          title="Alertas"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-slate-700/50 text-white" : ""}`
          }
        >
          <BellIcon className="h-6 w-6" />
        </NavLink>
        <NavLink
          to="/ajustes"
          aria-label="Ajustes"
          title="Ajustes"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-slate-700/50 text-white" : ""}`
          }
        >
          <Cog6ToothIcon className="h-6 w-6" />
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
