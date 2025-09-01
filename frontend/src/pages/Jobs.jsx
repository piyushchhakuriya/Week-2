import React, { useEffect, useState } from "react";
import api from "../api/axios";
import JobCard from "../components/JobCard";
import { motion } from "framer-motion";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .get("/jobs")
      .then((res) => setJobs(res.data))
      .catch(() => {
        // fallback static
        setJobs([]);
      });
  }, []);

  const filteredJobs = jobs.filter((j) =>
    j.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 text-center sm:text-left">
          Find Your Next Job
        </h2>
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-72 md:w-80 p-2.5 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm sm:text-base"
        />
      </div>

      {/* Jobs Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id || idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 col-span-full text-sm sm:text-base"
          >
            No jobs found. Try searching with a different keyword or check back
            later.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}
