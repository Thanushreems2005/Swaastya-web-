import React from "react";

function AdminDashboard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-red-700 mb-4">
        Admin Dashboard
      </h2>
      <p className="text-gray-600">
        Administrator access: Manage users, hospitals, and settings.
      </p>
      {/* More admin-specific content will go here */}
    </div>
  );
}
export default AdminDashboard;
