import React from "react";
import AboutHeader from "./AboutHeader";
import FAQ from "./FAQ";
import AboutFeatures from "./AboutFeatures";
import Footer from "../homepage/footer/Footer";

import {
  FaUserPlus,
  FaFileUpload,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

export default function AboutWrapper() {
  return (
    <div>
      <AboutHeader />
      <div className="max-w-full bg-gray-900 min-h-[20vh] flex items-center justify-center text-white text-6xl font-bold">
        <h1>About Us</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Connecting Talent with Opportunities Worldwide
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to bridge the gap between talented professionals
              and leading companies across the globe. With thousands of job
              listings and a user-friendly platform, we make it easy for job
              seekers to find their dream career and for employers to discover
              exceptional talent. We believe that everyone deserves access to
              meaningful work that aligns with their skills, passions, and
              goals. Join our community today and take the next step in your
              professional journey.
            </p>
          </div>

          {/* Right - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop"
              alt="Professional workplace"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* How it works Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-3">How it works</h2>
          <p className="text-gray-600">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus...
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 - Create Account */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                <FaUserPlus className="text-teal-500 text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Create Account
            </h3>
            <p className="text-gray-600 text-sm">
              Sign up in minutes and create your professional profile to get
              started
            </p>
          </div>

          {/* Step 2 - Upload Resume */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                <FaFileUpload className="text-teal-500 text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">
              Upload Resume
            </h3>
            <p className="text-gray-600 text-sm">
              Upload your resume and let employers discover your skills and
              experience
            </p>
          </div>

          {/* Step 3 - Find Jobs */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                <FaBriefcase className="text-teal-500 text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Find Jobs</h3>
            <p className="text-gray-600 text-sm">
              Browse thousands of job listings and find positions that match
              your goals
            </p>
          </div>

          {/* Step 4 - Apply Job */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-teal-500 text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">Apply Job</h3>
            <p className="text-gray-600 text-sm">
              Apply with one click and track your applications in real-time
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQ />

      {/* About Features */}
      <AboutFeatures />

      {/* Footer */}
      <Footer />
    </div>
  );
}
