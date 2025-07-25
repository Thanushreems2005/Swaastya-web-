import React from "react";
import { useAuth } from "../../hooks/useAuth"; // To get user info for "Welcome, Dr. [Last Name]"
import { Link } from "react-router-dom"; // For internal links

function DoctorDashboard() {
  const { user, logout } = useAuth(); // Assuming 'user' object has firstName, lastName, specialty, role

  // Dummy data for demonstration
  const doctorLastName = user?.lastName || "Smith"; // Use actual user data if available
  const doctorSpecialty = user?.specialty || "Cardiologist"; // Use actual user data if available

  const appointments = {
    confirmed: 12,
    completed: 8,
    pending: 2,
    schedule: [
      {
        time: "09:00 AM",
        patient: "Alice Johnson",
        complaint: "Routine check-up",
        type: "Follow-Up",
        color: "bg-green-200",
      },
      {
        time: "09:30 AM",
        patient: "Bob Williams",
        complaint: "Acute Chest Pain",
        type: "New Patient",
        color: "bg-red-200",
      },
      {
        time: "10:00 AM",
        patient: "Charlie Brown",
        complaint: "Telehealth consult",
        type: "Telehealth",
        color: "bg-blue-200",
      },
      {
        time: "10:30 AM",
        patient: "Diana Prince",
        complaint: "Post-op follow-up",
        type: "Follow-Up",
        color: "bg-green-200",
      },
    ],
  };

  const alerts = {
    criticalLabResults: 1,
    unresolvedReferrals: 3,
  };

  const messages = {
    unread: 4,
    list: [
      {
        type: "Patient Query",
        from: "Patient A",
        snippet: "Regarding medication dosage...",
      },
      {
        type: "Colleague Consult",
        from: "Dr. B",
        snippet: "Consult on Case C...",
      },
      {
        type: "Patient Query",
        from: "Patient D",
        snippet: "Appointment reschedule request...",
      },
      {
        type: "Admin",
        from: "Hospital Admin",
        snippet: "Reminder for meeting...",
      },
    ],
  };

  const patients = [
    {
      mr: "MR1001",
      name: "Alice Johnson",
      ageSex: "45/F",
      lastVisit: "2025-07-20",
      diagnoses: ["Hypertension", "Diabetes"],
      allergies: ["Penicillin"],
    },
    {
      mr: "MR1002",
      name: "Bob Williams",
      ageSex: "62/M",
      lastVisit: "2025-07-24",
      diagnoses: ["Acute MI"],
      allergies: [],
    },
    {
      mr: "MR1003",
      name: "Charlie Brown",
      ageSex: "30/M",
      lastVisit: "2025-07-18",
      diagnoses: ["Anxiety"],
      allergies: ["Sulfa"],
    },
  ];

  const labTrends = [
    { metric: "HbA1c", value: "7.2%", trend: "up", normalRange: "< 6.5%" },
    {
      metric: "LDL",
      value: "135 mg/dL",
      trend: "down",
      normalRange: "< 100 mg/dL",
    },
  ];

  const notifications = [
    {
      type: "Critical",
      message: "STAT Lab: Potassium 2.5 (Patient MR1001)",
      color: "bg-red-500",
    },
    {
      type: "Urgent",
      message: "Overdue Chart: Patient MR1003 (Visit 2025-07-18)",
      color: "bg-yellow-500",
    },
    {
      type: "Routine",
      message: "Meeting Reminder: Dept. Meeting @ 2 PM",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {/* 1. Header & User Controls */}
        <header className="bg-white shadow-md rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-0">
            Welcome, Dr. {doctorLastName}, {doctorSpecialty}!
            <span className="block text-blue-600 text-base font-medium">
              Attending Physician
            </span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-sm">
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
              Help Desk
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
              Dark Mode
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition duration-200">
              Language
            </button>
          </div>
        </header>

        {/* System Shortcuts (Top Bar - as per criteria 10) */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-8 flex flex-wrap justify-around gap-4">
          <Link
            to="/order-sets"
            className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition duration-200"
          >
            <span className="text-3xl">📋</span>
            <span className="text-xs mt-1">Order Sets</span>
          </Link>
          <Link
            to="/hospital-roster"
            className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition duration-200"
          >
            <span className="text-3xl">🏥</span>
            <span className="text-xs mt-1">Hospital Roster</span>
          </Link>
          <Link
            to="/research-portal"
            className="flex flex-col items-center text-blue-600 hover:text-blue-800 transition duration-200"
          >
            <span className="text-3xl">📊</span>
            <span className="text-xs mt-1">Research Portal</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Real-Time Summary, Appointments, Notifications) */}
          <div className="lg:col-span-2 space-y-8">
            {/* 2. Real-Time Clinical Summary */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Today’s Clinical Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-gray-600">Appointments</p>
                  <p className="text-2xl font-bold text-blue-800">
                    {appointments.confirmed}
                  </p>
                  <p className="text-sm text-gray-500">
                    Confirmed ({appointments.completed} Completed,{" "}
                    {appointments.pending} Pending)
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-md">
                  <p className="text-gray-600">Alerts</p>
                  <p className="text-2xl font-bold text-yellow-800">
                    {alerts.criticalLabResults + alerts.unresolvedReferrals}
                  </p>
                  <p className="text-sm text-gray-500">
                    Critical Labs ({alerts.criticalLabResults}), Unresolved
                    Referrals ({alerts.unresolvedReferrals})
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-gray-600">Messages</p>
                  <p className="text-2xl font-bold text-green-800">
                    {messages.unread}
                  </p>
                  <p className="text-sm text-gray-500">
                    Unread ({messages.unread})
                  </p>
                </div>
              </div>

              {/* Messages Preview */}
              {messages.list.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-medium mb-3">Recent Messages</h4>
                  <ul className="space-y-2">
                    {messages.list.map((msg, index) => (
                      <li
                        key={index}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <span className="font-semibold text-blue-600 mr-2">
                          {msg.type}:
                        </span>
                        <span className="font-medium mr-1">{msg.from}</span> -{" "}
                        {msg.snippet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* 3. Dynamic Appointment Scheduler */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Today's Schedule
              </h3>
              <div className="space-y-4">
                {appointments.schedule.map((apt, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row items-start md:items-center p-4 rounded-md ${apt.color} shadow-sm hover:shadow-md transition duration-200`}
                  >
                    <div className="flex-shrink-0 w-24 font-bold text-gray-800 mb-2 md:mb-0">
                      {apt.time}
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-900">
                        {apt.patient}
                      </p>
                      <p className="text-sm text-gray-700">
                        {apt.complaint} ({apt.type})
                      </p>
                    </div>
                    <div className="flex-shrink-0 mt-3 md:mt-0 md:ml-4 space-x-2">
                      <button className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600">
                        📞 Telehealth
                      </button>
                      <button className="bg-green-500 text-white text-xs px-3 py-1 rounded hover:bg-green-600">
                        📝 Note
                      </button>
                      <button className="bg-purple-500 text-white text-xs px-3 py-1 rounded hover:bg-purple-600">
                        ✉️ Instructions
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Notifications & Priority Inbox */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Priority Inbox
              </h3>
              <div className="space-y-3">
                {notifications.map((notif, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-md flex items-center space-x-3 ${notif.color} text-white`}
                  >
                    <span className="font-bold">{notif.type}:</span>
                    <p className="flex-grow">{notif.message}</p>
                    <button className="text-sm underline hover:text-white/80">
                      View
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column (Patient Management, Clinical Decision Support, Documentation, Collaboration, Performance) */}
          <div className="lg:col-span-1 space-y-8">
            {/* 4. Patient Management Module */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Patient Management
              </h3>
              <input
                type="text"
                placeholder="Search patient by MR/name..."
                className="w-full p-2 border border-gray-300 rounded-md mb-4 text-sm"
              />
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {" "}
                {/* Added scrollbar */}
                {patients.map((patient, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition duration-200"
                  >
                    <p className="font-semibold text-gray-900">
                      {patient.name} ({patient.ageSex})
                    </p>
                    <p className="text-sm text-gray-600">
                      MR: {patient.mr} | Last Visit: {patient.lastVisit}
                    </p>
                    <p className="text-sm text-gray-600">
                      Dx: {patient.diagnoses.join(", ")}
                    </p>
                    {patient.allergies.length > 0 && (
                      <p className="text-sm text-red-600 font-medium flex items-center">
                        <span className="text-lg mr-1">🚨</span> Allergies:{" "}
                        {patient.allergies.join(", ")}
                      </p>
                    )}
                    <div className="mt-2 flex justify-end space-x-2">
                      <button className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded hover:bg-blue-200">
                        Full Chart
                      </button>
                      <button className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded hover:bg-yellow-200">
                        Request Records
                      </button>
                      <button className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded hover:bg-purple-200">
                        Flag
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Clinical Decision Support */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Clinical Decision Support
              </h3>
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-3">
                  Lab/Imaging Dashboard
                </h4>
                <ul className="space-y-2">
                  {labTrends.map((lab, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-700 flex justify-between items-center"
                    >
                      <span>
                        {lab.metric}:{" "}
                        <span
                          className={`font-bold ${
                            lab.trend === "up"
                              ? "text-red-600"
                              : "text-green-600"
                          }`}
                        >
                          {lab.value}
                        </span>{" "}
                        ({lab.normalRange})
                      </span>
                      <span
                        className={`text-xl ${
                          lab.trend === "up" ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {lab.trend === "up" ? "▲" : "▼"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-3">
                  E-Prescribing (eRx)
                </h4>
                <div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-3"
                  role="alert"
                >
                  <strong className="font-bold">
                    ⚠️ Drug Interaction Alert:
                  </strong>
                  <span className="block sm:inline">
                    {" "}
                    Warfarin + NSAID → Increased Bleeding Risk.
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Drug Name: Aspirin (Formulary: Covered)
                </p>
                <p className="text-sm text-gray-600">
                  Drug Name: Humira (Formulary: Prior Auth Needed)
                </p>
              </div>
            </section>

            {/* 6. Documentation & Workflow */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Documentation & Workflow
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">
                  Voice-to-Text Notes
                </h4>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                  rows="4"
                  placeholder="Start dictating or choose a template..."
                ></textarea>
                <div className="flex gap-2 mt-2 text-sm">
                  <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                    SOAP Template
                  </button>
                  <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                    H&P Template
                  </button>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">
                  Co-Signature Requests
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-700">
                    PA John Doe - Patient MR1005 (Requires your signature)
                  </li>
                  <li className="text-sm text-gray-700">
                    NP Jane Smith - Patient MR1006 (Requires your signature)
                  </li>
                </ul>
              </div>
            </section>

            {/* 9. Secure Collaboration Tools */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Secure Collaboration
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">
                  HIPAA-Compliant Chat
                </h4>
                <p className="text-sm text-gray-600 mb-2">
                  Recent chats: Nurse Sarah, Dr. Patel (Cardiology)
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  Start New Chat
                </button>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Referral Portal</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Pending outgoing referrals: 2
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  New incoming e-consults: 1
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  Manage Referrals
                </button>
              </div>
            </section>

            {/* 8. Performance Analytics */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Performance Analytics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-medium mb-2">Quality Metrics</h4>
                  <p className="text-md text-gray-700">
                    Charts Closed within 24h:{" "}
                    <span className="font-bold text-green-600">95%</span>
                  </p>
                  <p className="text-md text-gray-700">
                    Vaccine Compliance Rate:{" "}
                    <span className="font-bold text-blue-600">88%</span>
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2">
                    RVU Tracking (Current Quarter)
                  </h4>
                  <p className="text-md text-gray-700">
                    Total RVUs: <span className="font-bold">1250</span>
                  </p>
                  <p className="text-md text-gray-700">
                    Target RVUs: <span className="font-bold">1500</span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
