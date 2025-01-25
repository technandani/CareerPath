import React from 'react'
import { motion } from "framer-motion";

const CareerPathRoadmap = () => {
    return (
      <motion.div
        className="bg-gray-900 text-white py-10 px-8 rounded-lg shadow-lg mb-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Career Path Roadmap</h2>
        <div className="relative flex snap-x items-center justify-center space-x-6 px-4">
          {[
            "Learn foundational skills",
            "Build a strong portfolio",
            "Apply for internships",
            "Secure a full-time role",
            "Achieve peak performance",
          ].map((step, index) => (
            <motion.div
              key={index}
              className="snap-center flex-none bg-gray-800 p-5 rounded-lg shadow-md w-52 flex flex-col items-center space-y-4 hover:bg-gray-700 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-white text-lg font-bold rounded-full">
                {index + 1}
              </div>
              <h3 className="text-md text-center font-semibold">{step}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };
  

  export default CareerPathRoadmap;