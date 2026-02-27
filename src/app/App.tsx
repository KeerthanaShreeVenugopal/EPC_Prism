import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QueryEnginePage from './pages/QueryEnginePage';
import DocumentAnalysisPage from './pages/DocumentAnalysisPage';
import RiskAssessmentPage from './pages/RiskAssessmentPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import SupplyChainPage from './pages/SupplyChainPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import Login from './pages/Login';


import EngineerDashboard from './pages/EngineerDashboard';
import UnAuthorized from './pages/UnAuthorized';
import ManagerDashboard from "./pages/ManagerDashboard";


import AttendanceDashboardPage from "./pages/AttendanceDashboardPage";

import ProtectedRoute from './components/ProtectedRoute';
import UserDashboard from './pages/UserDashboard';

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
        <Route path="/unauthorized" element={<UnAuthorized />} />
        

        {/* PROTECTED ROLE-BASED ROUTES */}

        <Route
          path="/engineer"
          element={
            <ProtectedRoute role="engineer">
              <EngineerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="user">
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="admin">
              <AttendanceDashboardPage />
            </ProtectedRoute>
          }
        />

<Route
          path="/manager"
          element={
            <ProtectedRoute role="manager">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />
        

      </Routes>
    </Router>
  );
}
