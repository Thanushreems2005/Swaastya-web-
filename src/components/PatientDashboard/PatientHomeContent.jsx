import React from "react";
import { Link } from "react-router-dom"; // For internal links

function PatientHomeContent() {
  // Dummy Data for demonstration
  const vitals = {
    bp: "120/80 mmHg (Stable)",
    glucose: "95 mg/dL (Normal)",
    weight: "160 lbs (Trend: -5 lbs)",
    lastRecorded: "Jul 24, 2025",
  };

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

  const educationalResources = [
    { title: "Managing Hypertension: A Patient Guide", link: "#" },
    { title: "Healthy Eating for Diabetics", link: "#" },
    { title: "Understanding Your Lab Results", link: "#" },
  ];

  // Dummy data for last hospital visit
  const lastHospitalVisit = {
    date: "Jul 15, 2025",
    day: "Monday",
    month: "July",
    reason: "Routine Check-up",
    provider: "Dr. Emily White",
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Health Summary, Appointments, Messaging) */}
        <div className="lg:col-span-2 space-y-8">
          {/* 2. Health Summary Snapshot */}
          <section className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Your Health Snapshot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-center">
              <div className="bg-gray-800 p-4 rounded-lg border border-blue-900">
                <p className="text-gray-400">Last BP</p>
                <p className="text-xl font-bold text-blue-400">{vitals.bp}</p>
                <p className="text-sm text-gray-500">
                  Recorded: {vitals.lastRecorded}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-green-900">
                <p className="text-gray-400">Last Glucose</p>
                <p className="text-xl font-bold text-green-400">
                  {vitals.glucose}
                </p>
                <p className="text-sm text-gray-500">
                  Recorded: {vitals.lastRecorded}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg border border-purple-900">
                <p className="text-gray-400">Last Weight</p>
                <p className="text-xl font-bold text-purple-400">
                  {vitals.weight}
                </p>
                <p className="text-sm text-gray-500">
                  Recorded: {vitals.lastRecorded}
                </p>
              </div>
            </div>

            <h3 className="text-xl font-medium text-white mb-3">
              Active Medications
            </h3>
            <ul className="space-y-2 mb-6">
              {/* Placeholder for active medications, as the full list is in PatientPrescriptions */}
              <li className="bg-gray-800 p-3 rounded-lg text-sm text-gray-300 border border-gray-700">
                View your active medications in the{" "}
                <Link
                  to="/patient/dashboard/prescriptions"
                  className="text-blue-400 hover:underline"
                >
                  Prescriptions
                </Link>{" "}
                section.
              </li>
            </ul>

            <h3 className="text-xl font-medium text-white mb-3">
              Alerts & Conditions
            </h3>
            <div className="space-y-2">
              {alerts.map((alert, index) => (
                <p
                  key={index}
                  className="text-red-500 font-medium text-sm flex items-center"
                >
                  <span className="text-lg mr-2">⚠️</span> {alert}
                </p>
              ))}
              {activeDiagnoses.map((diag, index) => (
                <p
                  key={index}
                  className="text-green-500 font-medium text-sm flex items-center"
                >
                  <span className="text-lg mr-2">✅</span> {diag}
                </p>
              ))}
            </div>
          </section>

          {/* 3. Upcoming Appointments & Actions */}
          <section className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Upcoming Appointments
            </h2>
            <div className="space-y-4">
              {upcomingAppointments.map((apt, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center shadow-sm hover:shadow-md transition duration-200 border border-gray-700"
                >
                  <div>
                    <p className="font-semibold text-white text-lg mb-1">
                      {apt.date}
                    </p>
                    <p className="text-gray-300 text-sm">
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
                    <button className="bg-yellow-600 text-white text-sm px-4 py-2 rounded-md hover:bg-yellow-700 transition duration-200">
                      ✏️ Reschedule
                    </button>
                    <button className="bg-red-600 text-white text-sm px-4 py-2 rounded-md hover:bg-red-700 transition duration-200">
                      ❌ Cancel
                    </button>
                    <button className="bg-gray-700 text-gray-100 text-sm px-4 py-2 rounded-md hover:bg-gray-600 transition duration-200">
                      📲 Reminders
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Secure Messaging */}
          <section className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Secure Messaging
            </h2>
            <div className="space-y-3 mb-6">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700"
                >
                  <p className="font-semibold text-white mb-1">
                    From: {msg.from}{" "}
                    <span className="float-right text-xs text-gray-400">
                      {msg.date}
                    </span>
                  </p>
                  <p className="text-gray-300 text-sm">{msg.subject}</p>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-medium text-white mb-3">
              Compose New Message
            </h3>
            <textarea
              className="w-full p-3 border border-gray-700 rounded-lg mb-3 text-sm bg-gray-800 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
            <div className="flex gap-2 mb-4 text-sm">
              <button className="bg-gray-700 text-gray-100 px-3 py-1 rounded-lg hover:bg-gray-600">
                Question about medication
              </button>
              <button className="bg-gray-700 text-gray-100 px-3 py-1 rounded-lg hover:bg-gray-600">
                Appointment query
              </button>
            </div>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
              Send Message
            </button>
          </section>

          {/* 9. Educational Resources */}
          <section className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Educational Resources
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Personalized content based on your health profile:
            </p>
            <ul className="space-y-3 mb-6">
              {educationalResources.map((resource, index) => (
                <li
                  key={index}
                  className="bg-gray-800 p-3 rounded-lg shadow-sm border border-gray-700"
                >
                  <Link
                    to={resource.link}
                    className="text-blue-400 hover:underline font-medium text-base block"
                  >
                    {resource.title}
                  </Link>
                  <p className="text-sm text-gray-400">
                    Provider-approved resource.
                  </p>
                </li>
              ))}
            </ul>
            <h3 className="text-xl font-medium text-white mb-3">
              Trusted Health Information
            </h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.who.int/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline block"
              >
                World Health Organization (WHO)
              </a>
              <a
                href="https://www.cdc.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline block"
              >
                Centers for Disease Control and Prevention (CDC)
              </a>
              <a
                href="https://www.mayoclinic.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline block"
              >
                Mayo Clinic
              </a>
            </div>
          </section>
        </div>

        {/* Right Column (Last Hospital Visit) */}
        <div className="lg:col-span-1 space-y-8">
          {/* NEW: Last Hospital Visit */}
          <section className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Last Hospital Visit
            </h2>
            <div className="grid grid-cols-3 gap-4 text-center mb-6">
              <div className="bg-gray-800 p-3 rounded-lg border border-blue-900">
                <p className="text-gray-400 text-sm">Date</p>
                <p className="text-lg font-bold text-blue-400">
                  {lastHospitalVisit.date}
                </p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg border border-blue-900">
                <p className="text-gray-400 text-sm">Day</p>
                <p className="text-lg font-bold text-blue-400">
                  {lastHospitalVisit.day}
                </p>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg border border-blue-900">
                <p className="text-gray-400 text-sm">Month</p>
                <p className="text-lg font-bold text-blue-400">
                  {lastHospitalVisit.month}
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-base mb-2">
              Reason:{" "}
              <span className="font-semibold">{lastHospitalVisit.reason}</span>
            </p>
            <p className="text-gray-300 text-base">
              Provider:{" "}
              <span className="font-semibold">
                {lastHospitalVisit.provider}
              </span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PatientHomeContent;
