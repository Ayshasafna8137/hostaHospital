import React, { useState, useRef, useEffect } from "react";
import { Users, Calendar, Stethoscope, DollarSign, MoreVertical } from "lucide-react";

// DateDropdown component integrated directly
const DateDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("3 Apr 26 - 3 Apr 26");
  const ref = useRef(null);

  const options = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <Calendar size={16} />
        {selected}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden z-50">
          {options.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-600 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Dashboard() {
  const stats = [
    {
      title: "Patients",
      value: "108",
      icon: Users,
      color: "bg-blue-500",
      change: "+20%",
      changeColor: "text-green-600 bg-green-100",
    },
    {
      title: "Appointments",
      value: "658",
      icon: Calendar,
      color: "bg-orange-500",
      change: "-15%",
      changeColor: "text-red-600 bg-red-100",
    },
    {
      title: "Doctors",
      value: "565",
      icon: Stethoscope,
      color: "bg-purple-500",
      change: "+18%",
      changeColor: "text-green-600 bg-green-100",
    },
    {
      title: "Transactions",
      value: "$5,523.56",
      icon: DollarSign,
      color: "bg-pink-500",
      change: "+12%",
      changeColor: "text-green-600 bg-green-100",
    },
  ];

  const appointmentRequests = [
    { name: "Dominic Foster", dept: "Urology", date: "12 Aug 2025", time: "11:35 PM" },
    { name: "Charlotte Bennett", dept: "Cardiology", date: "06 Aug 2025", time: "09:58 AM" },
    { name: "Ethan Sullivan", dept: "Dermatology", date: "01 Aug 2025", time: "12:10 PM" },
    { name: "Brianna Thompson", dept: "ENT Surgery", date: "26 Jul 2025", time: "02:30 PM" },
  ];

  const allAppointments = ["Urology", "Cardiology", "Dermatology", "ENT Surgery"];

  return (
    <div className="p-4 md:p-6 bg-gray-50 dark:bg-gray-900 min-h-screen transition-all duration-300">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
            Welcome, Admin
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            Today you have 10 visits • <button className="text-blue-600 hover:underline">View Details</button>
          </p>
        </div>

        {/* Date Dropdown - Replaces Search Bar */}
        <DateDropdown />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-5 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${item.color} p-3 rounded-lg`}>
                <item.icon className="text-white" size={22} />
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${item.changeColor}`}>
                {item.change}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{item.value}</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{item.title}</p>
            <div className="mt-4 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full ${item.color.replace('bg-', 'bg-')}`}
                style={{ width: `${Math.abs(parseInt(item.change)) * 2}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointment Requests Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-semibold text-gray-800 dark:text-white">Appointment Request</h3>
            <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
              View All Appointments →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900/50">
                <tr>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 dark:text-gray-400">Patient Name</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 dark:text-gray-400">Department</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 dark:text-gray-400">Date</th>
                  <th className="text-left p-4 text-xs font-medium text-gray-500 dark:text-gray-400"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {appointmentRequests.map((request, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="p-4">
                      <p className="font-medium text-gray-800 dark:text-white text-sm">{request.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{request.time}</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        {request.dept}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-300">{request.date}</td>
                    <td className="p-4">
                      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column - Patients Statistics & All Appointments */}
        <div className="space-y-6">
          {/* Patients Statistics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold text-gray-800 dark:text-white">Patients Statistics</h3>
              <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">View All →</button>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">480</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">New (96)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">Old (384)</span>
                  </div>
                </div>
              </div>
              {/* Bar Chart Visualization */}
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Jan</span>
                    <span>45 patients</span>
                  </div>
                  <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-lg" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Feb</span>
                    <span>62 patients</span>
                  </div>
                  <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-lg" style={{ width: "62%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Mar</span>
                    <span>78 patients</span>
                  </div>
                  <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div className="h-full bg-pink-500 rounded-lg" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                    <span>Apr</span>
                    <span>54 patients</span>
                  </div>
                  <div className="h-8 bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <div className="h-full bg-orange-500 rounded-lg" style={{ width: "54%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* All Appointments Categories */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-gray-800 dark:text-white">All Appointments</h3>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3">
              {allAppointments.map((appt, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{appt}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}