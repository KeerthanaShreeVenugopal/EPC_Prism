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

import ProtectedRoute from './components/ProtectedRoute';
import UserDashboard from './pages/UserDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/query-engine" element={<QueryEnginePage />} />
        <Route path="/document-analysis" element={<DocumentAnalysisPage />} />
        <Route path="/risk-assessment" element={<RiskAssessmentPage />} />
        <Route path="/analytics-dashboard" element={<AnalyticsDashboardPage />} />
        <Route path="/supply-chain" element={<SupplyChainPage />} />
        <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
        {/* <Route path = "/engineer" element = {<EngineerDashboard/>}/>
        <Route path="/user" element={<ConstructionDashboardPage />} /> */}
        {/* <Route path="/dashboard" element={<ConstructionDashboardPage />} /> */}

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

      </Routes>
    </Router>
  );
}
