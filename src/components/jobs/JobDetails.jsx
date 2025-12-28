import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";
import { jobsData } from "../data/jobsData"
import Navbar from "../homepage/hero/Navbar";

import { useSavedJobs } from "../../context/SavedJobsContext";
import ApplicationModal from "../applications/ApplicationModal";
import { useApplications } from "../../context/ApplicationsContext";
import toast from "react-hot-toast";

export default function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find((j) => j.id === parseInt(id));

  const { saveJob, isJobSaved } = useSavedJobs();
  const isSaved = isJobSaved(parseInt(id));

  const { applyForJob, hasApplied } = useApplications();
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const alreadyApplied = hasApplied(parseInt(id));

  const handleApplyClick = () => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      toast.error("Please login to apply for jobs");
      navigate("/login");
      return;
    }
    if (alreadyApplied) {
      toast.error("You have already applied for this job");
      return;
    }

    setShowApplicationModal(true);
  };

  const handleApplicationSubmit = (applicationData) => {
    const success = applyForJob(job, applicationData);

    if (success) {
      setShowApplicationModal(false);
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700">Job Not Found</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-teal-600 mb-4 sm:mb-6 transition text-sm sm:text-base"
        >
          <FiArrowLeft className="text-lg sm:text-xl" />
          <span className="font-medium">Back to Jobs</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {/* Job Header */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-lg flex-shrink-0"></div>
                <div className="flex-1">
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {job.title}
                  </h1>
                  <p className="text-base sm:text-lg lg:text-xl text-gray-600">{job.company}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiBriefcase className="text-teal-500 text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm">{job.category}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiClock className="text-teal-500 text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm">{job.type}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiDollarSign className="text-teal-500 text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMapPin className="text-teal-500 text-base sm:text-lg" />
                  <span className="text-xs sm:text-sm">{job.location}</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{job.description}</p>
            </div>

            {/* Requirements */}
            {job.requirements && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Requirements
                </h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                    >
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Responsibilities */}
            {job.responsibilities && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                    >
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Benefits */}
            {job.benefits && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Benefits
                </h2>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                    >
                      <span className="text-teal-500 mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Company Info */}
            {job.companyInfo && (
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  About Company
                </h2>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">{job.companyInfo.about}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 text-xs sm:text-sm">Company Size:</span>
                    <p className="font-medium text-gray-900">
                      {job.companyInfo.size}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Founded:</span>
                    <p className="font-medium text-gray-900">
                      {job.companyInfo.founded}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-500">Website:</span>
                    <p className="font-medium text-teal-600">
                      {job.companyInfo.website}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm lg:sticky lg:top-6 space-y-4 sm:space-y-6">
              {/* Apply Button */}
              <button 
                onClick={handleApplyClick}
                disabled={alreadyApplied}
                className={`w-full py-2.5 sm:py-3 font-semibold rounded-lg transition text-sm sm:text-base ${
                  alreadyApplied
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-teal-500 text-white hover:bg-teal-600"
                }`}
              >
                {alreadyApplied ? "Already Applied" : "Apply Now"}
              </button>

              {/* Already Applied Badge */}
              {alreadyApplied && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                  <p className="text-green-700 text-sm font-medium">
                    ✓ Application Submitted
                  </p>
                  <p className="text-green-600 text-xs mt-1">
                    View in "My Applications"
                  </p>
                </div>
              )}

              {/* Job Overview */}
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Job Overview
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <FiCalendar className="text-teal-500 text-lg sm:text-xl" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500">Posted Date</p>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">
                        {job.postedTime}
                      </p>
                    </div>
                  </div>
                  {job.deadline && (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <FiCalendar className="text-teal-500 text-lg sm:text-xl" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Deadline</p>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">
                          {job.deadline}
                        </p>
                      </div>
                    </div>
                  )}
                  {job.experience && (
                    <div className="flex items-center gap-2 sm:gap-3">
                      <FiUsers className="text-teal-500 text-lg sm:text-xl" />
                      <div>
                        <p className="text-xs sm:text-sm text-gray-500">Experience</p>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">
                          {job.experience}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Share Job */}
              <div className="border-t pt-4 sm:pt-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Share this job
                </h3>
                <div className="flex gap-2 sm:gap-3">
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <span className="text-blue-600">📘</span>
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <span className="text-blue-400">🐦</span>
                  </button>
                  <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">
                    <span className="text-blue-700">💼</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal
        job={job}
        isOpen={showApplicationModal}
        onClose={() => setShowApplicationModal(false)}
        onSubmit={handleApplicationSubmit}
      />
    </div>
  );
}
