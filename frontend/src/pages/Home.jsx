import React from "react";
import { motion } from "framer-motion";
import Jobs from "./Jobs";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-teal-700 via-teal-600 to-teal-800 text-amber-50 py-16 sm:py-20 px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
        >
          Explore Top Companies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto opacity-90 px-2"
        >
          Discover innovative companies and learn about their culture, values,
          and opportunities. Start your career journey today!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-6 sm:mt-8"
        >
          <a
            href="jobs"
            className="inline-block bg-amber-400 text-teal-900 font-semibold 
                       px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow 
                       hover:bg-amber-300 transition-colors text-sm sm:text-base md:text-lg"
          >
            Browse Jobs
          </a>
        </motion.div>
      </header>

      {/* Job Section */}
      <section id="jobs" className="px-4 sm:px-6 md:px-10 lg:px-16 py-10 bg-gray-50">
        <Jobs />
      </section>
    </div>
  );
}
