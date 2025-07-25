import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"; // Import useNavigate
import { useAuth } from "../../hooks/useAuth"; // Import your useAuth hook

function Layout() {
  const { isAuthenticated, logout, user } = useAuth(); // Get auth state and functions
  const navigate = useNavigate(); // Initialize navigate

  // Function to determine the correct dashboard path based on user role
  const getDashboardPath = (role) => {
    switch (role) {
      case "patient":
        return "/patient/dashboard";
      case "doctor":
        return "/doctor/dashboard";
      case "nurse":
        return "/nurse/dashboard";
      case "admin":
        return "/admin/dashboard";
      default:
        return "/dashboard"; // Generic dashboard for unknown roles or default
    }
  };

  const handleDashboardClick = () => {
    if (user && user.role) {
      navigate(getDashboardPath(user.role));
    } else {
      // Fallback if somehow user is authenticated but role is missing
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Swaastya
          </Link>
          <div className="space-x-4 flex items-center">
            {/* Always visible general links */}
            <Link to="/" className="hover:text-blue-200">
              Home
            </Link>
            {/* Placeholder general links - you can create these pages later */}
            <Link to="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-200">
              Contact
            </Link>
            <Link to="/services" className="hover:text-blue-200">
              Services
            </Link>

            {/* Conditional links based on authentication status */}
            {!isAuthenticated ? (
              <>
                <Link to="/login" className="hover:text-blue-200">
                  Login
                </Link>
                <Link to="/register" className="hover:text-blue-200">
                  Register
                </Link>
              </>
            ) : (
              <>
                {/* Single "My Dashboard" button/link */}
                <button
                  onClick={handleDashboardClick}
                  className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-1 rounded-md"
                >
                  My Dashboard
                </button>
                <button
                  onClick={logout}
                  className="hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 px-3 py-1 rounded-md"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
      <main className="flex-grow">
        <Outlet />{" "}
        {/* This is where nested routes (like HomePage, Dashboards) will render */}
      </main>
      {/* Optional: Add a simple footer here */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Swaastya. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
