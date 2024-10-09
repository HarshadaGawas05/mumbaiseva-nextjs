"use client"; // This is a client component

import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]); // Store tasks here
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    location: "",
    salary: "",
    hours: "",
    date: "",
    time: "",
  }); // Manage new task input
  const [showForm, setShowForm] = useState(false); // State to show/hide the form
  const [showActiveTasks, setShowActiveTasks] = useState(false); // State to show/hide active tasks message

  // Use useEffect to initialize state if necessary
  useEffect(() => {
    // Initial task data or fetching data can go here if needed
    // e.g., fetchTasks();
  }, []);

  const handleTaskInputChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleCreateTask = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setTasks([...tasks, newTask]); // Update tasks with new task
    setNewTask({
      title: "",
      description: "",
      location: "",
      salary: "",
      hours: "",
      date: "",
      time: "",
    }); // Reset input fields
    setShowForm(false); // Hide the form after submission
  };

  const toggleActiveTasks = () => {
    setShowActiveTasks((prev) => !prev); // Toggle visibility of active tasks message
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-black flex flex-col items-center">
      <button
        onClick={() => setShowForm((prev) => !prev)} // Toggle form visibility
        className="bg-orange-500 text-white p-3 rounded-md shadow hover:bg-orange-600 transition duration-200 ease-in-out mb-4"
      >
        {showForm ? "Close Task Form" : "Create a Task"}
      </button>

      {showForm && (
        <form
          onSubmit={handleCreateTask}
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-md mb-6 relative"
        >
          <button
            type="button"
            onClick={() => setShowForm(false)} // Close the form
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          >
            &times; {/* X icon to close the form */}
          </button>
          <h3 className="text-xl font-semibold mb-4">Create a New Task</h3>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={newTask.title}
            onChange={handleTaskInputChange}
            className="border p-3 mb-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <textarea
            name="description"
            placeholder="Task Description"
            value={newTask.description}
            onChange={handleTaskInputChange}
            className="border p-3 mb-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={newTask.location}
            onChange={handleTaskInputChange}
            className="border p-3 mb-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={newTask.salary}
            onChange={handleTaskInputChange}
            className="border p-3 mb-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="number"
            name="hours"
            placeholder="Hours of Work"
            value={newTask.hours}
            onChange={handleTaskInputChange}
            className="border p-3 mb-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="date"
            name="date"
            value={newTask.date}
            onChange={handleTaskInputChange}
            className="border p-3 mb-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <input
            type="time"
            name="time"
            value={newTask.time}
            onChange={handleTaskInputChange}
            className="border p-3 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white p-3 rounded-md w-full hover:bg-orange-600 transition duration-200 ease-in-out"
          >
            Post Task
          </button>
        </form>
      )}

      {/* Button to show active tasks */}
      <button
        onClick={toggleActiveTasks}
        className="bg-blue-500 text-white p-3 rounded-md mb-4 hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        Active Tasks
      </button>

      {/* Display Active Tasks Message */}
      {showActiveTasks && (
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
          <button
            type="button"
            onClick={toggleActiveTasks} // Close the active tasks message
            className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
          >
            &times; {/* X icon to close the message */}
          </button>
          <h3 className="text-xl font-semibold mb-4">Active Tasks</h3>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <div key={index} className="border-b py-2">
                <h4 className="text-lg font-bold">{task.title}</h4>
                <p>{task.description}</p>
                <p>Location: {task.location}</p>
                <p>Salary: {task.salary}</p>
                <p>Hours: {task.hours}</p>
                <p>Date: {task.date}</p>
                <p>Time: {task.time}</p>
              </div>
            ))
          ) : (
            <p>No active tasks yet.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
