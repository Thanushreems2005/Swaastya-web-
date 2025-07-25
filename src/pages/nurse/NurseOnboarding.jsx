// src/pages/Nurse/NurseOnboarding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function NurseOnboarding() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    nursingLicenseNo: "",
    department: "",
    shift: "",
    certifications: "",
    // Add more nurse-specific fields
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
    console.log("Nurse Details Submitted:", formData);

    // Simulate saving details and updating user context
    // if (user && updateUser) {
    //   updateUser({ ...user, nurseDetails: formData, detailsFilled: true });
    // }

    navigate("/nurse/dashboard"); // Redirect to nurse dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {user?.email || "Nurse"}!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please provide your professional details.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nursingLicenseNo" className="sr-only">
              Nursing License No.
            </label>
            <input
              id="nursingLicenseNo"
              name="nursingLicenseNo"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Nursing License No."
              value={formData.nursingLicenseNo}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="department" className="sr-only">
              Department
            </label>
            <input
              id="department"
              name="department"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Department (e.g., ER, ICU, Pediatrics)"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="shift" className="sr-only">
              Shift
            </label>
            <select
              id="shift"
              name="shift"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              value={formData.shift}
              onChange={handleChange}
            >
              <option value="">Select Shift</option>
              <option value="Day">Day</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>
          <div>
            <label htmlFor="certifications" className="sr-only">
              Certifications
            </label>
            <input
              id="certifications"
              name="certifications"
              type="text"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Certifications (e.g., BLS, ACLS)"
              value={formData.certifications}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Save Details & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NurseOnboarding;
