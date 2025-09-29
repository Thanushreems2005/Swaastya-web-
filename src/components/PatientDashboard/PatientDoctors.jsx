import React from "react";
import { Link } from "react-router-dom";

function PatientDoctors() {
  const doctors = [
    {
      id: "doc1",
      name: "Dr. Emily White",
      specialty: "Cardiologist",
      availability: "Mon, Wed, Fri",
      nextAppointment: "Oct 5, 2025",
      img: "https://via.placeholder.com/100/0000FF/FFFFFF?text=Dr+E",
    },
    {
      id: "doc2",
      name: "Dr. John Doe",
      specialty: "Pediatrician",
      availability: "Tue, Thu",
      nextAppointment: "Oct 10, 2025",
      img: "https://via.placeholder.com/100/008000/FFFFFF?text=Dr+J",
    },
    {
      id: "doc3",
      name: "Dr. Sarah Lee",
      specialty: "Orthopedist",
      availability: "Mon, Tue, Wed, Thu, Fri",
      nextAppointment: "Available Today",
      img: "https://via.placeholder.com/100/FF0000/FFFFFF?text=Dr+S",
    },
    {
      id: "doc4",
      name: "Dr. Michael Brown",
      specialty: "Dermatologist",
      availability: "Wed, Fri",
      nextAppointment: "Oct 12, 2025",
      img: "https://via.placeholder.com/100/FFFF00/000000?text=Dr+M",
    },
  ];

  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-6">
        Available Doctors
      </h2>
      <input
        type="text"
        placeholder="Search by name, specialty, or availability..."
        className="w-full p-3 border border-gray-700 rounded-lg mb-6 text-sm bg-gray-800 text-gray-100 focus:ring-blue-500 focus:border-blue-500"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            className="bg-gray-800 p-4 rounded-lg shadow-md flex items-center space-x-4 border border-gray-700 hover:shadow-blue-500/20 transition duration-200"
          >
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
            />
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white">{doctor.name}</h3>
              <p className="text-blue-400 text-sm">{doctor.specialty}</p>
              <p className="text-gray-400 text-xs">
                Availability: {doctor.availability}
              </p>
              <p className="text-gray-400 text-xs">
                Next Appt: {doctor.nextAppointment}
              </p>
            </div>
            <Link
              to={`/patient/dashboard/book-appointment/${doctor.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition duration-200"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/patient/dashboard/all-doctors"
          className="text-blue-400 hover:underline text-base"
        >
          View All Doctors &rarr;
        </Link>
      </div>
    </div>
  );
}

export default PatientDoctors;
