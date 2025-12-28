import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { jobsData } from "../data/jobsData";

export default function LeftSide({
  searchTitle,
  setSearchTitle,
  selectedLocation,
  setSelectedLocation,
  selectedCategories,
  setSelectedCategories,
  selectedJobTypes,
  setSelectedJobTypes,
  selectedExperience,
  setSelectedExperience,
  selectedDatePosted,
  setSelectedDatePosted,
  salaryRange,
  setSalaryRange,
  selectedTags,
  setSelectedTags,
}) {
  const categories = [
    { name: "Commerce", count: 10 },
    { name: "Telecomunications", count: 10 },
    { name: "Hotels & Tourism", count: 10 },
    { name: "Education", count: 10 },
    { name: "Financial Services", count: 10 },
  ];

  const jobTypes = [
    { name: "Full Time", count: 10 },
    { name: "Part Time", count: 10 },
    { name: "Freelance", count: 10 },
    { name: "Internship", count: 10 },
    { name: "Fixed Price", count: 10 },
  ];

  const experienceLevels = [
    { name: "Fresher", count: 10 },
    { name: "No-experience", count: 10 },
    { name: "Expert", count: 10 },
    { name: "Intermediate", count: 10 },
    { name: "Career Level", count: 10 },
  ];

  const datePostedOptions = [
    { name: "All", count: 10 },
    { name: "Last Hour", count: 10 },
    { name: "Last 24 Hours", count: 10 },
    { name: "Last 7 Days", count: 10 },
    { name: "Last 14 Days", count: 10 },
  ];

  const tags = ["design", "sales", "marketting", "business", "consulting"];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleJobTypeChange = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleExperienceChange = (exp) => {
    setSelectedExperience((prev) =>
      prev.includes(exp) ? prev.filter((e) => e !== exp) : [...prev, exp]
    );
  };

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    // In LeftSide.jsx, change this line:
    <div className="w-80 bg-[#EBF5F4] p-6 border-r border-gray-200 overflow-y-auto">
      {" "}
      <h2 className="text-lg font-bold mb-6">Filters</h2>
      {/* Search by Title */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Search by title or company
        </label>
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Job title or company"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>
      {/* Location */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-2 block">
          Location
        </label>
        <input
          type="text"
          placeholder="City, state or zip code"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>
      {/* Category */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">
          Category
        </label>
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex items-center justify-between mb-2"
          >
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
                className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="ml-2 text-gray-700">{category.name}</span>
            </label>
            <span className="text-gray-400 text-sm">{category.count}</span>
          </div>
        ))}
      </div>
      {/* Job Type */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">
          Job Type
        </label>
        {jobTypes.map((type) => (
          <div
            key={type.name}
            className="flex items-center justify-between mb-2"
          >
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedJobTypes.includes(type.name)}
                onChange={() => handleJobTypeChange(type.name)}
                className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="ml-2 text-gray-700">{type.name}</span>
            </label>
            <span className="text-gray-400 text-sm">{type.count}</span>
          </div>
        ))}
      </div>
      {/* Experience Level */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">
          Experience Level
        </label>
        {experienceLevels.map((exp) => (
          <div
            key={exp.name}
            className="flex items-center justify-between mb-2"
          >
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedExperience.includes(exp.name)}
                onChange={() => handleExperienceChange(exp.name)}
                className="w-4 h-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="ml-2 text-gray-700">{exp.name}</span>
            </label>
            <span className="text-gray-400 text-sm">{exp.count}</span>
          </div>
        ))}
      </div>
      {/* Date Posted */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">
          Date Posted
        </label>
        {datePostedOptions.map((option) => (
          <div
            key={option.name}
            className="flex items-center justify-between mb-2"
          >
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="datePosted"
                checked={selectedDatePosted === option.name}
                onChange={() => setSelectedDatePosted(option.name)}
                className="w-4 h-4 text-teal-500 border-gray-300 focus:ring-teal-500"
              />
              <span className="ml-2 text-gray-700">{option.name}</span>
            </label>
            <span className="text-gray-400 text-sm">{option.count}</span>
          </div>
        ))}
      </div>
      {/* Salary Range */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">
          Salary
        </label>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-700 font-medium">
            Salary: ${salaryRange[0]} - ${salaryRange[1]}
          </span>
        </div>
        <input
          type="range"
          min="0"
          max="99999"
          value={salaryRange[1]}
          onChange={(e) => setSalaryRange([0, parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-500"
        />
        <button className="w-full mt-3 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition">
          Apply
        </button>
      </div>
      {/* Tags */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-gray-700 mb-3 block">
          Tags
        </label>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`px-3 py-1 rounded-full text-sm transition ${
                selectedTags.includes(tag)
                  ? "bg-teal-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
