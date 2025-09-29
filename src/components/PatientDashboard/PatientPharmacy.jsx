import React, { useState } from "react";
import { Link } from "react-router-dom";

function PatientPharmacy() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Dummy data for medicines and shops
  const medicines = [
    {
      id: "med1",
      name: "Paracetamol",
      availableIn: ["Apollo Pharmacy", "MedPlus", "Wellness Forever"],
    },
    {
      id: "med2",
      name: "Ibuprofen",
      availableIn: ["MedPlus", "Wellness Forever"],
    },
    {
      id: "med3",
      name: "Amoxicillin",
      availableIn: ["Apollo Pharmacy", "Local Chemist"],
    },
    {
      id: "med4",
      name: "Cetirizine",
      availableIn: ["Wellness Forever", "Local Chemist"],
    },
    {
      id: "med5",
      name: "Omeprazole",
      availableIn: ["Apollo Pharmacy", "MedPlus"],
    },
  ];

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    if (term.length > 1) {
      const filteredMedicines = medicines.filter((med) =>
        med.name.toLowerCase().includes(term)
      );
      setSearchResults(filteredMedicines);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Pharmacy Services
      </h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for medicines..."
          className="w-full p-3 border border-gray-700 rounded-lg text-sm bg-gray-800 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {searchTerm.length > 1 && searchResults.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-medium text-white mb-4">
            Available Medicines
          </h3>
          <div className="space-y-4">
            {searchResults.map((med) => (
              <div
                key={med.id}
                className="bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-700"
              >
                <p className="font-semibold text-white text-lg mb-2">
                  {med.name}
                </p>
                <p className="text-gray-400 text-sm mb-2">Available at:</p>
                <div className="flex flex-wrap gap-2">
                  {med.availableIn.map((shop, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-800 text-blue-100 px-3 py-1 rounded-full text-xs"
                    >
                      {shop}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {searchTerm.length > 1 && searchResults.length === 0 && (
        <p className="text-gray-400 text-center">
          No medicines found for "{searchTerm}".
        </p>
      )}

      {searchTerm.length <= 1 && (
        <p className="text-gray-400 text-center">
          Start typing to search for medicines.
        </p>
      )}

      <div className="mt-8 text-center">
        <Link
          to="/patient/dashboard/e-pharmacy"
          className="text-blue-400 hover:underline text-base"
        >
          Explore E-Pharmacy &rarr;
        </Link>
      </div>
    </div>
  );
}

export default PatientPharmacy;
