import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Stethoscope,
  CalendarDays,
  FlaskConical,
  Pill,
  UserCog,
} from "lucide-react";

const menu = [
  {
    title: "MAIN",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/" },
      { label: "Applications", icon: Users, path: "/applications" },
      { label: "Layouts", icon: Users, path: "/layouts" },
    ],
  },
  {
    title: "HEALTHCARE",
    items: [
      { label: "Patients", icon: Users, path: "/patients" },
      { label: "Doctors", icon: Stethoscope, path: "/doctors" },
      { label: "Requests", icon: CalendarDays, path: "/requests" },
      { label: "Appointments", icon: CalendarDays, path: "/appointments" },
      { label: "Visits", icon: CalendarDays, path: "/visits" },
      { label: "Laboratory", icon: FlaskConical, path: "/lab" },
      { label: "Pharmacy", icon: Pill, path: "/pharmacy" },
    ],
  },
  {
    title: "MANAGE",
    items: [{ label: "Staffs", icon: UserCog, path: "/staffs" }],
  },
];

export default function Sidebar({ sidebarOpen }) {
  const location = useLocation();

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-[#0f172a] text-white h-screen fixed left-0 top-0 flex flex-col shadow-lg transition-all duration-300`}
    >
      {/* Logo */}
      <div className="p-5 border-b border-slate-700">
        {sidebarOpen ? (
          <h1 className="text-lg font-semibold">Dreams EMR</h1>
        ) : (
          <h1 className="text-lg font-semibold text-center">D</h1>
        )}
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto p-3 space-y-6">
        {menu.map((section) => (
          <div key={section.title}>
            {sidebarOpen && (
              <p className="text-xs text-gray-400 mb-2">{section.title}</p>
            )}

            <div className="space-y-1">
              {section.items.map((item) => {
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center ${
                      sidebarOpen ? "gap-3 px-3" : "justify-center"
                    } py-2 rounded-md text-sm transition
                    ${
                      active
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    <item.icon size={18} />

                    {sidebarOpen && item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}