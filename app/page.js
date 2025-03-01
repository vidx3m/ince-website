"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center fixed w-full top-0">
        <h1 className="text-2xl font-bold text-blue-600">Ince</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">How It Works</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Get a Quote</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-500">Contact</a></li>
        </ul>
        <button className="md:hidden text-gray-700">☰</button>
      </nav>

      {/* Hero Section with Animation */}
      <motion.header 
        className="flex-1 flex flex-col items-center justify-center text-center p-8 mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-extrabold text-gray-800">
          Smarter Auto Insurance with <span className="text-blue-600">Ince</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Compare top insurers instantly and find the best coverage at the lowest rates.
        </p>
        <motion.a 
          href="#" 
          className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
        >
          Get a Free Quote
        </motion.a>
      </motion.header>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>© 2024 Ince - Smarter Auto Insurance</p>
      </footer>
    </div>
  );
}
