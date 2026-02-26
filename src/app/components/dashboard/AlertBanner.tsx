import { motion } from "motion/react";

export default function AlertBanner({ show }: any) {
  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-red-500/20 text-red-400 px-6 py-3 rounded-xl border border-red-500/40 mb-6"
    >
      ⚠ Budget Overrun Detected
    </motion.div>
  );
}