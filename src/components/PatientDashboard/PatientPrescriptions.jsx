import React from "react";
import { Link } from "react-router-dom";

function PatientPrescriptions() {
  // Dummy Data for demonstration (from original patientDashboard.jsx)
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

  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Prescription Management
      </h2>
      <h3 className="text-xl font-medium text-white mb-3">
        Current Medications
      </h3>
      <ul className="space-y-3 mb-6">
        {activeMedications.map((med, index) => (
          <li
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700"
          >
            <p className="font-semibold text-white text-lg">{med.name}</p>
            <p className="text-gray-300 text-sm">{med.dosage}</p>
            <p className="text-gray-300 text-sm mb-2">{med.refillStatus}</p>
            <button className="bg-green-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-700 transition duration-200">
              🔄 Request Refill
            </button>
          </li>
        ))}
      </ul>
      <h3 className="text-xl font-medium text-white mb-3">Drug Interactions</h3>
      <div
        className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded-lg relative text-sm"
        role="alert"
      >
        <strong className="font-bold">⚠️ Warning:</strong>
        <span className="block sm:inline">
          {" "}
          Ibuprofen + Lisinopril → Consult MD for potential kidney strain.
        </span>
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/patient/dashboard/all-prescriptions"
          className="text-blue-400 hover:underline text-base"
        >
          View All Prescriptions &rarr;
        </Link>
      </div>
    </div>
  );
}

export default PatientPrescriptions;
