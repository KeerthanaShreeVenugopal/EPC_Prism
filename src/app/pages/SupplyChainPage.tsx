import { motion } from "motion/react";
import { dashboardData } from "../data/mockDashboardData";
import KPISection from "../components/dashboard/KPISection";
import NeonLineChart from "../components/dashboard/NeonLineChart";
import FinancePanel from "../components/dashboard/FinancePanel";
import SafetyPanel from "../components/dashboard/SafetyPanel";
import ProductivityChart from "../components/dashboard/ProductivityChart";
import ChangeOrderTable from "../components/dashboard/ChangeOrderTable";
import { useNavigate } from "react-router-dom";

export default function SupplyChainPage() {
  const { financial, productivity, safety, changeOrders } = dashboardData;
  const navigate = useNavigate();

  const CPI = (financial.earnedValue / financial.actualBudget).toFixed(2);
  const SPI = (financial.earnedValue / financial.plannedBudget).toFixed(2);

  const kpis = [
    { label: "CPI", value: CPI },
    { label: "SPI", value: SPI },
    { label: "PPC", value: `${productivity.ppc}%` },
    { label: "Labor Productivity", value: `${productivity.labor.at(-1)}%` },
    { label: "Equipment Utilization", value: `${productivity.equipment.at(-1)}%` },
    { label: "Open RFIs", value: dashboardData.risk.openRFIs },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#0f0f1a] text-white p-10"
    >
      <button
        onClick={() => navigate(-1)}
        className="absolute top-12 left-400 z-50 px-4 py-2 bg-purple-600/80 hover:bg-purple-600 transition rounded-xl text-sm shadow-lg"
      >
        ← Back
      </button>
      <h1 className="text-5xl font-bold mb-10">
        Intelligent <span className="text-purple-500">Supply Chain</span>
      </h1>

      <KPISection kpis={kpis} />

      <div className="grid grid-cols-4 gap-6 mt-10">

        {/* BIG MULTI-LINE CHART */}
        <div className="col-span-3">
          <NeonLineChart trend={financial.monthlyTrend} />
        </div>

        {/* SIDE PANEL */}
        <div className="space-y-6">
          <FinancePanel data={financial} />
          <SafetyPanel safety={safety} />
        </div>

        {/* LOWER ROW */}
        <div className="col-span-2">
          <ProductivityChart dataPoints={productivity.labor} />
        </div>

        <div className="col-span-2">
          <ChangeOrderTable orders={changeOrders} />
        </div>

      </div>
    </motion.div>
  );
}