import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const location = useLocation();

  if (!currentUser) {
    // Redirect to login page and save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is logged in, render the protected component
  return children;
}
