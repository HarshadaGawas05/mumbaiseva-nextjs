"use client"; // Ensure this line is added for client-side functionality

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import useRouter
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebaseConfig"; // Make sure you import Firebase config

export default function Home() {
  const [showSignInForm, setShowSignInForm] = useState(false); // Correct state name
  const [userName, setUserName] = useState(""); // State to hold user's name
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const router = useRouter(); // Initialize the router

  // Function to toggle the sign-in form modal
  const toggleSignInModal = () => setShowSignInForm(!showSignInForm); // Correct function name

  // Function to handle Google Sign-In
  const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUserName(user.displayName); // Set the user name
      setIsLoggedIn(true); // Update login status
      alert(`${user.displayName} verified!`);
      setShowSignInForm(false); // Optionally close the form
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      alert("Error signing in with Google. Please try again.");
    }
  };

  // Function to handle Logout
  const handleLogout = async () => {
    const auth = getAuth(app);
    await auth.signOut();
    setUserName(""); // Clear user name
    setIsLoggedIn(false); // Update login status
    alert("User logged out.");
  };

  // Function to handle navigation
  const navigateTo = (path) => {
    router.push(path); // Use router.push for navigation
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full border-b border-gray-300 pb-4">
        <div className="text-2xl font-bold">MumbaiSeva</div>
        <ul className="flex gap-8 items-center">
          <li>
            <button onClick={() => navigateTo("/jobs")}>Jobs</button>
          </li>
          <li>
            <button onClick={() => navigateTo("/resources")}>Resources</button>
          </li>
          <li>
            <button onClick={() => navigateTo("/blog")}>Blog</button>
          </li>
          <li>
            <button onClick={() => navigateTo("/employers")}>Employers</button>
          </li>
          <li>
            <button onClick={() => navigateTo("/contact")}>Contact Us</button>
          </li>
          <li>
            <button
              className="border border-gray-300 py-2 px-4 rounded-md hover:bg-gray-200 transition"
              onClick={toggleSignInModal} // Show the form on click
            >
              Sign In
            </button>
          </li>
          <li>
            <button
              className="bg-pink-500 text-white py-2 px-4 rounded-md hover:bg-pink-600 transition"
              onClick={() => navigateTo("/get-started")}
            >
              Get Started
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-1 text-center md:text-left w-full h-screen">
        {/* Left Column */}
        <div className="md:w-1/2 md:pr-8">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600">
            Unlock Your Career Potential
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold text-black-500">
            Career Potential
          </h1>
          <h2 className="text-4xl md:text-6xl mt-4 font-bold text-pink-600">
            with MumbaiSeva
          </h2>
          <p className="mt-2 text-lg font-bold">
            Discover Opportunities, Connect with Employers, and Elevate Your
            Professional Journey
          </p>
          {/* Buttons for Job Seeker and Employer */}
          <div className="mt-6 flex justify-left space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              onClick={() => navigateTo("/worker-dashboard")} // Updated path
            >
              Job Seeker
            </button>
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              onClick={() => navigateTo("/employer-dashboard")} // Path for Employer button
            >
              Employer
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 relative h-96">
          <Image
            src="/landingpage.jpg"
            alt="Background Image"
            fill
            objectFit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute top-0 left-0 z-0"
          />
        </div>
      </main>

      {/* Floating Sign-In Form */}
      {showSignInForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Sign In
            </h2>

            {/* Google Sign-In Button */}
            {!isLoggedIn && (
              <button
                onClick={handleGoogleSignIn} // Google sign-in button
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Get Started with Google
              </button>
            )}

            {userName && (
              <div className="mt-4 text-center">
                <p className="text-green-500 font-medium">
                  {userName} verified!
                </p>
                <button
                  onClick={handleLogout} // Logout button
                  className="mt-4 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Logout
                </button>
              </div>
            )}

            <button
              onClick={toggleSignInModal} // Close the modal
              className="mt-4 text-gray-600 hover:text-gray-800 transition font-medium w-full focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 mb-8">
        <p>© 2024 MumbaiSeva. All rights reserved.</p>
      </footer>
    </div>
  );
}
