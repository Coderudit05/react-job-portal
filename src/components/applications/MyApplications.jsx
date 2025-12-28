import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../homepage/hero/Navbar";
import { useApplications } from "../../context/ApplicationsContext";
import {
  FiBriefcase,
  FiMapPin,
  FiDollarSign,
  FiClock,
  FiTrash2,
} from "react-icons/fi";

export default function MyApplications() {
  const { applications, withdrawApplication } = useApplications();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            My Applications
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            You have submitted {applications.length} application
            {applications.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Applications List */}
        {applications.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 sm:p-12 text-center">
            <div className="text-5xl sm:text-6xl mb-4">📄</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              No Applications Yet
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              You haven't applied to any jobs yet. Start exploring
              opportunities!
            </p>
            <Link
              to="/jobs"
              className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-200 p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-3 mb-3">
                      <div className="w-full sm:w-auto">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                          {app.jobTitle}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base">{app.company}</p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium self-start ${
                          app.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : app.status === "Accepted"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {app.status}
                      </span>
                    </div>

                    {/* Job Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiMapPin className="text-teal-500" />
                        <span className="text-sm">{app.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiClock className="text-teal-500" />
                        <span className="text-sm">{app.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiDollarSign className="text-teal-500" />
                        <span className="text-sm">{app.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <FiBriefcase className="text-teal-500" />
                        <span className="text-sm">
                          Applied: {app.appliedDate}
                        </span>
                      </div>
                    </div>

                    {/* Application Details */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-500 mb-1 font-medium">
                            Contact Information
                          </p>
                          <p className="text-sm text-gray-900">
                            {app.fullName}
                          </p>
                          <p className="text-sm text-gray-900">{app.email}</p>
                          <p className="text-sm text-gray-900">{app.phone}</p>
                        </div>
                        {app.resume && (
                          <div>
                            <p className="text-xs text-gray-500 mb-1 font-medium">
                              Resume
                            </p>
                            <a
                              href={app.resume}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-teal-500 hover:underline"
                            >
                              View Resume →
                            </a>
                          </div>
                        )}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 mb-1 font-medium">
                          Cover Letter
                        </p>
                        <p className="text-sm text-gray-700 line-clamp-3">
                          {app.coverLetter}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-4 pt-4 border-t">
                  <Link
                    to={`/job/${app.jobId}`}
                    className="flex-1 text-center px-6 py-2 border border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition"
                  >
                    View Job Details
                  </Link>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to withdraw this application?"
                        )
                      ) {
                        withdrawApplication(app.id);
                      }
                    }}
                    className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <FiTrash2 />
                    Withdraw
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
