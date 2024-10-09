"use client";

import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa"; // Importing a check circle icon

const WorkerDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [categories] = useState([
    "Construction",
    "IT",
    "Hospitality",
    "Retail",
  ]);
  const [immediateJobs, setImmediateJobs] = useState([
    { id: 1, title: "Painter Needed", location: "Mumbai", salary: "100/hour" },
    {
      id: 2,
      title: "Data Entry Operator",
      location: "Pune",
      salary: "150/hour",
    },
  ]);
  const [jobCounter, setJobCounter] = useState(20); // Initialize job counter at 20

  const handleApplyJob = (job) => {
    // Check if the job is already applied to avoid duplicates and if jobs are remaining
    if (
      !appliedJobs.find((appliedJob) => appliedJob.id === job.id) &&
      jobCounter > 0
    ) {
      setAppliedJobs([...appliedJobs, job]);
      setImmediateJobs(
        immediateJobs.filter((immediateJob) => immediateJob.id !== job.id)
      ); // Remove job from immediate jobs
      setJobCounter(jobCounter - 1); // Decrease the counter by 1
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-white text-black">
      {/* Job counter in the top right corner */}
      <div className="absolute top-6 right-6 bg-red-500 text-white p-2 rounded-md shadow-md">
        Jobs Remaining: {jobCounter}
      </div>

      <h2 className="text-3xl font-bold mb-6">Worker Dashboard</h2>

      {/* Immediate Jobs Section */}
      <section className="w-full max-w-2xl mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-black">
          Immediate Jobs
        </h3>
        {immediateJobs.length > 0 ? (
          immediateJobs.map((job) => (
            <div
              key={job.id}
              className="border p-4 mb-4 rounded-md shadow-lg bg-gray-100"
            >
              <h4 className="text-xl font-bold text-black">{job.title}</h4>
              <p className="text-black">Location: {job.location}</p>
              <p className="text-black">Salary: {job.salary}</p>
              <button
                onClick={() => handleApplyJob(job)}
                className={`mt-2 p-2 rounded-md transition-all duration-300 ease-in-out ${
                  appliedJobs.find((appliedJob) => appliedJob.id === job.id)
                    ? "bg-green-600 text-white"
                    : "bg-orange-600 text-white"
                } hover:bg-blue-600`}
                style={{
                  animation: appliedJobs.find(
                    (appliedJob) => appliedJob.id === job.id
                  )
                    ? "none"
                    : "bubble 0.5s",
                }}
              >
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-red-500">No immediate jobs available :(</p>
        )}
      </section>

      {/* Categories Section */}
      <section className="w-full max-w-2xl mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-black">Categories</h3>
        <div className="flex flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-blue-600 text-white p-2 m-2 rounded-md shadow hover:bg-blue-700 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Applied Jobs Section */}
      <section className="w-full max-w-2xl">
        <h3 className="text-2xl font-semibold mb-4 text-black">Applied Jobs</h3>
        {appliedJobs.length > 0 ? (
          appliedJobs.map((job, index) => (
            <div
              key={index}
              className="border p-4 mb-4 rounded-md shadow-lg flex items-center bg-gray-100"
            >
              <FaCheckCircle className="text-green-600 mr-2" />
              <div>
                <h4 className="text-xl font-bold text-black">{job.title}</h4>
                <p className="text-black">Location: {job.location}</p>
                <p className="text-black">Salary: {job.salary}</p>
                <p className="text-green-600">Successfully applied!</p>
              </div>
            </div>
          ))
        ) : (
          <p>No applied jobs yet.</p>
        )}
      </section>

      {/* Bubble Animation CSS */}
      <style jsx>{`
        @keyframes bubble {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default WorkerDashboard;
