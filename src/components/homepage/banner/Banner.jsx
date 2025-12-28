import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-16 py-8 sm:py-12 lg:py-16 bg-white">
      <div className="relative bg-black rounded-2xl sm:rounded-3xl overflow-hidden h-[300px] sm:h-[350px] lg:h-[400px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=400&fit=crop"
            alt="Professional team"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Create A Better Future For Yourself
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
              Blandit a massa elementum id scelerisque rhoncus...
            </p>
            <Link
              to="/view-all-jobs"
              className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded transition text-sm sm:text-base"
            >
              Search Job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
