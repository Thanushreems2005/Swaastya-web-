// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";

// Imports for specific user role dashboards
import PatientDashboard from "./pages/patient/patientDashboard"; // Keep for now, content will be moved
import DoctorDashboard from "./pages/doctor/DoctorDashboard";
import NurseDashboard from "./pages/nurse/NurseDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

// NEW: Patient Dashboard Layout and Content Components
import PatientLayout from "./components/PatientDashboard/PatientLayout";
import PatientHomeContent from "./components/PatientDashboard/PatientHomeContent";
import PatientDoctors from "./components/PatientDashboard/PatientDoctors";
import PatientPharmacy from "./components/PatientDashboard/PatientPharmacy";
import PatientContact from "./components/PatientDashboard/PatientContact";
import PatientHelp from "./components/PatientDashboard/PatientHelp";
import PatientMedicalRecords from "./components/PatientDashboard/PatientMedicalRecords";
import PatientPrescriptions from "./components/PatientDashboard/PatientPrescriptions";

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
    <Router basename="/Swaastya-web-">
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />{" "}
          {/* Generic dashboard */}
          {/* Specific dashboard routes for each user type */}
          {/* Patient Dashboard with Nested Routes */}
          <Route path="/patient/dashboard" element={<PatientLayout />}>
            <Route index element={<PatientHomeContent />} />{" "}
            {/* Default content for /patient/dashboard */}
            <Route path="records" element={<PatientMedicalRecords />} />
            <Route path="prescriptions" element={<PatientPrescriptions />} />
            <Route path="doctors" element={<PatientDoctors />} />
            <Route path="pharmacy" element={<PatientPharmacy />} />
            <Route path="contact" element={<PatientContact />} />
            <Route path="help" element={<PatientHelp />} />
          </Route>
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
