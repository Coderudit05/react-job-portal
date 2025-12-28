import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const ApplicationsContext = createContext();

export const ApplicationsProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);

  // FIX 1: Remove dependency array (was causing infinite loop)
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      const userApplications = JSON.parse(
        localStorage.getItem(`applications_${currentUser.email}`) || "[]"
      );
      setApplications(userApplications);
    }
  }, []); // ← ADD empty array here

  const applyForJob = (jobData, applicationData) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      toast.error("Please login to apply for jobs");
      return false;
    }

    const hasAppliedAlready = applications.some(
      (app) => app.jobId === jobData.id
    );

    if (hasAppliedAlready) {
      toast.error("You have already applied for this job!");
      return false; // ← ADD return false
    }

    // FIX 2: Change Data.now() to Date.now()
    const newApplication = {
      id: Date.now(), // ← FIX: was Data.now()
      jobId: jobData.id,
      jobTitle: jobData.title,
      company: jobData.company,
      location: jobData.location,
      salary: jobData.salary,
      type: jobData.type,
      appliedDate: new Date().toLocaleDateString(),
      status: "Pending",
      ...applicationData,
    };

    const updatedApplications = [...applications, newApplication];
    setApplications(updatedApplications);

    localStorage.setItem(
      `applications_${currentUser.email}`, // ← FIX: was application_ (missing 's')
      JSON.stringify(updatedApplications)
    );

    toast.success("Application submitted successfully!");
    return true;
  };

  const hasApplied = (jobId) => {
    return applications.some((app) => app.jobId === jobId);
  };

  const withdrawApplication = (applicationId) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const updatedApplications = applications.filter(
      (app) => app.id !== applicationId
    );
    setApplications(updatedApplications);
    localStorage.setItem(
      `applications_${currentUser.email}`, // ← FIX: was application_
      JSON.stringify(updatedApplications)
    );
    toast.success("Application withdrawn successfully");
  };

  return (
    <ApplicationsContext.Provider
      value={{ applications, applyForJob, hasApplied, withdrawApplication }}
    >
      {children}
    </ApplicationsContext.Provider>
  );
};

export const useApplications = () => {
  const context = useContext(ApplicationsContext);
  if (!context) {
    throw new Error("useApplications must be used within ApplicationsProvider");
  }
  return context;
};
