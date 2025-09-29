import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen font-sans antialiased">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-black text-white py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative z-10 container mx-auto text-center max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight mb-8 drop-shadow-lg">
            Swaastya: Your Complete Healthcare Ecosystem
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-400">
            Innovating health, connecting care. An end-to-end platform for
            patients, doctors, and pharmacists, built for accessibility,
            convenience, and transparency.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-center mt-16">
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-xl"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white text-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section / Value Proposition */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 text-white">
            Revolutionizing Healthcare, Together
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-16 max-w-4xl mx-auto">
            Swaastya is more than just a platform; it's a commitment to a
            healthier future. We seamlessly integrate every aspect of
            healthcare, empowering individuals and professionals with
            cutting-edge tools and unparalleled convenience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
            {/* For Patients */}
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-blue-500/30 transition duration-300 transform hover:-translate-y-2 border border-gray-700 flex flex-col items-center text-center">
              <div className="text-7xl text-blue-400 mb-6">🧑‍⚕️</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                For Patients
              </h3>
              <ul className="text-left text-gray-300 space-y-2 text-base flex-grow">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span> Secure Digital
                  Medical Records
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span> Easy Access to
                  E-Pharmacy
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✔</span> Health Coins
                  for UPI Payments
                </li>
              </ul>
              <Link
                to="/register?role=patient"
                className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-base"
              >
                Join as Patient
              </Link>
            </div>

            {/* For Doctors */}
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-green-500/30 transition duration-300 transform hover:-translate-y-2 border border-gray-700 flex flex-col items-center text-center">
              <div className="text-7xl text-green-400 mb-6">🩺</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                For Doctors
              </h3>
              <ul className="text-left text-gray-300 space-y-2 text-base flex-grow">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Quick Patient
                  Record Access
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> QR Code Scanning
                  for Efficiency
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Enhanced
                  Diagnosis & Care
                </li>
              </ul>
              <Link
                to="/register?role=doctor"
                className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-base"
              >
                Join as Doctor
              </Link>
            </div>

            {/* For Pharmacists */}
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-purple-500/30 transition duration-300 transform hover:-translate-y-2 border border-gray-700 flex flex-col items-center text-center">
              <div className="text-7xl text-purple-400 mb-6">💊</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                For Pharmacists
              </h3>
              <ul className="text-left text-gray-300 space-y-2 text-base flex-grow">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Direct
                  Producer-Consumer Link
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Seamless &
                  Transparent Distribution
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Efficient Supply
                  Chain Management
                </li>
              </ul>
              <Link
                to="/register?role=pharmacist"
                className="mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-base"
              >
                Join as Pharmacist
              </Link>
            </div>

            {/* For Insurance Providers */}
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition duration-300 transform hover:-translate-y-2 border border-gray-700 flex flex-col items-center text-center">
              <div className="text-7xl text-yellow-400 mb-6">📄</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                For Insurance Providers
              </h3>
              <ul className="text-left text-gray-300 space-y-2 text-base flex-grow">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Streamlined
                  Claims Processing
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Secure Data
                  Exchange
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Enhanced Policy
                  Management
                </li>
              </ul>
              <Link
                to="/register?role=insurance"
                className="mt-8 inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-base"
              >
                Join as Insurer
              </Link>
            </div>

            {/* For Hospital Administrators */}
            <div className="p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-red-500/30 transition duration-300 transform hover:-translate-y-2 border border-gray-700 flex flex-col items-center text-center">
              <div className="text-7xl text-red-400 mb-6">🏥</div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                For Hospital Administrators
              </h3>
              <ul className="text-left text-gray-300 space-y-2 text-base flex-grow">
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Centralized
                  Operations Management
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Staff & Resource
                  Allocation
                </li>
                <li className="flex items-center">
                  <span className="text-blue-400 mr-2">✔</span> Performance
                  Analytics
                </li>
              </ul>
              <Link
                to="/register?role=hospital-admin"
                className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300 text-base"
              >
                Join as Admin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-blue-950 text-white text-center">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Experience the Future of Healthcare with Swaastya
          </h2>
          <p className="text-xl mb-12 text-gray-400">
            Join our growing ecosystem and transform the way you experience and
            deliver healthcare.
          </p>
          <Link
            to="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-105 text-xl"
          >
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
