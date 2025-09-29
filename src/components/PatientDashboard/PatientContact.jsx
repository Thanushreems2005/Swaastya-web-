import React from "react";

function PatientContact() {
  return (
    <div className="bg-gray-900 shadow-lg rounded-xl p-6 border border-gray-800">
      <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
      <div className="space-y-6 text-gray-300">
        <p className="text-lg">
          If you have any questions, concerns, or need assistance, please don't
          hesitate to reach out to our support team.
        </p>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-2">
            General Inquiries
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:info@swaastya.com"
              className="text-blue-400 hover:underline"
            >
              info@swaastya.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+917778888999"
              className="text-blue-400 hover:underline"
            >
              +91-777-8888-999
            </a>
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-2">
            Technical Support
          </h3>
          <p>
            Email:{" "}
            <a
              href="mailto:support@swaastya.com"
              className="text-blue-400 hover:underline"
            >
              support@swaastya.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+917778888999"
              className="text-blue-400 hover:underline"
            >
              +91-777-8888-999
            </a>{" "}
            (Option 1)
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-2">
            Emergency Contact
          </h3>
          <p className="text-red-500 font-semibold">
            For medical emergencies, please call your local emergency number
            (e.g., 911) or visit the nearest emergency room immediately.
          </p>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          Our support team is available Monday to Friday, 9 AM to 5 PM (Local
          Time).
        </p>
      </div>
    </div>
  );
}

export default PatientContact;
