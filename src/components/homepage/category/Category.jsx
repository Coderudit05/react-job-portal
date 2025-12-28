import React from "react";
import { GiWheat } from "react-icons/gi";
import { GiMetalBar } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { FaHelmetSafety } from "react-icons/fa6";
import { FaHotel } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi2";
import { FaBus } from "react-icons/fa";

export default function Category() {
  const categories = [
    { id: 1, name: "Agriculture", icon: <GiWheat />, jobs: 1254 },
    { id: 2, name: "Metal Production", icon: <GiMetalBar />, jobs: 816 },
    { id: 3, name: "Commerce", icon: <BsShop />, jobs: 2082 },
    { id: 4, name: "Construction", icon: <FaHelmetSafety />, jobs: 1520 },
    { id: 5, name: "Hotels & Tourism", icon: <FaHotel />, jobs: 1022 },
    { id: 6, name: "Education", icon: <IoSchool />, jobs: 1496 },
    { id: 7, name: "Financial Services", icon: <HiCurrencyDollar />, jobs: 1529 },
    { id: 8, name: "Transport", icon: <FaBus />, jobs: 1244 },
  ];

  return (
    <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 bg-[#EBF5F4]">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3">
          Browse by Category
        </h2>
        <p className="text-gray-600 text-sm sm:text-base px-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ad blanditiis placeat esse facere repellat fuga ex consectetur illo voluptatum, culpa suscipit hic ut itaque error odit officia. Labore, inventore.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition cursor-pointer group"
          >
            <div className="text-teal-500 text-5xl mb-4 flex justify-center group-hover:scale-110 transition">
              {category.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {category.name}
            </h3>
            <p className="text-teal-500 text-sm">{category.jobs} jobs</p>
          </div>
        ))}
      </div>
    </div>
  );
}
