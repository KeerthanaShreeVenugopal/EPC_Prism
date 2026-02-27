import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QueryEnginePage from './pages/QueryEnginePage';
import DocumentAnalysisPage from './pages/DocumentAnalysisPage';
import RiskAssessmentPage from './pages/RiskAssessmentPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import SupplyChainPage from './pages/SupplyChainPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import Login from './pages/Login';

import EngineerDashboard from './pages/Engineerdashboard';



import ConstructionDashboardPage from './pages/ConstructionDashboardPage';
import AttendanceDashboardPage from "./pages/AttendanceDashboardPage";


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

        <Route path = "/engineer" element = {<EngineerDashboard/>}/>
        <Route path="/construction-dashboard" element={<ConstructionDashboardPage />} />
        <Route path="/dashboard" element={<ConstructionDashboardPage />} />
        <Route path="/attendance-dashboard" element={<AttendanceDashboardPage />} />

      </Routes>
    </Router>
  );
}
