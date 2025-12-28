import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SavedJobsProvider } from "./context/SavedJobsContext";
import { ApplicationsProvider } from "./context/ApplicationsContext.jsx";

createRoot(document.getElementById("root")).render(
  <SavedJobsProvider>
    <ApplicationsProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ApplicationsProvider>
  </SavedJobsProvider>
);
