import Features3D from "../components/Features3D.jsx";
import { Network, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Supply Chain Intelligence",
    description:
      "Optimize procurement networks with AI-driven supplier evaluation.",
    color: "from-purple-400 to-blue-500",
    bgColor: "bg-purple-50",
    link: "/supply-chain",
  },
  {
    icon: TrendingUp,
    title: "Attendance Intelligence",
    description:
      "Track workforce attendance, productivity trends, and compliance metrics in real-time.",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-indigo-50",
    link: "/attendance-dashboard",
  },
];

export default function FeaturesPage() {
  return <Features3D features={features} />;
}