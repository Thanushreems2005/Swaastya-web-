// src/pages/Admin/AdminOnboarding.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function AdminOnboarding() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const { user, updateUser } = useAuth();
  const [formData, setFormData] = useState({
    employeeId: "",
    department: "",
    adminRole: "",
    // Add more admin-specific fields
    canManageUsers: false,
    canAccessLogs: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin Details Submitted:", formData);

    // Simulate saving details and updating user context
    // if (user && updateUser) {
    //   updateUser({ ...user, adminDetails: formData, detailsFilled: true });
    // }

    navigate("/admin/dashboard"); // Redirect to admin dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome, {user?.email || "Admin"}!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please provide your administrative details.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="employeeId" className="sr-only">
              Employee ID
            </label>
            <input
              id="employeeId"
              name="employeeId"
              type="text"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Employee ID"
              value={formData.employeeId}
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
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Department (e.g., IT, HR, Finance)"
              value={formData.department}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="adminRole" className="sr-only">
              Admin Role
            </label>
            <input
              id="adminRole"
              name="adminRole"
              type="text"
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              placeholder="Specific Admin Role (e.g., System Administrator, HR Manager)"
              value={formData.adminRole}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-700">Privileges:</h3>
            <div className="flex items-center">
              <input
                id="canManageUsers"
                name="canManageUsers"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                checked={formData.canManageUsers}
                onChange={handleChange}
              />
              <label
                htmlFor="canManageUsers"
                className="ml-2 block text-sm text-gray-900"
              >
                Manage User Accounts
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="canAccessLogs"
                name="canAccessLogs"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                checked={formData.canAccessLogs}
                onChange={handleChange}
              />
              <label
                htmlFor="canAccessLogs"
                className="ml-2 block text-sm text-gray-900"
              >
                Access System Logs
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Save Details & Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminOnboarding;
