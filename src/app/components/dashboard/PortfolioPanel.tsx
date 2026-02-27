import { motion } from "motion/react";

export default function PortfolioPanel({ projects }: any) {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h3 className="text-white mb-4 text-lg font-semibold">
        Portfolio Overview
      </h3>

      <div className="space-y-4">
        {projects.map((project: any, i: number) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex justify-between items-center p-4 bg-white/5 rounded-xl"
          >
            <div>
              <p className="text-white">{project.name}</p>
              <p className="text-gray-400 text-sm">
                Budget ₹{project.budget}M
              </p>
            </div>

            <span
              className={`text-sm px-3 py-1 rounded-full ${
                project.status === "On Track"
                  ? "bg-green-500/20 text-green-400"
                  : project.status === "At Risk"
                  ? "bg-yellow-500/20 text-yellow-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {project.status}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}