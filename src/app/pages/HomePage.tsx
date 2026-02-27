import { Link } from "react-router-dom";
import { motion } from "motion/react";
import Features3D from "../components/Features3D";
import {
  Sparkles,
  FileText,
  Shield,
  BarChart3,
  Network,
  BookOpen,
  ArrowRight,
  Brain,
  Zap,
  CheckCircle,
  TrendingUp,

} from "lucide-react";
import { useEffect, useState } from 'react';
import EngineerDashboard from "./EngineerDashboard.jsx"
import ConstructionDashboardPage from "./ConstructionDashboardPage.jsx"
import Loginpage from './Login.tsx'
const galleryImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590642913318-23c1a6e4c4b0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1619070284836-e850273d69ac?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1641395437808-10c477b8f199?q=80&w=2070&auto=format&fit=crop",
];

const features = [
  {
    icon: Brain,
    title: "EPC Query Engine",
    description:
      "Ask complex domain questions and get structured, explainable answers powered by fine-tuned LLM reasoning.",
    color: "from-blue-300 to-blue-400",
    bgColor: "bg-blue-50",
    link: "/query-engine",
  },
  {
    icon: FileText,
    title: "Document Analysis",
    description:
      "Upload and analyze engineering specs and project plans with AI-powered summarization.",
    color: "from-pink-300 to-pink-400",
    bgColor: "bg-pink-50",
    link: "/document-analysis",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description:
      "Identify procurement delays and supply chain vulnerabilities with predictive scoring.",
    color: "from-green-300 to-green-400",
    bgColor: "bg-green-50",
    link: "/risk-assessment",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Visualize project metrics and performance indicators across your EPC portfolio.",
    color: "from-orange-300 to-orange-400",
    bgColor: "bg-orange-50",
    link: "/analytics-dashboard",
  },
  {
    icon: Network,
    title: "Supply Chain Intelligence",
    description:
      "Optimize procurement networks with AI-driven supplier evaluation.",
    color: "from-purple-300 to-purple-400",
    bgColor: "bg-purple-50",
    link: "/supply-chain",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base",
    description:
      "Access curated EPC domain knowledge with contextual search.",
    color: "from-teal-300 to-teal-400",
    bgColor: "bg-teal-50",
    link: "/knowledge-base",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFeatures, setShowFeatures] = useState(false);


  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop')"
      }}
    >

      {/* MAIN CONTENT WRAPPER */}
      <motion.div
        animate={{
          scale: showFeatures ? 0.85 : 1,
          rotateX: showFeatures ? 10 : 0,
          opacity: showFeatures ? 0.4 : 1,
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 w-full bg-black/40 backdrop-blur-md z-50"
        >
          <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">
                EPC Reasoning Engine
              </span>
            </div>

            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="text-white text-lg font-semibold hover:text-pink-300 transition"
              >
                Home
              </Link>

              <button
                onClick={() => setShowFeatures(true)}
                className="text-white text-lg font-semibold hover:text-pink-300 transition"
              >
                Features
              </button>
              <Link
                to="/engineer"
                className=  "text-white text-lg font-semibold hover:text-pink-300 transition"
              >
                engineer
              </Link>
              <Link
                to="/construction-dashboard"
                className=  "text-white text-lg font-semibold hover:text-pink-300 transition"
              >
                construction-dashboard
              </Link>
              <Link
                to="/login"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition"
              >
                Login
              </Link>
              
            </div>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">

          {/* Slideshow */}
          <div className="absolute inset-0 z-0">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1500 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center blur-[3px] scale-105"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
              <span className="flex items-center gap-2 justify-center">
                <Sparkles className="w-4 h-4" />
                Structured AI Reasoning Framework
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]">
              <span className="text-white">
                Intelligent Decision-Making
              </span>
              <br />
              <span className="animated-gradient-text">
                Through Transparent Reasoning
              </span>
            </h1>

            <p className="text-white/90 text-xl mt-6">
              Experience AI that doesn't just give answers—it shows you how it thinks.
            </p>

            <div className="flex justify-center gap-6 mt-10">
              <Link to="/query-engine">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition">
                  Start Exploring
                </button>
              </Link>

              <button className="px-8 py-4 bg-white/10 border border-white/40 text-white rounded-full hover:bg-white/20 transition">
                Watch Demo
              </button>
            </div>
          </div>
        </section>
      </motion.div>

      {/* 3D FEATURES PANEL */}
      {showFeatures && (
        <Features3D
          features={features}
          onBack={() => setShowFeatures(false)}
        />
      )}
    </div>
  );
}
//hi