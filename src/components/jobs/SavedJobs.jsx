import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../homepage/hero/Navbar";
import { useSavedJobs } from "../../context/SavedJobsContext";
import {
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiTrash2,
} from "react-icons/fi";

export default function SavedJobs() {
  const { savedJobs, removeJob } = useSavedJobs();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Saved Jobs</h1>
          <p className="text-gray-600 text-sm sm:text-base">
            You have saved {savedJobs.length} job
            {savedJobs.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Saved Jobs List */}
        {savedJobs.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 sm:p-12 text-center">
            <div className="text-5xl sm:text-6xl mb-4">💼</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              No Saved Jobs Yet
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Start saving jobs by clicking the bookmark icon on job cards
            </p>
            <Link
              to="/jobs"
              className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {savedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full">
                    {/* Company Logo */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-lg flex-shrink-0"></div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm sm:text-base">{job.company}</p>

                      {/* Job Details */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiBriefcase className="text-teal-500" />
                          <span className="text-sm">{job.category}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiClock className="text-teal-500" />
                          <span className="text-sm">{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiDollarSign className="text-teal-500" />
                          <span className="text-sm">{job.salary}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <FiMapPin className="text-teal-500" />
                          <span className="text-sm">{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 ml-4">
                    <Link
                      to={`/job/${job.id}`}
                      className="px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition whitespace-nowrap"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => removeJob(job.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                      title="Remove from saved jobs"
                    >
                      <FiTrash2 className="text-xl" />
                    </button>
                  </div>
                </div>

                {/* Saved Date */}
                <p className="text-sm text-gray-500 mt-2">
                  Saved on {new Date(job.savedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
