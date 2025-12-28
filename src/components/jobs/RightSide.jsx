import React, { useEffect, useState } from "react";
import { jobsData } from "../data/jobsData";
import JobCard from "./JobCard";

export default function RightSide({ filteredJobs }) {
  const [sortBy, setSortBy] = useState("latest");
  const [sortedJobs, setSortedJobs] = useState(filteredJobs);

  useEffect(() => {
    setSortedJobs(filteredJobs);
  }, [filteredJobs]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortBy(value);

    let sorted = [...filteredJobs];
    if (value === "latest") {
      sorted = filteredJobs;
    } else if (value === "oldest") {
      sorted = sorted.reverse();
    } else if (value === "salary-high") {
      sorted.sort((a, b) => {
        const salaryA = parseInt(a.salary.split("-")[1].replace(/\D/g, ""));
        const salaryB = parseInt(b.salary.split("-")[1].replace(/\D/g, ""));
        return salaryB - salaryA;
      });
    } else if (value === "salary-low") {
      sorted.sort((a, b) => {
        const salaryA = parseInt(a.salary.split("-")[0].replace(/\D/g, ""));
        const salaryB = parseInt(b.salary.split("-")[0].replace(/\D/g, ""));
        return salaryA - salaryB;
      });
    }
    setSortedJobs(sorted);
  };

  return (
    <div className="flex-1 bg-gray-50 p-4 sm:p-6">
      {/* Header with results count and sort */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-700">
          Showing <span className="text-teal-600">{sortedJobs.length}</span> of{" "}
          <span className="text-teal-600">{jobsData.length}</span> results
        </h2>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <label className="text-sm text-gray-600 whitespace-nowrap">Sort by:</label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white text-sm"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="salary-high">Salary: High to Low</option>
            <option value="salary-low">Salary: Low to High</option>
          </select>
        </div>
      </div>

      {/* Job Cards Grid */}
      {sortedJobs.length > 0 ? (
        <div className="space-y-4">
          {sortedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-lg">
          <div className="text-center">
            <svg
              className="mx-auto h-24 w-24 text-gray-300 mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No Jobs Found
            </h3>
            <p className="text-gray-500 mb-6 max-w-md">
              We couldn't find any jobs matching your search criteria. Try
              adjusting your filters or search terms.
            </p>
            <button
              onClick={() => window.location.reload()} // yaha par hamne simple reload use kiya hai filters clear karne ke liye 
              className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
