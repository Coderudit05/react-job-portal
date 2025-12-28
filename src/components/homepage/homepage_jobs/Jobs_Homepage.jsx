import React from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import { jobsData } from "../../data/jobsData";

export default function Jobs() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16 bg-amber-50">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">
            Recent Jobs Available
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            eum.
          </p>
        </div>
        <Link
          to="/view-all-jobs"
          className="text-teal-500 hover:text-teal-600 font-medium transition whitespace-nowrap text-sm sm:text-base"
        >
          View all
        </Link>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* JobCard components will be rendered here */}
        {jobsData.slice(0, 6).map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
