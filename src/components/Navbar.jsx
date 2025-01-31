import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Convert to boolean (true if token exists)
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <motion.nav
      className="text-white bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between py-4 space-y-4 md:flex-row md:h-16 md:space-y-0">
          <div className="flex flex-col items-center w-full space-y-4 md:flex-row md:w-auto md:space-y-0">
            <motion.span
              className="text-2xl font-bold text-red-500"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              BookMySpot
            </motion.span>
            <motion.div
              className="w-full md:ml-8 md:relative"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports, and Activities"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 placeholder-gray-500 bg-white rounded-md md:w-96 focus:outline-none text-sky-950"
              />
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Link to="/user/profile">
                  <FaUserCircle className="text-3xl cursor-pointer hover:text-gray-300" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 bg-red-500 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <motion.button
                    className="hover:text-red-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Register
                  </motion.button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
