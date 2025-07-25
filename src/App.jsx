// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

// Imports for specific user role dashboards
import PatientDashboard from "./pages/Patient/PatientDashboard";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import NurseDashboard from "./pages/Nurse/NurseDashboard";
import AdminDashboard from "./pages/Admin/AdminDashboard";

// Imports for Login, Register, Role Selection Pages
import LoginPage from "./features/auth/LoginPage";
import RegisterPage from "./features/auth/RegisterPage";
import RoleSelectionPage from "./features/auth/RoleSelectionPage";

// NEW: Imports for Onboarding Pages
import PatientOnboarding from "./pages/Patient/PatientOnboarding";
import DoctorOnboarding from "./pages/doctor/DoctorOnboarding";
import NurseOnboarding from "./pages/nurse/NurseOnboarding";
import AdminOnboarding from "./pages/admin/AdminOnboarding";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes that DO NOT use the common Layout (Login, Register, Role Selection, Onboarding) */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/select-role" element={<RoleSelectionPage />} />

        {/* NEW: Onboarding Routes */}
        <Route path="/patient/onboarding" element={<PatientOnboarding />} />
        <Route path="/doctor/onboarding" element={<DoctorOnboarding />} />
        <Route path="/nurse/onboarding" element={<NurseOnboarding />} />
        <Route path="/admin/onboarding" element={<AdminOnboarding />} />

        {/* All other routes that should use the common Layout (header, footer etc.) */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />{" "}
          {/* Generic dashboard */}
          {/* Specific dashboard routes for each user type */}
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
          <Route path="/nurse/dashboard" element={<NurseDashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* The catch-all 404 route should always be the last one, also within the layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
