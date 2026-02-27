import { motion } from "motion/react";

export default function GlassCard({ title, value }: any) {
  return (
    <motion.div
      whileHover={{ rotateX: 6, rotateY: -6, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      style={{ transformStyle: "preserve-3d" }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
    >
      <p className="text-gray-400 text-sm">{title}</p>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl font-bold text-purple-400 mt-2"
      >
        {value}
      </motion.h2>
    </motion.div>
  );
}