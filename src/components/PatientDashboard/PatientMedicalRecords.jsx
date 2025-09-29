import React from "react";
import { Link } from "react-router-dom";

function PatientMedicalRecords() {
  // Dummy Data for demonstration (from original patientDashboard.jsx)
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

  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Medical Records
      </h2>
      <input
        type="text"
        placeholder="Filter by type, date, provider..."
        className="w-full p-3 border border-gray-700 rounded-lg mb-4 text-sm bg-gray-800 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
      />
      <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
        {recentDocuments.map((doc, index) => (
          <div
            key={index}
            className="bg-gray-800 p-3 rounded-lg shadow-sm flex justify-between items-center text-sm border border-gray-700"
          >
            <div>
              <p className="font-semibold text-white">{doc.name}</p>
              <p className="text-gray-400">
                {doc.type} - {doc.date}
              </p>
            </div>
            <div className="space-x-2">
              <button className="bg-blue-800 text-blue-100 px-2 py-1 rounded-lg hover:bg-blue-700">
                ⬇️ PDF
              </button>
              <button className="bg-green-800 text-green-100 px-2 py-1 rounded-lg hover:bg-green-700">
                🔗 Share
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/patient/dashboard/all-records"
          className="text-blue-400 hover:underline text-base"
        >
          View All Medical Records &rarr;
        </Link>
      </div>
    </div>
  );
}

export default PatientMedicalRecords;
