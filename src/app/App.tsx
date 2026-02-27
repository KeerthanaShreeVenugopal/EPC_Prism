import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QueryEnginePage from './pages/QueryEnginePage';
import DocumentAnalysisPage from './pages/DocumentAnalysisPage';
import RiskAssessmentPage from './pages/RiskAssessmentPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import SupplyChainPage from './pages/SupplyChainPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import Login from './pages/Login';

import EngineerDashboard from './pages/EngineerDashboard.jsx';

import { useEffect, useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConstructionDashboardPage from './pages/ConstructionDashboardPage';
import AttendanceDashboardPage from "./pages/AttendanceDashboardPage";


export default function App() {
  // Load saved theme
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  // Toggle function
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<HomePage toggleTheme={toggleTheme} theme={theme} />} />
        <Route path="/query-engine" element={<QueryEnginePage />} />
        <Route path="/document-analysis" element={<DocumentAnalysisPage />} />
        <Route path="/risk-assessment" element={<RiskAssessmentPage />} />
        <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
        <Route path="/supply-chain" element={<SupplyChainPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/login" element={<Login />} />

        <Route path = "/engineer" element = {<EngineerDashboard/>}/>
        <Route path="/construction-dashboard" element={<ConstructionDashboardPage />} />
        <Route path="/dashboard" element={<ConstructionDashboardPage />} />
        <Route path="/attendance-dashboard" element={<AttendanceDashboardPage />} />

      </Routes>
    </Router>
  );
}
