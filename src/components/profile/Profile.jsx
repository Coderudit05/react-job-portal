import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../homepage/hero/Navbar";
import Footer from "../homepage/footer/Footer";
import { FiUser, FiMail, FiEdit2, FiSave } from "react-icons/fi";
import toast from "react-hot-toast";

export default function Profile() {

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: currentUser?.fullName || "",
    email: currentUser?.email || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Get all users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Find current user index
    const userIndex = users.findIndex((u) => u.email === currentUser.email);
    
    if (userIndex !== -1) { // -1 means not found
      // Update user data
      users[userIndex] = {
        ...users[userIndex],
        fullName: formData.fullName, 
        email: formData.email,
      };
      
      // Save to localStorage
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
      
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">My Profile</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition text-sm sm:text-base"
            >
              <FiEdit2 />
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </div>

          {/* Avatar */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-teal-600 text-white rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold">
              {formData.fullName.charAt(0).toUpperCase()}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                {formData.fullName}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">{formData.email}</p>
            </div>
          </div>

          {/* Profile Form */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    isEditing
                      ? "border-gray-300 bg-white"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                    isEditing
                      ? "border-gray-300 bg-white"
                      : "border-gray-200 bg-gray-50"
                  }`}
                />
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <button
                onClick={handleSave}
                className="w-full py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition flex items-center justify-center gap-2"
              >
                <FiSave />
                Save Changes
              </button>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Account Information
          </h3>
          <div className="space-y-3 text-gray-600">
            <p>
              <span className="font-medium">Member Since:</span> December 2024
            </p>
            <p>
              <span className="font-medium">Account Status:</span>{" "}
              <span className="text-green-600 font-medium">Active</span>
            </p>
            <p>
              <span className="font-medium">Total Applications:</span> 0
            </p>
            <p>
              <span className="font-medium">Saved Jobs:</span> 0
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
