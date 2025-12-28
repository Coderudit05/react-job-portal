import { useState, useEffect } from "react";
import { jobsData } from "../data/jobsData";
import Navbar from "../homepage/hero/Navbar";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { FiFilter, FiX } from "react-icons/fi";

export default function Jobs() {
  // Mobile filter toggle state
  const [showFilters, setShowFilters] = useState(false);
  
  // All filter states
  const [searchTitle, setSearchTitle] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [selectedDatePosted, setSelectedDatePosted] = useState("");
  const [salaryRange, setSalaryRange] = useState([0, 99999]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  useEffect(() => {
    let filteredJobs = jobsData;

    // Filter by search title
    if (searchTitle) {
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTitle.toLowerCase()) || // ye line ka meaning hai ke job title mein searchTitle jo bhi hai wo hona chahiye
          job.company.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    // Filter by location
    if (selectedLocation) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(selectedLocation.toLowerCase())
      );
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedCategories.includes(job.category)
      );
    }

    // Filter by job types
    if (selectedJobTypes.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedJobTypes.includes(job.type)
      );
    }

    // Filter by experience levels
    if (selectedExperience.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        selectedExperience.includes(job.experience)
      );
    }

    // Filter by date posted
    if (selectedDatePosted && selectedDatePosted !== "All") {
      const now = new Date();
      filteredJobs = filteredJobs.filter((job) => {
        const postedDate = new Date(job.postedDate);
        const timeDiff = now - postedDate;
        const daysDiff = timeDiff / (1000 * 3600 * 24);

        if (selectedDatePosted === "Last Hour") {
          return timeDiff <= 3600000; // 1 hour in milliseconds
        } else if (selectedDatePosted === "Last 24 Hours") {
          return timeDiff <= 86400000; // 24 hours in milliseconds
        } else if (selectedDatePosted === "Last 7 Days") {
          return daysDiff <= 7;
        } else if (selectedDatePosted === "Last 14 Days") {
          return daysDiff <= 14;
        }
        return true;
      });
    }

    // Filter by salary Range
    filteredJobs = filteredJobs.filter((job) => {
      const salaryParts = job.salary.split("-");
      const minSalary = parseInt(salaryParts[0].replace(/\D/g, ""));
      const maxSalary = parseInt(salaryParts[1].replace(/\D/g, ""));
      return minSalary >= salaryRange[0] && maxSalary <= salaryRange[1];
    });

    // Filter by tags
    if (selectedTags.length > 0) {
      filteredJobs = filteredJobs.filter((job) =>
        job.tags.some((tag) => selectedTags.includes(tag))
      );
    }

    // Update the filtered jobs in the parent component
    setFilteredJobs(filteredJobs);
  }, [
    searchTitle,
    selectedLocation,
    selectedCategories,
    selectedJobTypes,
    selectedExperience,
    selectedDatePosted,
    salaryRange,
    selectedTags,
  ]);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar - Fixed at top */}
      <Navbar />
      
      {/* Mobile Filter Toggle Button */}
      <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition w-full justify-center"
        >
          {showFilters ? <FiX className="text-xl" /> : <FiFilter className="text-xl" />}
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Main Content - Scrollable sections */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Left Side - Independently scrollable - Hidden on mobile unless toggled, sidebar on desktop */}
        <div className={`${
          showFilters ? "block" : "hidden"
        } lg:block w-full lg:w-80 overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200 absolute lg:relative z-10 bg-white lg:bg-transparent h-[calc(100vh-140px)] lg:h-auto`}>
          <LeftSide
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedJobTypes={selectedJobTypes}
            setSelectedJobTypes={setSelectedJobTypes}
            selectedExperience={selectedExperience}
            setSelectedExperience={setSelectedExperience}
            selectedDatePosted={selectedDatePosted}
            setSelectedDatePosted={setSelectedDatePosted}
            salaryRange={salaryRange}
            setSalaryRange={setSalaryRange}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>

        {/* Right Side - Independently scrollable */}
        <div className="flex-1 overflow-y-auto">
          <RightSide filteredJobs={filteredJobs} />
        </div>
      </div>
    </div>
  );
}
