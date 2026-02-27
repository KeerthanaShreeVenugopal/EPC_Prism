import { motion } from "motion/react";

export default function FinancePanel({ data }: any) {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring" }}
      style={{ transformStyle: "preserve-3d" }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_50px_rgba(59,130,246,0.2)]"
    >
      <h3 className="text-white mb-4">Budget Overview</h3>
      <div className="space-y-4">
        <div>
          <p className="text-gray-400 text-sm">Planned Budget</p>
          <p className="text-blue-400 text-xl font-bold">
            ₹{data.plannedBudget}
          </p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Actual Budget</p>
          <p className="text-red-400 text-xl font-bold">
            ₹{data.actualBudget}
          </p>
        </div>
      </div>
    </motion.div>
  );
}