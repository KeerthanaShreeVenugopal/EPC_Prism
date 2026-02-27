import { motion } from "motion/react";
import { useState, useEffect } from "react";
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

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
      className="
        min-h-screen
        bg-white text-gray-900
        dark:bg-[#0f0f1a] dark:text-gray-100
        transition-all duration-300
        p-10
      "
    >
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="
  absolute top-1 left-3 z-50
  px-4 py-2 rounded-xl text-sm shadow-md
  bg-purple-600 text-white hover:bg-purple-700
  dark:bg-purple-500 dark:hover:bg-purple-600
  transition
"
      >
        ← Back
      </button>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="
          absolute top-10 right-10
          px-4 py-2 rounded-xl text-sm
          bg-gray-200 text-gray-900
          dark:bg-gray-800 dark:text-white
          shadow-md transition
        "
      >
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>

      <h1 className="text-5xl font-bold mb-10 tracking-tight">
        Intelligent{" "}
        <span className="text-purple-600 dark:text-purple-400">
          Supply Chain
        </span>
      </h1>

      <KPISection kpis={kpis} />

      <div className="grid grid-cols-4 gap-6 mt-10">
        <div className="col-span-3 bg-gray-100 dark:bg-[#1a1a2e] rounded-2xl p-6">
          <NeonLineChart trend={financial.monthlyTrend} />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-[#1a1a2e] rounded-2xl p-6">
            <FinancePanel data={financial} />
          </div>

          <div className="bg-gray-100 dark:bg-[#1a1a2e] rounded-2xl p-6">
            <SafetyPanel safety={safety} />
          </div>
        </div>

        <div className="col-span-2 bg-gray-100 dark:bg-[#1a1a2e] rounded-2xl p-6">
          <ProductivityChart dataPoints={productivity.labor} />
        </div>

        <div className="col-span-2 bg-gray-100 dark:bg-[#1a1a2e] rounded-2xl p-6">
          <ChangeOrderTable orders={changeOrders} />
        </div>
      </div>
    </motion.div>
  );
}
//heloo