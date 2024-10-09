"use client"; // This is a client component

import Dashboard from "./dashboard"; // Import the dashboard component

const EmployerDashboardPage = () => {
  return (
    <div className="container mx-auto p-6">
      {" "}
      {/* Added padding for consistent spacing */}
      <h2 className="text-3xl font-bold text-black mb-6 text-center">
        Employer Dashboard
      </h2>{" "}
      {/* Added a title */}
      <Dashboard />
    </div>
  );
};

export default EmployerDashboardPage;
