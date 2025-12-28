import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaUsers, FaBuilding } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function Middle_herxo() {
  return (
    <div className="w-full py-20">
      {/* Main Hero Content */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Find Your Dream Job Today!
          </h1>
          <p className="text-gray-300 text-lg">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row gap-2 shadow-lg mb-12">
          <input
            type="text"
            placeholder="Job Title or Company"
            className="flex-1 px-4 py-3 outline-none text-gray-700"
          />

          <div className="relative flex-1">
            <select className="w-full px-4 py-3 outline-none text-gray-700 appearance-none bg-transparent cursor-pointer">
              <option>Select Location</option>
              <option>New York</option>
              <option>San Francisco</option>
              <option>London</option>
              <option>Remote</option>
            </select>
            <RiArrowDropDownLine className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-gray-500 pointer-events-none" />
          </div>

          <div className="relative flex-1">
            <select className="w-full px-4 py-3 outline-none text-gray-700 appearance-none bg-transparent cursor-pointer">
              <option>Select Category</option>
              <option>Technology</option>
              <option>Marketing</option>
              <option>Design</option>
              <option>Finance</option>
            </select>
            <RiArrowDropDownLine className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-gray-500 pointer-events-none" />
          </div>

          <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded flex items-center gap-2 justify-center transition">
            <CiSearch className="text-xl" />
            Search Job
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="bg-teal-500 bg-opacity-20 p-2.5 rounded-full">
              <IoBriefcaseOutline className="text-white text-xl" />
            </div>
            <div className="text-left">
              <div className="text-white text-lg sm:text-xl font-bold">25,850</div>
              <div className="text-gray-400 text-xs sm:text-sm">Jobs</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-teal-500 bg-opacity-20 p-2.5 rounded-full">
              <FaUsers className="text-white text-xl" />
            </div>
            <div className="text-left">
              <div className="text-white text-lg sm:text-xl font-bold">10,250</div>
              <div className="text-gray-400 text-xs sm:text-sm">Candidates</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-teal-500 bg-opacity-20 p-2.5 rounded-full">
              <FaBuilding className="text-white text-xl" />
            </div>
            <div className="text-left">
              <div className="text-white text-lg sm:text-xl font-bold">18,400</div>
              <div className="text-gray-400 text-xs sm:text-sm">Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
