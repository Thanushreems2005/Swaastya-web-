// src/pages/Patient/PatientOnboarding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function PatientOnboarding() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { user, updateUser } = useAuth(); // Assuming updateUser exists in useAuth to save details
  const [formData, setFormData] = useState({
    dob: "",
    phone: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    // Add more patient-specific fields here
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
    // In a real application, you would send this data to your backend
    // and then update the user context/profile in your frontend state.
    console.log("Patient Details Submitted:", formData);

    // Simulate saving details and updating user context (optional for now)
    // if (user && updateUser) {
    //   updateUser({ ...user, patientDetails: formData, detailsFilled: true });
    // }

    navigate("/patient/dashboard"); // Redirect to patient dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {user?.email || "Patient"}!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please provide some additional details to set up your profile.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="dob" className="sr-only">
              Date of Birth
            </label>
            <input
              id="dob"
              name="dob"
              type="date"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address" className="sr-only">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows="3"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="emergencyContactName" className="sr-only">
                Emergency Contact Name
              </label>
              <input
                id="emergencyContactName"
                name="emergencyContactName"
                type="text"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Emergency Contact Name"
                value={formData.emergencyContactName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="emergencyContactPhone" className="sr-only">
                Emergency Contact Phone
              </label>
              <input
                id="emergencyContactPhone"
                name="emergencyContactPhone"
                type="tel"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Emergency Contact Phone"
                value={formData.emergencyContactPhone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save Details & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PatientOnboarding;
