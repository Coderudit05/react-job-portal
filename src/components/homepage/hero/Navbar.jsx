import React, { useEffect, useRef, useState } from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaBookmark } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useSavedJobs } from "../../../context/SavedJobsContext";
import { useApplications } from "../../../context/ApplicationsContext";

export default function Navbar() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { savedJobs } = useSavedJobs();
  const { applications } = useApplications();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("rememberMe");
    setCurrentUser(null);
    setShowDropdown(false);
    setMobileMenuOpen(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gray-900 border-b sticky top-0 z-50 border-gray-800">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded">
              <IoBriefcaseOutline className="text-white text-xl" />
            </div>
            <span className="text-white font-semibold text-lg">Job Portal</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white transition"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive
                  ? "text-white transition"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              Jobs
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white transition"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white transition"
                  : "text-gray-400 hover:text-white transition"
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* Desktop - Login/Register or User Menu */}
          <div className="hidden md:flex items-center gap-4">
            {currentUser ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
                    {currentUser.fullName.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium">{currentUser.fullName}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-200">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowDropdown(false)}
                    >
                      👤 My Profile
                    </Link>
                    <Link
                      to="/my-applications"
                      className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setShowDropdown(false)}
                    >
                      <span>📄 My Applications</span>
                      {applications.length > 0 && (
                        <span className="bg-teal-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                          {applications.length}
                        </span>
                      )}
                    </Link>
                    <Link
                      to="/saved-jobs"
                      onClick={() => setShowDropdown(false)}
                      className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      <span className="flex items-center">
                        <FaBookmark className="mr-2 text-teal-500" />
                        Saved Jobs
                      </span>
                      {savedJobs.length > 0 && (
                        <span className="bg-teal-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                          {savedJobs.length}
                        </span>
                      )}
                    </Link>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-50"
                    >
                      <CiLogout className="inline mr-2 text-red-600" /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-6 py-2 text-white border border-gray-600 rounded-lg hover:bg-gray-800 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile - Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 hover:bg-gray-800 rounded-lg transition"
            >
              {mobileMenuOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenuAlt3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            {/* Navigation Links */}
            <NavLink
              to="/"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/jobs"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`
              }
            >
              Jobs
            </NavLink>
            <NavLink
              to="/about"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`
              }
            >
              Contact Us
            </NavLink>

            <hr className="border-gray-700 my-3" />

            {/* User Menu or Login/Register */}
            {currentUser ? (
              <div className="space-y-3">
                {/* User Info */}
                <div className="flex items-center gap-3 px-4 py-2 bg-gray-700 rounded-lg">
                  <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center font-semibold">
                    {currentUser.fullName.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {currentUser.fullName}
                    </p>
                    <p className="text-gray-400 text-sm">{currentUser.email}</p>
                  </div>
                </div>

                {/* Menu Items */}
                <Link
                  to="/profile"
                  onClick={closeMobileMenu}
                  className="block px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
                >
                  👤 My Profile
                </Link>
                <Link
                  to="/my-applications"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
                >
                  <span>📄 My Applications</span>
                  {applications.length > 0 && (
                    <span className="bg-teal-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {applications.length}
                    </span>
                  )}
                </Link>
                <Link
                  to="/saved-jobs"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-4 py-2 text-gray-300 hover:bg-gray-700 rounded-lg"
                >
                  <span className="flex items-center">
                    <FaBookmark className="mr-2 text-teal-500" />
                    Saved Jobs
                  </span>
                  {savedJobs.length > 0 && (
                    <span className="bg-teal-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">
                      {savedJobs.length}
                    </span>
                  )}
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-400 hover:bg-gray-700 rounded-lg"
                >
                  <CiLogout className="inline mr-2" /> Logout
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-6 py-2 text-white border border-gray-600 rounded-lg hover:bg-gray-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
