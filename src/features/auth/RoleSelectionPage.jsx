// src/features/auth/RoleSelectionPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function RoleSelectionPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleRoleSelect = (role) => {
    const dummyUser = {
      id: "user-" + Math.random().toString(36).substring(7),
      email: "registered@example.com", // You might want to pass the actual registered email here
      role: role,
      // Add a placeholder for additional details, if you were saving to context
      detailsFilled: false, // Flag to track if details are filled
    };

    login(dummyUser); // Log in the user with the selected role

    // Redirect to role-specific onboarding page
    switch (role) {
      case "patient":
        navigate("/patient/onboarding");
        break; // <-- Changed
      case "doctor":
        navigate("/doctor/onboarding");
        break; // <-- Changed
      case "nurse":
        navigate("/nurse/onboarding");
        break; // <-- Changed
      case "admin":
        navigate("/admin/onboarding");
        break; // <-- Changed
      default:
        navigate("/");
        break; // Fallback
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl text-center">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Select Your Role
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Please choose the role that applies to you.
        </p>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => handleRoleSelect("patient")}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Patient
          </button>
          <button
            onClick={() => handleRoleSelect("doctor")}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Doctor
          </button>
          <button
            onClick={() => handleRoleSelect("nurse")}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Nurse
          </button>
          <button
            onClick={() => handleRoleSelect("admin")}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleSelectionPage;
