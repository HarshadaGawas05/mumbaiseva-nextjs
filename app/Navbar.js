// app/Navbar.js
"use client"; // This is a client component

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

const Navbar = () => {
  const router = useRouter(); // Initialize the router

  const handleNavigation = (role) => {
    if (role === "employer") {
      router.push("/employer-dashboard"); // Navigate to Employer Dashboard
    } else {
      router.push("/worker-dashboard"); // Navigate to Worker Dashboard
    }
  };

  return (
    <nav className="flex justify-center bg-gray-800 p-4">
      <button
        onClick={() => handleNavigation("employer")}
        className="bg-orange-500 text-white p-2 rounded-md mx-2 hover:bg-orange-600 transition duration-200"
      >
        Employer
      </button>
      <button
        onClick={() => handleNavigation("worker")}
        className="bg-blue-500 text-white p-2 rounded-md mx-2 hover:bg-blue-600 transition duration-200"
      >
        Worker
      </button>
    </nav>
  );
};

export default Navbar;
//navbar
