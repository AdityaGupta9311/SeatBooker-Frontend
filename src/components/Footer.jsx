import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="mt-12 text-white bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">MOVIES BY LANGUAGE</h3>
            <ul className="space-y-2">
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hindi Movies
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                English Movies
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Telugu Movies
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Tamil Movies
              </motion.li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">MOVIES BY GENRE</h3>
            <ul className="space-y-2">
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Action Movies
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Comedy Movies
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Drama Movies
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Thriller Movies
              </motion.li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">EVENTS</h3>
            <ul className="space-y-2">
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Concerts
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Comedy Shows
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Sports
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Workshops
              </motion.li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">HELP</h3>
            <ul className="space-y-2">
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Us
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Contact Us
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Terms & Conditions
              </motion.li>
              <motion.li
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Privacy Policy
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
