import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function PatientLayout() {
  const { user } = useAuth();
  const patientName = user?.firstName || "Patient";
  const location = useLocation();

  const sidebarNav = [
    { name: "Home", href: "/patient/dashboard", icon: "Home" },
    {
      name: "Medical Records",
      href: "/patient/dashboard/records",
      icon: "Records",
    },
    {
      name: "Prescriptions",
      href: "/patient/dashboard/prescriptions",
      icon: "Rx",
    },
    { name: "Doctors", href: "/patient/dashboard/doctors", icon: "Doctors" },
    { name: "Pharmacy", href: "/patient/dashboard/pharmacy", icon: "Pharmacy" },
    { name: "Contact", href: "/patient/dashboard/contact", icon: "Contact" },
    { name: "Help", href: "/patient/dashboard/help", icon: "Help" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-100 font-sans antialiased">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 shadow-lg border-r border-gray-800 flex flex-col">
        <div className="mb-10">
          <img src="/Swaastya-web-/swaastya-logo.png" alt="Swaastya Logo" className="h-24" />
        </div>
        <nav className="flex-grow">
          <ul className="space-y-4">
            {sidebarNav.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition duration-200 
                    ${
                      location.pathname === item.href
                        ? "bg-blue-700 text-white shadow-md"
                        : "text-gray-300 hover:bg-gray-800 hover:text-white"
                    }`}
                >
                  <span className="text-base font-semibold w-16 text-left">
                    {item.icon}
                  </span>{" "}
                  {/* Adjusted for text icons */}
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-800 text-gray-500 text-sm">
          <p>&copy; 2025 Swaastya</p>
          <p>Welcome, {patientName}</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 overflow-auto">
        <header className="bg-gray-900 shadow-lg rounded-xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center border border-gray-800">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <h1 className="text-2xl md:text-3xl font-semibold text-white">
              Patient Dashboard
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/settings"
              className="px-4 py-2 bg-blue-800 text-blue-100 rounded-lg hover:bg-blue-700 transition duration-200 text-sm"
            >
              Account Settings
            </Link>
            <Link
              to="/security"
              className="px-4 py-2 bg-blue-800 text-blue-100 rounded-lg hover:bg-blue-700 transition duration-200 text-sm"
            >
              Security & 2FA
            </Link>
            <div className="bg-red-700 text-white p-3 rounded-lg text-sm flex items-center space-x-2">
              <span className="text-lg">🚨</span>
              <span>In an emergency, call 911 or go to the nearest ER.</span>
            </div>
          </div>
        </header>
        <Outlet /> {/* This is where nested route components will render */}
      </main>
    </div>
  );
}

export default PatientLayout;
