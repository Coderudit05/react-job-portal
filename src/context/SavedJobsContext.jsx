import React, { createContext, useState, useEffect, useContext } from "react";

import toast from "react-hot-toast";

// Create the context
const SavedJobsContext = createContext(null);

// Create Provider Component
export const SavedJobsProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState([]);

  // Load Saved Jobs from Local Storage on mount

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      const userSavedJobs = JSON.parse(
        localStorage.getItem(`savedJobs_${currentUser.email}`) || "[]"
      );

      setSavedJobs(userSavedJobs);
    }
  }, []);

  // Save Job Function
  const saveJob = (job) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      toast.error("Please Login first to Save Jobs");
      return;
    }

    const isAlreadySaved = savedJobs.some((j) => j.id === job.id);

    if (isAlreadySaved) {
      // Unsave Job
      const updatedJobs = savedJobs.filter((j) => j.id !== job.id);

      setSavedJobs(updatedJobs);
      localStorage.setItem(
        `savedJobs_${currentUser.email}`,
        JSON.stringify(updatedJobs)
      );

      toast.success("Job removed from the Saved Jobs");
    } else {
      // If not saved yet then save it
      const updatedJobs = [
        ...savedJobs,
        { ...job, savedAt: new Date().toISOString() },
      ];
      setSavedJobs(updatedJobs);

      localStorage.setItem(
        `savedJobs_${currentUser.email}`,
        JSON.stringify(updatedJobs)
      );

      toast.success("Job Saved Successfully!");
    }
  };

  // Check if job is Saved

  const isJobSaved = (jobId) => {
    return savedJobs.some((job) => job.id === jobId);
  };

  // Remove job

  const removeJob = (jobId) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const updatedJobs = savedJobs.filter((job) => job.id !== jobId);

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      `savedJobs_${currentUser.email}`,
      JSON.stringify(updatedJobs)
    );

    toast.success("Job removed from saved jobs");
  };

  return (
    <SavedJobsContext.Provider
      value={{ savedJobs, saveJob, isJobSaved, removeJob }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
};

// Custom Hook to use SavedJobs Context

export const useSavedJobs = () => {
  const context = useContext(SavedJobsContext);

  if (!context) {
    throw new Error("useSavedJobs must be within SavedJobsProvider");
  }
  return context;
};
