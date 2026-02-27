import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Brain } from "lucide-react";
import { useEffect, useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590642913318-23c1a6e4c4b0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1619070284836-e850273d69ac?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1641395437808-10c477b8f199?q=80&w=2070&auto=format&fit=crop",
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (systemDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Background Wrapper */}
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop")`,
        }}
      >
        <div className="relative">
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

                <Link
                  to="/login"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
                >
                  login
                </Link>

                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition backdrop-blur-md"
                >
                  {theme === "dark" ? "🌙 Dark" : "☀ Light"}
                </button>
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
                  className={`absolute inset-0 transition-opacity duration-1000 ${
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
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 text-center text-white max-w-5xl mx-auto px-6"
            >
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6">
                <span className="flex items-center gap-2 justify-center">
                  <Sparkles className="w-4 h-4" />
                  Structured AI Reasoning Framework
                </span>
              </div>

              <h1 className="text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]">
                <span>Intelligent Decision-Making</span>
                <br />
                <span className="animated-gradient-text">
                  Through Transparent Reasoning
                </span>
              </h1>

              <p className="text-white/90 text-xl mt-6">
                Experience AI that doesn't just give answers — it shows you how it thinks.
              </p>

              <div className="flex justify-center gap-6 mt-10">
                <Link to="/features">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition">
                    Explore Features
                  </button>
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
}