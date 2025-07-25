import React from "react";
import { useAuth } from "../../hooks/useAuth"; // To get user info for "Welcome, [Patient Name]"
import { Link } from "react-router-dom"; // For internal links

function PatientDashboard() {
  const { user } = useAuth(); // Assuming 'user' object has firstName, lastName
  const patientName = user?.firstName || "Alex"; // Use actual user data if available

  // Dummy Data for demonstration
  const vitals = {
    bp: "120/80 mmHg (Stable)",
    glucose: "95 mg/dL (Normal)",
    weight: "160 lbs (Trend: -5 lbs)",
    lastRecorded: "Jul 24, 2025",
  };

  const activeMedications = [
    {
      name: "Lisinopril",
      dosage: "10mg daily",
      refillStatus: "3 refills left",
      pharmacy: "CVS Pharmacy",
    },
    {
      name: "Metformin",
      dosage: "500mg BID",
      refillStatus: "Refill Due Soon",
      pharmacy: "Walgreens",
    },
  ];

  const alerts = [
    "Flu shot due (October 2025)",
    "Lab results ready (Lipid Panel)",
  ];

  const activeDiagnoses = [
    "Type 2 Diabetes – Stable",
    "Hypertension – Controlled",
  ];

  const upcomingAppointments = [
    {
      date: "Jul 30, 2 PM",
      provider: "Dr. Smith",
      specialty: "Cardiology",
      type: "Follow-Up",
      link: "#telehealth-link-1",
    },
    {
      date: "Aug 15, 10 AM",
      provider: "Dr. Jones",
      specialty: "Dermatology",
      type: "New Patient",
      link: "#telehealth-link-2",
    },
  ];

  const recentDocuments = [
    {
      type: "Lab Report",
      name: "Lipid Panel",
      date: "Jul 23, 2025",
      provider: "Dr. Smith",
    },
    {
      type: "Discharge Summary",
      name: "Hospital Stay (Jan 2025)",
      date: "Jan 28, 2025",
      provider: "Dr. Lee",
    },
    {
      type: "Immunization Record",
      name: "Flu Shot",
      date: "Oct 10, 2024",
      provider: "Clinic",
    },
  ];

  const messages = [
    {
      from: "Dr. Smith",
      subject: "Your biopsy results are normal!",
      date: "Jul 24, 2025",
    },
    {
      from: "Billing Dept",
      subject: "Upcoming payment reminder",
      date: "Jul 22, 2025",
    },
    {
      from: "Automated",
      subject: "Preventive care screening due",
      date: "Jul 20, 2025",
    },
  ];

  const claims = [
    {
      id: "C12345",
      date: "Jul 10, 2025",
      status: "Approved",
      insurer: "Blue Cross Blue Shield",
      amount: "$150",
    },
    {
      id: "C12346",
      date: "Jul 12, 2025",
      status: "Pending",
      insurer: "Aetna",
      amount: "$200",
    },
  ];

  const educationalResources = [
    { title: "Managing Hypertension: A Patient Guide", link: "#" },
    { title: "Healthy Eating for Diabetics", link: "#" },
    { title: "Understanding Your Lab Results", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-8 lg:p-10">
      <div className="max-w-7xl mx-auto">
        {/* 1. Secure Header & Quick Access */}
        <header className="bg-white shadow-md rounded-lg p-6 mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            {/* <img src="https://via.placeholder.com/60" alt="Profile" className="w-16 h-16 rounded-full border-2 border-blue-400" /> */}
            <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
              Welcome, {patientName}!
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              to="/settings"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition duration-200 text-sm"
            >
              Account Settings
            </Link>
            <Link
              to="/security"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200 transition duration-200 text-sm"
            >
              Security & 2FA
            </Link>
            <div className="bg-red-500 text-white p-3 rounded-lg text-sm flex items-center space-x-2">
              <span className="text-lg">🚨</span>
              <span>In an emergency, call 911 or go to the nearest ER.</span>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Health Summary, Appointments, Messaging) */}
          <div className="lg:col-span-2 space-y-8">
            {/* 2. Health Summary Snapshot */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Health Snapshot
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-center">
                <div className="bg-blue-50 p-4 rounded-md">
                  <p className="text-gray-600">Last BP</p>
                  <p className="text-xl font-bold text-blue-800">{vitals.bp}</p>
                  <p className="text-sm text-gray-500">
                    Recorded: {vitals.lastRecorded}
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-gray-600">Last Glucose</p>
                  <p className="text-xl font-bold text-green-800">
                    {vitals.glucose}
                  </p>
                  <p className="text-sm text-gray-500">
                    Recorded: {vitals.lastRecorded}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-md">
                  <p className="text-gray-600">Last Weight</p>
                  <p className="text-xl font-bold text-purple-800">
                    {vitals.weight}
                  </p>
                  <p className="text-sm text-gray-500">
                    Recorded: {vitals.lastRecorded}
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Active Medications
              </h3>
              <ul className="space-y-2 mb-6">
                {activeMedications.map((med, index) => (
                  <li
                    key={index}
                    className="bg-gray-50 p-3 rounded-md text-sm text-gray-700"
                  >
                    <span className="font-semibold">{med.name}</span> -{" "}
                    {med.dosage} ({med.refillStatus})
                    <span className="block text-xs text-gray-500">
                      Pharmacy: {med.pharmacy}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Alerts & Conditions
              </h3>
              <div className="space-y-2">
                {alerts.map((alert, index) => (
                  <p
                    key={index}
                    className="text-red-600 font-medium text-sm flex items-center"
                  >
                    <span className="text-lg mr-2">⚠️</span> {alert}
                  </p>
                ))}
                {activeDiagnoses.map((diag, index) => (
                  <p
                    key={index}
                    className="text-green-700 font-medium text-sm flex items-center"
                  >
                    <span className="text-lg mr-2">✅</span> {diag}
                  </p>
                ))}
              </div>
            </section>

            {/* 3. Upcoming Appointments & Actions */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Upcoming Appointments
              </h2>
              <div className="space-y-4">
                {upcomingAppointments.map((apt, index) => (
                  <div
                    key={index}
                    className="bg-blue-50 p-4 rounded-md flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:shadow-md transition duration-200"
                  >
                    <div>
                      <p className="font-semibold text-gray-900 text-lg mb-1">
                        {apt.date}
                      </p>
                      <p className="text-gray-700 text-sm">
                        with {apt.provider}, {apt.specialty} ({apt.type})
                      </p>
                    </div>
                    <div className="mt-3 md:mt-0 space-x-2">
                      {apt.type === "Telehealth" && (
                        <a
                          href={apt.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                        >
                          📲 Join Telehealth
                        </a>
                      )}
                      <button className="bg-yellow-500 text-white text-sm px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-200">
                        ✏️ Reschedule
                      </button>
                      <button className="bg-red-500 text-white text-sm px-4 py-2 rounded-md hover:bg-red-600 transition duration-200">
                        ❌ Cancel
                      </button>
                      <button className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200">
                        📲 Reminders
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Secure Messaging */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Secure Messaging
              </h2>
              <div className="space-y-3 mb-6">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-md shadow-sm"
                  >
                    <p className="font-semibold text-gray-900 mb-1">
                      From: {msg.from}{" "}
                      <span className="float-right text-xs text-gray-500">
                        {msg.date}
                      </span>
                    </p>
                    <p className="text-gray-700 text-sm">{msg.subject}</p>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Compose New Message
              </h3>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-md mb-3 text-sm focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Type your message here..."
              ></textarea>
              <div className="flex gap-2 mb-4 text-sm">
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                  Question about medication
                </button>
                <button className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
                  Appointment query
                </button>
              </div>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Send Message
              </button>
            </section>

            {/* 9. Educational Resources */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Educational Resources
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Personalized content based on your health profile:
              </p>
              <ul className="space-y-3 mb-6">
                {educationalResources.map((resource, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 p-3 rounded-md shadow-sm"
                  >
                    <Link
                      to={resource.link}
                      className="text-blue-700 hover:underline font-medium text-base block"
                    >
                      {resource.title}
                    </Link>
                    <p className="text-sm text-gray-600">
                      Provider-approved resource.
                    </p>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Trusted Health Information
              </h3>
              <div className="space-y-2 text-sm">
                <a
                  href="https://www.who.int/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block"
                >
                  World Health Organization (WHO)
                </a>
                <a
                  href="https://www.cdc.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block"
                >
                  Centers for Disease Control and Prevention (CDC)
                </a>
                <a
                  href="https://www.mayoclinic.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline block"
                >
                  Mayo Clinic
                </a>
              </div>
            </section>
          </div>

          {/* Right Column (Medical Records, Prescription, Health Trackers, Billing, Privacy) */}
          <div className="lg:col-span-1 space-y-8">
            {/* 4. Medical Records Hub */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Medical Records
              </h2>
              <input
                type="text"
                placeholder="Filter by type, date, provider..."
                className="w-full p-2 border border-gray-300 rounded-md mb-4 text-sm"
              />
              <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
                {recentDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-3 rounded-md shadow-sm flex justify-between items-center text-sm"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{doc.name}</p>
                      <p className="text-gray-600">
                        {doc.type} - {doc.date}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <button className="bg-blue-100 text-blue-800 px-2 py-1 rounded hover:bg-blue-200">
                        ⬇️ PDF
                      </button>
                      <button className="bg-green-100 text-green-800 px-2 py-1 rounded hover:bg-green-200">
                        🔗 Share
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Prescription Management */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Prescription Management
              </h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Current Medications
              </h3>
              <ul className="space-y-3 mb-6">
                {activeMedications.map((med, index) => (
                  <li
                    key={index}
                    className="bg-blue-50 p-4 rounded-md shadow-sm"
                  >
                    <p className="font-semibold text-gray-900 text-lg">
                      {med.name}
                    </p>
                    <p className="text-gray-700 text-sm">{med.dosage}</p>
                    <p className="text-gray-700 text-sm mb-2">
                      {med.refillStatus}
                    </p>
                    <button className="bg-green-600 text-white px-3 py-1 rounded-md text-sm hover:bg-green-700 transition duration-200">
                      🔄 Request Refill
                    </button>
                  </li>
                ))}
              </ul>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Drug Interactions
              </h3>
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm"
                role="alert"
              >
                <strong className="font-bold">⚠️ Warning:</strong>
                <span className="block sm:inline">
                  {" "}
                  Ibuprofen + Lisinopril → Consult MD for potential kidney
                  strain.
                </span>
              </div>
            </section>

            {/* 7. Health Trackers & Wearable Integration */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Health Trackers
              </h2>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Sync Data
                </h3>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200 mr-2">
                  Connect Fitbit
                </button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-200">
                  Connect Apple Health
                </button>
                <p className="text-sm text-gray-600 mt-3">
                  Last Sync: Jul 24, 2025, 4:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Manual Entry
                </h3>
                <input
                  type="number"
                  placeholder="Enter Glucose (mg/dL)"
                  className="w-full p-2 border border-gray-300 rounded-md mb-2 text-sm"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  Save Log
                </button>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  Trend Reports
                </h3>
                {/* Placeholder for a graph */}
                <div className="bg-gray-200 h-32 flex items-center justify-center rounded-md text-gray-500">
                  Blood Pressure Trend Over 6 Months (Graph Placeholder)
                </div>
              </div>
            </section>

            {/* 8. Billing & Insurance */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Billing & Insurance
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Outstanding Balances
                </h3>
                <p className="text-2xl font-bold text-red-600 mb-3">$125.00</p>
                <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition duration-200">
                  Pay Online
                </button>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Claims Status
                </h3>
                <ul className="space-y-3">
                  {claims.map((claim, index) => (
                    <li
                      key={index}
                      className="bg-gray-50 p-3 rounded-md shadow-sm text-sm"
                    >
                      <p className="font-semibold text-gray-900">
                        Claim ID: {claim.id} ({claim.status})
                      </p>
                      <p className="text-gray-700">
                        Date: {claim.date} | Insurer: {claim.insurer}
                      </p>
                      <p className="text-gray-700">Amount: {claim.amount}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 10. Privacy & Consent */}
            <section className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy & Consent
              </h2>
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Data Sharing Controls
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Manage who can access your health data.
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200">
                  Manage Permissions
                </button>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  Activity Log
                </h3>
                <p className="text-gray-700 text-sm">
                  Last login: Jul 25, 2025, 1:00 AM from Desktop (IP:
                  192.168.1.1)
                </p>
                <p className="text-gray-700 text-sm">
                  Record downloaded: Lipid Panel (Jul 24, 2025, 3:00 PM)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
