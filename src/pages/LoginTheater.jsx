import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

function LoginTheater() {
  const [theater, setTheater] = useState({ email: "", password: "" });
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
            "http://localhost:8080/api/logintheater", // Your backend URL
            theater
        );
        const token = response.data.token; // Access token from response
        localStorage.setItem("authToken", token); // Store token in local storage
        toast.success("Login successful!");
        navigate("/dashboard"); // Redirect to dashboard after successful login
    } catch (err) {
        const errorMessage = err.response?.data || "Invalid credentials!"; // Get error message from backend
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
          Login to Your Theater Account
        </h2>
        {error && <p className="text-center text-red-500">{error}</p>} 
        <form className="space-y-4" onSubmit={handleSubmit}>
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
          <motion.button
            type="submit"
            className="w-full px-4 py-2 text-white transition rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
        />
        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-green-500 hover:underline">
            Register
          </Link>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default LoginTheater;
