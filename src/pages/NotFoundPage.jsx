import React from "react";

function NotFoundPage() {
  return (
    <div className="text-center py-12">
      <h2 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}

export default NotFoundPage;
