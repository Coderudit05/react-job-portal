import { IoBriefcaseOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { BsBookmark } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSavedJobs } from "../../../context/SavedJobsContext";

export default function JobCard({ job }) {
  const { saveJob, isJobSaved } = useSavedJobs();
  const isSaved = isJobSaved(job.id);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-lg transition">
      {/* Header with Time and Bookmark */}
      <div className="flex justify-between items-start mb-3 sm:mb-4">
        <span className="text-teal-500 text-xs sm:text-sm">{job.postedTime}</span>
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
            <BsBookmark className="text-lg sm:text-xl" />
          )}
        </button>
      </div>

      {/* Company Logo and Job Title */}
      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xl sm:text-2xl font-bold">B</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-1 line-clamp-2">
            {job.title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm truncate">{job.company}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5">
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
          <IoBriefcaseOutline className="text-teal-500 flex-shrink-0" />
          <span className="truncate">{job.category}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
          <IoTimeOutline className="text-teal-500 flex-shrink-0" />
          <span className="truncate">{job.type}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
          <HiOutlineBanknotes className="text-teal-500 flex-shrink-0" />
          <span className="truncate">{job.salary}</span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-xs sm:text-sm">
          <IoLocationOutline className="text-teal-500 flex-shrink-0" />
          <span className="truncate">{job.location}</span>
        </div>
      </div>

      {/* Job Details Button */}
      {/* now we will add Link here so we can navigate to job details page */}

      <Link
        to={`/job/${job.id}`}
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-2 sm:py-2.5 rounded transition text-center block text-sm sm:text-base font-medium"
      >
        Job Details
      </Link>
    </div>
  );
}
