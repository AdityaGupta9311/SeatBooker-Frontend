import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function RegisterTheater() {
  const [theater, setTheater] = useState({
    theater_name: "",
    email: "",
    password: "",
    location: "",
    city: "",
    total_screens: "",
    contact: "",
  });
  const [error, setError] = useState(""); // Error message state
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setTheater({ ...theater, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/theater", // Your backend URL
        theater
      );
      toast.success("Theater successfully registered!");
      navigate("/theater/login"); // Redirect to login after successful registration
    } catch (err) {
      const errorMessage =
        err.response?.data || "An error occurred. Please try again."; // Get error message from backend
      toast.error(errorMessage); // Show error message from backend
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-300 to-blue-400"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          Register Theater
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="theater_name"
            placeholder="Theater Name"
            value={theater.theater_name}
            onChange={handleChange}
            className="w-full px-4 py-2 transition border border-t-0 border-l-0 border-r-0 outline-none"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Email"
            value={theater.email}
            onChange={handleChange}
            className="w-full px-4 py-2 transition border border-t-0 border-l-0 border-r-0 outline-none"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.input
            type="password"
            name="password"
            placeholder="Password"
            value={theater.password}
            onChange={handleChange}
            className="w-full px-4 py-2 transition border border-t-0 border-l-0 border-r-0 outline-none"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.input
            type="text"
            name="location"
            placeholder="Full Address"
            value={theater.location}
            onChange={handleChange}
            className="w-full px-4 py-2 transition border border-t-0 border-l-0 border-r-0 outline-none"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.input
            type="text"
            name="city"
            placeholder="City"
            value={theater.city}
            onChange={handleChange}
            className="w-full px-4 py-2 transition border border-t-0 border-l-0 border-r-0 outline-none"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.input
            type="text"
            name="total_screens"
            placeholder="Total Screens"
            value={theater.total_screens}
            onChange={handleChange}
            className="w-full px-4 py-2 transition border border-t-0 border-l-0 border-r-0 outline-none"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.input
            type="text"
            name="contact"
            placeholder="Contact"
            value={theater.contact}
            onChange={handleChange}
            className="w-full px-4 py-2 transition border border-t-0 border-l-0 border-r-0 outline-none"
            whileFocus={{ scale: 1.05 }}
            required
          />
          <motion.button
            type="submit"
            className="w-full px-4 py-2 text-white transition rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register
          </motion.button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
        />
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/theater/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default RegisterTheater;
