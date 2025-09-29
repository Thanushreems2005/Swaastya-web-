import React from "react";
import { Link } from "react-router-dom";

function PatientHelp() {
  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by navigating to the 'Doctors' section in the sidebar, selecting a doctor, and choosing an available slot.",
    },
    {
      question: "How can I access my medical records?",
      answer:
        "Your medical records are available in the 'Home' section of your dashboard under 'Medical Records'. You can filter and download them as needed.",
    },
    {
      question: "How do Health Coins work?",
      answer:
        "Health Coins are our unique reward system. You earn them by engaging with the platform and can use them for UPI payments at participating pharmacies and clinics.",
    },
    {
      question: "What if I forget my password?",
      answer:
        "You can reset your password by clicking on the 'Forgot your password?' link on the login page.",
    },
  ];

  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-6">Help & Support</h2>
      <div className="space-y-6 text-gray-300">
        <p className="text-lg">
          Find answers to common questions or get in touch with our support team
          for further assistance.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-3">
            Frequently Asked Questions
          </h3>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700"
            >
              <h4 className="font-semibold text-white text-lg mb-1">
                {faq.question}
              </h4>
              <p className="text-gray-400 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-2">Need More Help?</h3>
          <p className="mb-2">
            If you can't find what you're looking for, please visit our{" "}
            <Link
              to="/patient/dashboard/contact"
              className="text-blue-400 hover:underline"
            >
              Contact Us
            </Link>{" "}
            page or explore our comprehensive{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Knowledge Base
            </a>
            .
          </p>
          <p>You can also chat with a support agent during business hours.</p>
        </div>
      </div>
    </div>
  );
}

export default PatientHelp;
