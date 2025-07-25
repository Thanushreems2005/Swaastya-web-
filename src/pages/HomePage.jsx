import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation

function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* 1. Header is handled by Layout.jsx */}
      {/* This content will appear below the Header from Layout.jsx */}

      {/* 2. Hero Section (Main Banner) */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for a background image or video */}
          <img
            src="https://via.placeholder.com/1920x800/2563eb/ffffff?text=Healthcare+Hero+Image" // Replace with your actual image
            alt="Healthcare Professionals"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Overlay for better text readability */}
        </div>
        <div className="relative z-10 container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 animate-fadeInDown">
            Your Trusted Partner in Health & Wellness
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fadeInUp">
            Compassionate care, advanced technology, and a commitment to your
            well-being.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center animate-fadeInUp delay-200">
            <Link
              to="/appointment" // You might create an /appointment page later
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:+1234567890" // Replace with your emergency number
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-600"
            >
              Emergency Contact: +91-777-8888-999
            </a>
          </div>
        </div>
      </section>

      {/* 3. Quick Access Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Quick Access
          </h3>
          <div className="max-w-xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Search doctors, specialties, or services..."
              className="w-full p-4 border border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Find a Doctor",
              "Urgent Care",
              "Telehealth Services",
              "Pay Bill Online",
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                {/* Placeholder for icon - you can use actual SVG or font icons */}
                <div className="text-4xl text-blue-600 mb-4">
                  {item === "Find a Doctor" && "👨‍⚕️"}
                  {item === "Urgent Care" && "🚨"}
                  {item === "Telehealth Services" && " telehealth-icon"}
                  {item === "Pay Bill Online" && "💳"}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {item}
                </h4>
                <p className="text-center text-gray-600 text-sm">
                  Short description of the feature.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Services/Specialties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Our Key Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Cardiology", icon: "❤️" },
              { name: "Pediatrics", icon: "👶" },
              { name: "Orthopedics", icon: "🦴" },
              { name: "Mental Health", icon: "🧠" },
              { name: "Women’s Health", icon: "👩‍🍼" },
              { name: "Diagnostics/Lab Tests", icon: "🔬" },
            ].map((service, index) => (
              <div
                key={index}
                className="flex items-center p-6 bg-gray-50 rounded-xl shadow hover:shadow-md transition duration-300 ease-in-out"
              >
                <div className="text-5xl text-blue-600 mr-4">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1 text-gray-900">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Expert care for {service.name.toLowerCase()}.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services" // Link to a full services page
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us? (USPs - Unique Selling Points) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Why Choose Swaastya?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Board-Certified Specialists",
              "24/7 Emergency Care",
              "Advanced Technology",
              "Patient-Centered Approach",
              "Short Wait Times",
              "Comprehensive Care",
            ].map((usp, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex items-start space-x-4"
              >
                <div className="text-blue-600 text-3xl mt-1">✓</div>{" "}
                {/* Checkmark icon */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{usp}</h4>
                  <p className="text-gray-600 text-sm">
                    Short supporting text for this point.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Meet Our Doctors (Preview) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Meet Our Doctors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Emily White",
                specialty: "Cardiologist",
                img: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Dr+Emily",
              },
              {
                name: "Dr. John Doe",
                specialty: "Pediatrician",
                img: "https://via.placeholder.com/150/008000/FFFFFF?text=Dr+John",
              },
              {
                name: "Dr. Sarah Lee",
                specialty: "Orthopedist",
                img: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Dr+Sarah",
              },
            ].map((doctor, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-lg"
              >
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-200"
                />
                <h4 className="text-xl font-semibold text-gray-900">
                  {doctor.name}
                </h4>
                <p className="text-blue-600 text-md">{doctor.specialty}</p>
                <p className="text-center text-gray-600 text-sm mt-2">
                  Dedicated to providing excellent care.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/doctors" // Link to a full doctors page
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              View All Specialists
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Patient Testimonials / Reviews */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            What Our Patients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Swaastya changed my life! The doctors are incredibly caring and the facility is top-notch.",
                author: "Jane D.",
                rating: 5,
                img: "https://via.placeholder.com/80/FFD700/000000?text=JD",
              },
              {
                quote:
                  "Efficient, friendly, and truly patient-centered. Highly recommend their services.",
                author: "John S.",
                rating: 5,
                img: "https://via.placeholder.com/80/C0C0C0/000000?text=JS",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.img}
                  alt={testimonial.author}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-300"
                />
                <div className="text-xl text-yellow-500 mb-2">
                  {"★".repeat(testimonial.rating)}
                  {"☆".repeat(5 - testimonial.rating)} {/* Star ratings */}
                </div>
                <p className="text-lg italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold text-gray-900">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Health Tips / Blog Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Health Tips & Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "5 Tips for Heart Health",
                date: "Jul 20, 2025",
                img: "https://via.placeholder.com/300x200/FF6347/FFFFFF?text=Heart+Health",
              },
              {
                title: "Understanding Common Cold Symptoms",
                date: "Jul 15, 2025",
                img: "https://via.placeholder.com/300x200/6A5ACD/FFFFFF?text=Cold+Symptoms",
              },
              {
                title: "Benefits of Regular Exercise",
                date: "Jul 10, 2025",
                img: "https://via.placeholder.com/300x200/3CB371/FFFFFF?text=Exercise",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3">{article.date}</p>
                  <Link
                    to="/blog"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog" // Link to a full blog page
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Visit Our Blog
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Insurance & Payment Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">
            Insurance & Payment
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            We accept most major insurance providers:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {/* Placeholder logos for insurance providers */}
            <img
              src="https://via.placeholder.com/120x60/D3D3D3/000000?text=Insurance+A"
              alt="Insurance A"
              className="h-10 opacity-75 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://via.placeholder.com/120x60/D3D3D3/000000?text=Insurance+B"
              alt="Insurance B"
              className="h-10 opacity-75 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://via.placeholder.com/120x60/D3D3D3/000000?text=Insurance+C"
              alt="Insurance C"
              className="h-10 opacity-75 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://via.placeholder.com/120x60/D3D3D3/000000?text=Insurance+D"
              alt="Insurance D"
              className="h-10 opacity-75 hover:opacity-100 transition duration-300"
            />
          </div>
          <p className="text-md text-gray-600">
            Don't see your provider? Contact us to discuss financing options.
          </p>
        </div>
      </section>

      {/* 10. Emergency/Urgent Care Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600 text-white text-center">
        <div className="container mx-auto">
          <h3 className="text-4xl font-extrabold mb-4">Need Immediate Care?</h3>
          <p className="text-2xl mb-6">
            Call our 24/7 Emergency Line:{" "}
            <a href="tel:+1234567890" className="underline hover:text-red-200">
              +91-777-8888-999
            </a>
          </p>
          <p className="text-lg">
            Visit Us At:[Your Clinic/Hospital Location Address Here]
          </p>
        </div>
      </section>

      {/* 11. Footer (Content for HomePage specific footer section) */}
      {/* Note: Layout.jsx also has a global footer. This provides specific links/socials for the homepage. */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800 text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold mb-4">Swaastya</h4>
            <p className="text-gray-400">Innovate.Integrate.Elevate Health</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {/* Social Media Links */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Vishwasjeet group of companies,mysuru,karnataka,india-570008
            </p>
            <p className="text-gray-400">Email: info@swaastya.com</p>
            <p className="text-gray-400">Phone: +91-777-8888-999</p>
          </div>
        </div>
      </section>
    </div> // End of main container div
  );
}

export default HomePage;
