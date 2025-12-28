import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Homepage from "./components/homepage/Homepage";
import AllJobs from "./components/homepage/homepage_jobs/AllJobs";
import AllTestimonials from "./components/homepage/testimonials/AllTestimonials";
import AboutWrapper from "./components/about/AboutWrapper";
import Contact from "./components/contact/Contact";
import Jobs from "./components/jobs/Jobs";
import JobDetails from "./components/jobs/JobDetails";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Profile from "./components/profile/Profile";
import MyApplications from "./components/applications/MyApplications";
import SavedJobs from "./components/jobs/SavedJobs";

export default function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* These routes are for homepage folder */}
        <Route path="/" element={<Homepage />} />
        <Route path="/view-all-jobs" element={<AllJobs />} />
        <Route path="/testimonials" element={<AllTestimonials />} />

        {/* This route for the jobs page */}
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetails />} />

        {/* This route for the about page */}
        <Route path="/about" element={<AboutWrapper />} />

        {/* This route for the contact page */}
        <Route path="/contact" element={<Contact />} />


        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-applications"
          element={
            <ProtectedRoute>
              <MyApplications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved-jobs"
          element={
            <ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
