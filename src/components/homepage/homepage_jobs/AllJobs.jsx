import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import JobCard from "./JobCard";
import { jobsData } from "../../data/jobsData";
import Navbar from "../hero/Navbar";
import { useState, useEffect } from "react";

export default function AllJobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedType, setSelectedType] = useState("All Types");
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  useEffect(() => {
    let filtered = jobsData;

    // Filter by search term (title or company)
    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by location
    if (selectedLocation && selectedLocation !== "All Locations") {
      filtered = filtered.filter((job) => job.location === selectedLocation);
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== "All Categories") {
      filtered = filtered.filter((job) => job.category === selectedCategory);
    }

    // Filter by job type
    if (selectedType && selectedType !== "All Types") {
      filtered = filtered.filter((job) => job.type === selectedType);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, selectedLocation, selectedCategory, selectedType]);

  return (
    <div className="max-w-full">
      <div>
        <Navbar />
        <div className="max-w-full bg-gray-900 min-h-[15vh] sm:min-h-[20vh] flex items-center justify-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center">View All Jobs</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-12 lg:py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">All Available Jobs</h1>

          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
          >
            <FiArrowLeft />
            Go Back
          </Link>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by job title or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>All Locations</option>
              <option>New-York, USA</option>
              <option>San Francisco, USA</option>
              <option>Remote</option>
              <option>London, UK</option>
            </select>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>All Categories</option>
              <option>Hotels & Tourism</option>
              <option>Marketing</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Design</option>
            </select>

            {/* Job Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option>All Types</option>
              <option>Full time</option>
              <option>Part time</option>
            </select>
          </div>

          {/* Results Count and Clear Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mt-4">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing{" "}
              <span className="font-bold text-teal-600">
                {filteredJobs.length}
              </span>{" "}
              jobs
            </p>

            {/* Clear Filters Button */}
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("All Locations");
                setSelectedCategory("All Categories");
                setSelectedType("All Types");
              }}
              className="w-full sm:w-auto px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
            >
              Clear All Filters
            </button>
          </div>
        </div>

        {/* Job Results Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 sm:py-12">
            <p className="text-xl sm:text-2xl text-gray-500">
              No jobs found matching your criteria
            </p>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
