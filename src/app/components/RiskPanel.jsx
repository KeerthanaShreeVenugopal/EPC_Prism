import { motion } from "motion/react";

export default function RiskPanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="bg-white p-10 rounded-3xl shadow-xl"
    >
      <h2 className="text-2xl font-bold mb-6">Risk & Change Orders</h2>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold mb-2">Change Orders</h3>
          <p>Pending: 3</p>
          <p>Approved: 5</p>
          <p>Total Value: ₹2.2M</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">RFI Monitoring</h3>
          <p>Open RFIs: 12</p>
          <p>Avg Response Time: 4 days</p>
        </div>
      </div>
    </motion.div>
  );
}