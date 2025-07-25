// src/pages/Doctor/DoctorOnboarding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function DoctorOnboarding() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    medicalLicenseNo: "",
    specialty: "",
    yearsExperience: "",
    clinicAddress: "",
    // Add more doctor-specific fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Doctor Details Submitted:", formData);

    // Simulate saving details and updating user context
    // if (user && updateUser) {
    //   updateUser({ ...user, doctorDetails: formData, detailsFilled: true });
    // }

    navigate("/doctor/dashboard"); // Redirect to doctor dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, Dr. {user?.email || "Doctor"}!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please provide your professional details.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="medicalLicenseNo" className="sr-only">
              Medical License No.
            </label>
            <input
              id="medicalLicenseNo"
              name="medicalLicenseNo"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Medical License No."
              value={formData.medicalLicenseNo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="specialty" className="sr-only">
              Specialty
            </label>
            <input
              id="specialty"
              name="specialty"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Specialty (e.g., Cardiology, Pediatrics)"
              value={formData.specialty}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="yearsExperience" className="sr-only">
              Years of Experience
            </label>
            <input
              id="yearsExperience"
              name="yearsExperience"
              type="number"
              required
              min="0"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Years of Experience"
              value={formData.yearsExperience}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="clinicAddress" className="sr-only">
              Clinic Address
            </label>
            <textarea
              id="clinicAddress"
              name="clinicAddress"
              rows="3"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Clinic/Hospital Address"
              value={formData.clinicAddress}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save Details & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DoctorOnboarding;
