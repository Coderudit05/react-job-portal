import React from "react";
import { Link } from "react-router-dom";
import { infoContent, statsData } from "./infoData";

export default function Info() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 bg-white">
      {/* Main Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
        {/* Left - Image */}
        <div className="relative">
          <img
            src={infoContent.image}
            alt="Team collaboration"
            className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            {infoContent.heading}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
            {infoContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              to={infoContent.buttons.primary.link}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded transition text-center text-sm sm:text-base"
            >
              {infoContent.buttons.primary.text}
            </Link>
            <Link
              to={infoContent.buttons.secondary.link}
              className="text-teal-500 hover:text-teal-600 px-6 py-3 transition font-medium text-center text-sm sm:text-base"
            >
              {infoContent.buttons.secondary.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
        {statsData.map((stat) => (
          <div key={stat.id}>
            <h3 className="text-4xl font-bold text-teal-500 mb-2">
              {stat.number}
            </h3>
            <h4 className="text-xl font-semibold text-black mb-2">
              {stat.title}
            </h4>
            <p className="text-gray-600 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
