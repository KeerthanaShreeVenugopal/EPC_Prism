import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { projectData } from "../data/mockProjectData";
import KPIGrid from "../components/KPIGrid";
import KPIChart from "../components/KPIChart";
import RiskPanel from "../components/RiskPanel";
import { useNavigate } from "react-router-dom";

export default function SupplyChainDashboard() {

  // ====== KPI CALCULATIONS ======
  const navigate = useNavigate();
  const CPI = (projectData.earnedValue / projectData.actualCost).toFixed(2);
  const SPI = (projectData.earnedValue / projectData.plannedValue).toFixed(2);
  const budgetVariance = projectData.plannedBudget - projectData.actualBudget;
  const PPC = ((projectData.weeklyCompletedTasks / projectData.weeklyCommittedTasks) * 100).toFixed(0);
  const safetyRate = (
    (projectData.safety.incidents / projectData.safety.hoursWorked) * 100000
  ).toFixed(2);

  const kpis = [
    { label: "CPI", value: CPI },
    { label: "SPI", value: SPI },
    { label: "Budget Variance", value: `₹${budgetVariance}` },
    { label: "PPC", value: `${PPC}%` },
    { label: "Safety Incident Rate", value: safetyRate },
    { label: "Open RFIs", value: projectData.rfi.open }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 p-12"
    >

      <button
        onClick={() => {
          navigate("/");
          setTimeout(() => {
            const section = document.getElementById("features");
            section?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }}
        className="text-purple-600 font-semibold mb-8 hover:underline"
      >
        ← Back to Home
      </button>
      

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">
          Intelligent <span className="text-purple-600">Supply Chain</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Real-Time EPC Manager Command Center
        </p>
      </div>

      {/* KPI Section */}
      <KPIGrid kpis={kpis} />

      {/* Chart Section */}
      <KPIChart />

      {/* Risk Section */}
      <RiskPanel />
    </motion.div>
  );
}