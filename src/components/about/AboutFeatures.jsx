import React from "react";
import { FaSmile, FaFileAlt, FaAward, FaStar } from "react-icons/fa";

export default function AboutFeatures() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left - Images Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* Large Image - Left */}
          <div className="row-span-2">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=600&fit=crop"
              alt="Professional team"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          {/* Small Image - Top Right */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=290&fit=crop"
              alt="Business meeting"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          
          {/* Small Image - Bottom Right */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=290&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            We're Only Working With The Best
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Ultricies purus dolor viverra mi laoreet at cursus justo. Ultrices purus diam egestas
            amet faucibus tempor blandit.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Quality Job */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaSmile className="text-teal-500 text-xl" />
              </div>
              <span className="font-semibold text-gray-900">Quality Job</span>
            </div>

            {/* Resume Builder */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaFileAlt className="text-teal-500 text-xl" />
              </div>
              <span className="font-semibold text-gray-900">Resume builder</span>
            </div>

            {/* Top Companies */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaAward className="text-teal-500 text-xl" />
              </div>
              <span className="font-semibold text-gray-900">Top Companies</span>
            </div>

            {/* Top Talents */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaStar className="text-teal-500 text-xl" />
              </div>
              <span className="font-semibold text-gray-900">Top Talents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
