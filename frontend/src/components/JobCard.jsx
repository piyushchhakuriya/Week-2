import React from "react";
import { motion } from "framer-motion";

export default function JobCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 text-amber-100 
                 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg 
                 hover:shadow-amber-500/30 transition-all duration-300"
    >
      {/* Job Title */}
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        {job.title}
      </h3>

      {/* Company + Location */}
      <p className="text-xs sm:text-sm md:text-base text-amber-300 mb-3 font-medium">
        {job.company} · {job.location}
      </p>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg text-amber-100/90 line-clamp-3 leading-relaxed">
        {job.description}
      </p>

      {/* Footer Section */}
      <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <span className="text-[10px] sm:text-xs md:text-sm font-bold 
                         bg-gradient-to-r from-amber-400 to-amber-300 
                         text-teal-900 px-3 py-1 rounded-full shadow-sm self-start sm:self-auto">
          {job.salary}
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-amber-100 hover:bg-amber-200 text-teal-900 
                     px-3 sm:px-4 py-2 rounded-lg font-semibold 
                     text-sm sm:text-base shadow-md transition"
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
}
