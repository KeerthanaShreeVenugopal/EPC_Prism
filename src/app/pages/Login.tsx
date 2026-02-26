import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react'
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Brain, Mail, Lock, User, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import figmaImage from 'figma:asset/a13a4be893e2b6f4ab2d31bd04f1b58330796913.png';

// Carousel images for background
const carouselImages = [
  'https://images.unsplash.com/photo-1763478417204-85f71f1488a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwY3JhbmUlMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc3MjAwNTIzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1769721209842-e46c60e7fbf9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZSUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzE5MTAyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGJsdWVwcmludCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMDA1MjM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];



function CarouselBackground() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {carouselImages.map((image, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <img
              src={image}
              alt={`Construction ${index + 1}`}
              className="w-full h-full object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const toggleMode = () => {
    setIsSignUp(!isSignUp);
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const email = (e.target as any)[0].value;
    const password = (e.target as any)[1].value;
  
    // Basic empty field check
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }
  
    try {
      const res = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert("Login Successful!");
  
        localStorage.setItem("token", data.access_token);
        // localStorage.setItem("role", data.role);
        localStorage.setItem("role", data.role.toLowerCase().trim());
  
        // window.location.href = `/${data.role}`;
        navigate(`/${data.role}`, { replace: true });
      }
      else if (res.status === 404) {
        alert("User does not exist");
      }
      else if (res.status === 401) {
        alert("Incorrect password");
      }
      else {
        alert(data.detail || "Something went wrong");
      }
    }
    catch (err) {
      alert("Server not reachable");
    }
  };
  
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullname = (e.target as any)[0].value;
    const email = (e.target as any)[1].value;
    const password = (e.target as any)[2].value;
    const confirmPassword = (e.target as any)[3].value;
    const role = (e.target as any)[4].value;
  
    // 1. Check empty fields
    if (!fullname || !email || !password || !confirmPassword || !role) {
      alert("Please fill all fields!");
      return;
    }
  
    // 2. Check confirm password
    if (password !== confirmPassword) {
      alert("Passwords do NOT match!");
      return;
    }
  
    // 3. Register API call
    const res = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password, role }),
    });
  
    const data = await res.json();
  
    if (res.ok) {
      alert("User Registered Successfully! Please Sign In.");
      setIsSignUp(false); // go to login mode
    } else {
      alert(data.detail); // Email already exists etc.
    }
  };
  return (
    // <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50">
    // <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
    <div className="relative min-h-screen w-full overflow-hidden">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-purple-100 z-50"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl">EPC Reasoning Engine</span>
          </motion.div>

          <div className="flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </a>
            <Link
              to="/login"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </motion.header>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHFN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM0NDg5QSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

      {/* <div className="relative w-full h-[100vh] flex mt-20">  */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" >
        {/* Container for both panels */}
        {/* <div className="relative size-full flex"> */}
        <AnimatePresence mode="wait">
          {!isSignUp ? (
            // DEFAULT STATE - Login View
            <motion.div
              key="login-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="size-full flex"
            >
              {/* Left Panel - Welcome/Register Prompt with Carousel */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="w-1/2 flex items-center justify-center px-12 relative overflow-hidden"
              >
                {/* Carousel Background */}
                <CarouselBackground />

                {/* Content */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10 text-center px-8"
                >
                  <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    New User?
                  </h1>
                  <p className="text-xl text-white/95 mb-10 drop-shadow">
                    Join our EPC reasoning platform
                  </p>
                  <button
                    onClick={toggleMode}
                    className="px-12 py-4 bg-white text-indigo-700 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Register Now
                  </button>
                </motion.div>
              </motion.div>

              {/* Right Panel - Sign In Form */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="w-1/2 flex items-center justify-center px-12 bg-white"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="w-full max-w-md"
                >
                  <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-600 text-transparent bg-clip-text mb-3">
                      Welcome Back
                    </h2>
                    <p className="text-gray-600">Sign in to your account</p>
                  </div>

                  <form className="space-y-5" onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 size-5" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 size-5" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Forgot Password Link */}
                    <div className="text-right">
                      <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-colors">
                        Forgot Password?
                      </a>
                    </div>

                    {/* Sign In Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Sign In
                    </button>
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            // SIGNUP STATE - Registration View (SWAPPED: Form on LEFT, Prompt on RIGHT)
            <motion.div
              key="signup-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="size-full flex"
            >
              {/* Left Panel - Sign Up Form */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="w-1/2 flex items-center justify-center px-12 overflow-y-auto bg-white"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="w-full max-w-md"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-600 text-transparent bg-clip-text mb-3">
                      Create Account
                    </h2>
                    <p className="text-gray-600">Join the EPC platform</p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSignup}>
                    {/* Name Input */}
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 size-5" />
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 size-5" />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 size-5" />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 size-5" />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Role Dropdown */}
                    <div className="relative">
                      <Shield className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 size-5" />
                      <select
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-white">Select Role</option>
                        <option value="admin" className="bg-white">Admin</option>
                        <option value="manager" className="bg-white">Manager</option>
                        <option value="engineer" className="bg-white">Engineer</option>
                        <option value="user" className="bg-white">User</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="size-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Create Account Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      Create Account
                    </button>
                  </form>
                </motion.div>
              </motion.div>

              {/* Right Panel - Sign In Prompt with Carousel */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="w-1/2 flex items-center justify-center px-12 relative overflow-hidden"
              >
                {/* Carousel Background */}
                <CarouselBackground />

                {/* Content */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="relative z-10 text-center px-8"
                >
                  <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
                    Already have an account?
                  </h1>
                  <p className="text-xl text-white/95 mb-10 drop-shadow">
                    Welcome back to your workspace
                  </p>
                  <button
                    onClick={toggleMode}
                    className="px-12 py-4 bg-white text-indigo-700 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    Sign In
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Footer
        <footer className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Brain className="w-5 h-5" />
                  </div>
                  <span>EPC Reasoning Engine</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Transparent AI reasoning through structured Event-Process-Condition framework.
                </p>
              </div>
              
              <div>
                <h3 className="mb-4">Product</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><Link to="/query-engine" className="hover:text-white transition-colors">Features</Link></li>
                  <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              © 2026 EPC Reasoning Engine. All rights reserved. Built with precision and transparency.
            </div>
          </div>
        </footer> */}
    </div>
  );
}