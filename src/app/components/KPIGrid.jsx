import { motion } from "motion/react";

export default function KPIGrid({ kpis }) {
  return (
    <div className="grid grid-cols-3 gap-8 mb-16">
      {kpis.map((kpi, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl p-8 shadow-xl cursor-pointer"
        >
          <h3 className="text-lg font-semibold mb-3">{kpi.label}</h3>
          <div className="text-4xl font-bold text-purple-600">
            {kpi.value}
          </div>
        </motion.div>
      ))}
    </div>
  );
}