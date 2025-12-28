import React from "react";
import {
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiBookmark,
} from "react-icons/fi";

import { FaBookmark } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useSavedJobs } from "../../context/SavedJobsContext";

export default function JobCard({ job }) {
  const { saveJob, isJobSaved } = useSavedJobs();
  const isSaved = isJobSaved(job.id);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-200">
      {/* Header: Time and Bookmark */}
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <span className="text-xs sm:text-sm text-teal-500 font-medium">
          {job.postedTime}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            saveJob(job);
          }}
          className="text-gray-400 hover:text-teal-500 transition"
        >
          {isSaved ? (
            <FaBookmark className="text-lg sm:text-xl text-teal-500" />
          ) : (
            <FiBookmark className="text-lg sm:text-xl" />
          )}
        </button>
      </div>

      {/* Job Title and Company */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Company Logo */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-lg flex-shrink-0"></div>

        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-1 line-clamp-2">{job.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 truncate">{job.company}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
          <FiBriefcase className="text-teal-500 text-sm sm:text-base flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">{job.category}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
          <FiClock className="text-teal-500 text-sm sm:text-base flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">{job.type}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
          <FiDollarSign className="text-teal-500 text-sm sm:text-base flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">{job.salary}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600">
          <FiMapPin className="text-teal-500 text-sm sm:text-base flex-shrink-0" />
          <span className="text-xs sm:text-sm truncate">{job.location}</span>
        </div>
      </div>

      {/* Job Details Button */}
      <Link
        to={`/job/${job.id}`}
        className="block w-full sm:w-auto sm:inline-block text-center px-4 sm:px-6 py-2 sm:py-2.5 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition text-sm sm:text-base font-medium"
      >
        Job Details
      </Link>
    </div>
  );
}
