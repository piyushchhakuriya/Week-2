import React from "react";
import { motion } from "framer-motion";

export default function Companies() {
  const mock = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container mx-auto py-8 sm:py-12 px-4">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center text-teal-900">
        {mock.length} Companies Found
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {mock.map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-gray-900 p-4 sm:p-6 md:p-8 
                       rounded-xl shadow-lg hover:shadow-2xl 
                       transition-shadow flex flex-col"
          >
            {/* Logo Placeholder */}
            <div className="h-16 w-16 sm:h-20 sm:w-20 flex items-center justify-center 
                            bg-gradient-to-r from-teal-400 to-teal-600 text-white 
                            rounded-lg mb-4 sm:mb-6 text-lg sm:text-xl font-bold">
              C{i}
            </div>

            {/* Company Info */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-teal-800 mb-2">
              Company {i}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 flex-grow">
              Innovative solutions and exciting career opportunities at Company {i}.
            </p>

            {/* Action */}
            <div className="mt-4 sm:mt-6">
              <button className="w-full bg-teal-600 hover:bg-teal-700 
                                 text-white px-3 sm:px-4 py-2 rounded-lg 
                                 text-sm sm:text-base font-medium transition-colors">
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
