import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Features3D({ features, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-y-auto"
      style={{ perspective: 2000 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-32">

        <button
          onClick={onBack}
          className="mb-12 text-lg font-semibold text-purple-600 hover:scale-105 transition"
        >
          ← Back
        </button>

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EPC Reasoning?
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Built on a foundation of transparency, reliability, and intelligent decision-making
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 100, z: -300 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.05,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className={`${feature.bgColor} rounded-3xl p-8 shadow-xl border border-white/30`}
            >
              <Link to={feature.link}>
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center text-purple-600 font-medium">
                  Explore Feature <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}