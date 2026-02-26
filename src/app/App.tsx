import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QueryEnginePage from './pages/QueryEnginePage';
import DocumentAnalysisPage from './pages/DocumentAnalysisPage';
import RiskAssessmentPage from './pages/RiskAssessmentPage';
import AnalyticsDashboardPage from './pages/AnalyticsDashboardPage';
import SupplyChainPage from './pages/SupplyChainPage';
import KnowledgeBasePage from './pages/KnowledgeBasePage';
import Login from './pages/Login';

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
      </Routes>
    </Router>
  );
}
