// src/pages/Nurse/NurseDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth"; // Assuming useAuth is correctly configured

function NurseDashboard() {
  const { user } = useAuth();
  const nurseName = user?.firstName || user?.email || "Valued Nurse"; // Use nurse's name from context

  // Dummy Data for demonstration
  const activePatients = [
    {
      id: "P001",
      bed: "101A",
      name: "Alice Smith",
      age: 68,
      sex: "F",
      diagnosis: "Pneumonia",
      allergies: "Penicillin",
      status: "high-risk",
      risk: "Fall Risk",
    },
    {
      id: "P002",
      bed: "102B",
      name: "Bob Johnson",
      age: 45,
      sex: "M",
      diagnosis: "Appendicitis",
      allergies: "N/A",
      status: "stable",
    },
    {
      id: "P003",
      bed: "103C",
      name: "Carol White",
      age: 72,
      sex: "F",
      diagnosis: "CHF Exacerbation",
      allergies: "Sulfa",
      status: "pending-discharge",
      risk: "Isolation",
    },
    {
      id: "P004",
      bed: "104A",
      name: "David Lee",
      age: 33,
      sex: "M",
      diagnosis: "Fractured Tibia",
      allergies: "N/A",
      status: "stable",
    },
  ];

  const clinicalAlerts = [
    {
      id: 1,
      type: "critical-lab",
      message: "K+ 2.8 – Dr. Smith notified for Bed 101A (Alice Smith)",
      time: "10:30 AM",
    },
    {
      id: 2,
      type: "med-alert",
      message: "Missed scheduled Tylenol for Bed 103C (Carol White)",
      time: "10:00 AM",
    },
    {
      id: 3,
      type: "iv-alert",
      message: "Drip completion (Saline) for Bed 102B (Bob Johnson) in 15 mins",
      time: "11:15 AM",
    },
    {
      id: 4,
      type: "new-order",
      message:
        "New order: STAT CT scan for Bed 101A (Alice Smith) requiring verification",
      time: "11:05 AM",
    },
  ];

  const shiftTasks = [
    {
      id: 1,
      task: "Administer oral meds for Bed 101A",
      due: "12:00 PM",
      completed: false,
      type: "med",
    },
    {
      id: 2,
      task: "Perform wound care for Bed 104A",
      due: "1:00 PM",
      completed: false,
      type: "procedure",
    },
    {
      id: 3,
      task: "Take vitals for all assigned patients",
      due: "11:30 AM",
      completed: true,
      type: "vitals",
    },
    {
      id: 4,
      task: "Blood draw for Bed 103C",
      due: "12:30 PM",
      completed: false,
      type: "lab",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "high-risk":
        return "bg-red-200 text-red-800";
      case "pending-discharge":
        return "bg-yellow-200 text-yellow-800";
      case "stable":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case "critical-lab":
        return "bg-red-100 text-red-800 border-red-400";
      case "med-alert":
        return "bg-orange-100 text-orange-800 border-orange-400";
      case "iv-alert":
        return "bg-blue-100 text-blue-800 border-blue-400";
      case "new-order":
        return "bg-purple-100 text-purple-800 border-purple-400";
      default:
        return "bg-gray-100 text-gray-800 border-gray-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-10">
      {/* 1. Header & Quick Access */}
      <header className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold text-purple-700">
          Welcome, <span className="font-bold">{nurseName}</span>, RN |
          Unit/Department
          {user?.role === "charge_nurse" && (
            <span className="ml-2 px-3 py-1 bg-purple-200 text-purple-800 text-xs font-medium rounded-full">
              Charge Nurse
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-center space-x-2 md:space-x-4 mt-4 md:mt-0">
          <button className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition duration-200">
            🚨 Rapid Response
          </button>
          <button className="px-3 py-1 bg-red-700 text-white rounded-md text-sm hover:bg-red-800 transition duration-200">
            Code Blue
          </button>
          <button className="px-3 py-1 bg-yellow-500 text-gray-800 rounded-md text-sm hover:bg-yellow-600 transition duration-200">
            Pharmacy Call
          </button>
          {/* Add Account Settings Link for Nurse Profile */}
          <Link
            to="/nurse/profile"
            className="px-4 py-2 bg-purple-100 text-purple-800 rounded-md hover:bg-purple-200 transition duration-200 text-sm"
          >
            Account Settings
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area (2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-8">
          {/* 2. Patient Assignment & Census */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
              Patient Assignment & Census
            </h2>
            <div className="mb-4 flex space-x-2">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300">
                Filter by Unit
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300">
                Filter by Acuity
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300">
                Filter by Provider
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Bed #
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Patient Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Age/Sex
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Diagnosis
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Allergies
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {activePatients.map((patient) => (
                    <tr key={patient.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {patient.bed}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {patient.name}{" "}
                        {patient.risk && (
                          <span className="ml-2 px-2 py-0.5 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                            {patient.risk}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {patient.age}/{patient.sex}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {patient.diagnosis}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {patient.allergies}{" "}
                        {patient.allergies !== "N/A" && (
                          <span className="ml-1 text-red-500">🚨</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                            patient.status
                          )}`}
                        >
                          {patient.status.replace("-", " ")}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-purple-600 hover:text-purple-900 mr-2">
                          Assign to self
                        </button>
                        <button className="text-purple-600 hover:text-purple-900 mr-2">
                          Handoff
                        </button>
                        <button className="text-purple-600 hover:text-purple-900">
                          Transfer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 4. Task Management */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
              Shift Task Management
            </h2>
            <div className="space-y-4">
              {shiftTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-md shadow-sm"
                >
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => alert(`Toggle task "${task.task}"`)}
                    className="form-checkbox h-5 w-5 text-purple-600 rounded"
                  />
                  <div className="flex-1">
                    <p
                      className={`text-gray-900 font-medium ${
                        task.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {task.task}
                    </p>
                    <p className="text-sm text-gray-500">Due: {task.due}</p>
                  </div>
                  <button className="px-3 py-1 bg-purple-100 text-purple-800 rounded-md text-xs hover:bg-purple-200">
                    Delegate
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Workflow Integration */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
              Workflow Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 rounded-md shadow-sm">
                <h3 className="text-lg font-medium text-purple-700 mb-2">
                  Electronic MAR (eMAR)
                </h3>
                <p className="text-sm text-gray-600">
                  Scan-to-administer medications, PRN documentation, drug
                  interaction warnings.
                </p>
                <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
                  Go to eMAR
                </button>
              </div>
              <div className="p-4 bg-purple-50 rounded-md shadow-sm">
                <h3 className="text-lg font-medium text-purple-700 mb-2">
                  Flowsheet Documentation
                </h3>
                <p className="text-sm text-gray-600">
                  One-click vitals entry, I&O tracking, comprehensive patient
                  assessment.
                </p>
                <button className="mt-3 px-4 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700">
                  Open Flowsheet
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar (1/3 width on large screens) */}
        <div className="lg:col-span-1 space-y-8">
          {/* 3. Real-Time Clinical Alerts */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
              Real-Time Clinical Alerts 🔔
            </h2>
            <div className="space-y-4">
              {clinicalAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded-md border-l-4 ${getAlertColor(
                    alert.type
                  )}`}
                >
                  <p className="font-medium text-sm">{alert.message}</p>
                  <p className="text-xs text-gray-600 mt-1">{alert.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Communication Hub */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
              Communication Hub
            </h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm">
                Secure Messaging (MD/Nurse/PT)
              </button>
              <button className="w-full px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-500 text-sm">
                Family Updates (Templates)
              </button>
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 text-sm">
                Handoff Tool (SBAR)
              </button>
            </div>
          </section>

          {/* 7. Resource Quick Links */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
              Resource Quick Links
            </h2>
            <ul className="list-disc list-inside space-y-2 text-purple-700">
              <li>
                <a href="#" className="hover:underline">
                  Hospital Protocols
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Drug Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  IV Drip Rate Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Equipment Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Lab Reference Values
                </a>
              </li>
            </ul>
          </section>

          {/* 8. Analytics & Compliance */}
          <section className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4 border-b pb-2">
              Analytics & Compliance
            </h2>
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center">
                <span className="w-3 h-3 bg-blue-300 rounded-full mr-2"></span>{" "}
                Fall Rates:{" "}
                <span className="font-semibold ml-1">↓ 15% this month</span>
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-green-300 rounded-full mr-2"></span>{" "}
                CAUTI Prevention:{" "}
                <span className="font-semibold ml-1">98% Compliant</span>
              </p>
              <p className="flex items-center">
                <span className="w-3 h-3 bg-yellow-300 rounded-full mr-2"></span>{" "}
                CLABSI Prevention:{" "}
                <span className="font-semibold ml-1">95% Compliant</span>
              </p>
              <button className="mt-3 px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm hover:bg-gray-300">
                View Audit Log
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default NurseDashboard;
