import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
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
} from 'lucide-react';
import { useEffect, useState } from 'react';
import EngineerDashboard from "./EngineerDashboard.jsx"

const galleryImages = [
  'https://images.unsplash.com/photo-1674062333283-41a1b59f0408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBlbmdpbmVlcmluZyUyMGJ1aWxkaW5nJTIwc2l0ZXxlbnwxfHx8fDE3NzE3NjU5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1758574697284-8e84046a45ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcHJvamVjdCUyMG1hbmFnZW1lbnQlMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3MTc2NTk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljcyUyMHdhcmVob3VzZXxlbnwxfHx8fDE3NzE3MjYxMDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwb2ZmaWNlfGVufDF8fHx8MTc3MTc2NTk1MXww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1761877676992-0c232a7920f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcxNzY1OTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1662499216961-cc219ee71f15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jdXJlbWVudCUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc3MTc2NTk1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1768054948628-82319724f0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXF1aXBtZW50JTIwbWFjaGluZXJ5fGVufDF8fHx8MTc3MTY1NzY0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1641395437808-10c477b8f199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwcGxhbm5pbmclMjBkb2N1bWVudHN8ZW58MXx8fHwxNzcxNzY1OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080',
];

const features = [
  {
    icon: Brain,
    title: 'EPC Query Engine',
    description: 'Ask complex domain questions and get structured, explainable answers powered by fine-tuned LLM reasoning. Supports multi-turn conversations and contextual follow-ups.',
    color: 'from-blue-300 to-blue-400',
    bgColor: 'bg-blue-50',
    iconColor: 'text-blue-500',
    link: '/query-engine',
  },
  {
    icon: FileText,
    title: 'Document Analysis',
    description: 'Upload and analyze engineering specs, procurement docs, and project plans with AI-powered summarization, entity extraction, and cross-referencing.',
    color: 'from-pink-300 to-pink-400',
    bgColor: 'bg-pink-50',
    iconColor: 'text-pink-500',
    link: '/document-analysis',
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Identify procurement delays, execution risks, and supply chain vulnerabilities before they become problems with predictive risk scoring.',
    color: 'from-green-300 to-green-400',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-500',
    link: '/risk-assessment',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Visualize project metrics, cost analysis, and performance indicators across your EPC portfolio with interactive charts and drill-downs.',
    color: 'from-orange-300 to-orange-400',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
    link: '/analytics-dashboard',
  },
  {
    icon: Network,
    title: 'Supply Chain Intelligence',
    description: 'Map and optimize procurement networks with AI-driven supplier evaluation, logistics planning, and lead-time forecasting.',
    color: 'from-purple-300 to-purple-400',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
    link: '/supply-chain',
  },
  {
    icon: BookOpen,
    title: 'Knowledge Base',
    description: 'Access curated EPC domain knowledge with contextual search across engineering standards, safety regulations, and industry best practices.',
    color: 'from-teal-300 to-teal-400',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-500',
    link: '/knowledge-base',
  },
];

const stats = [
  { value: '95%+', label: 'Accuracy Rate', icon: CheckCircle },
  { value: '100%', label: 'Explainable Results', icon: Sparkles },
  { value: '<1s', label: 'Response Time', icon: Zap },
  { value: '24/7', label: 'Availability', icon: TrendingUp },
];

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => (prev + 1) % (galleryImages.length * 400));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
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
          <Link to="/engineer" className="text-gray-700 hover:text-purple-600 transition-colors">
              Engineer
            </Link>
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </Link>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors">
              Features
            </a>
            <Link
    to="/dashboard"
    className="px-6 py-2 border border-amber-500 text-amber-600 rounded-full hover:bg-amber-50 transition-all"
  >
    Dashboard
  </Link>
            <Link 
              to="/login"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-6"
            >
              <span className="text-purple-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Structured AI Reasoning Framework
              </span>
            </motion.div>
            
            <h1 className="text-6xl mb-6">
              Intelligent Decision-Making
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Through Transparent Reasoning
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience AI that doesn't just give answers—it shows you how it thinks. Our EPC 
              (Event-Process-Condition) framework breaks down complex reasoning into clear, 
              explainable steps you can trust.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <Link to="/query-engine">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                >
                  Start Exploring <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-purple-300 text-purple-700 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg border border-purple-100"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                <div className="text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Continuous Scrolling Gallery */}
      <section className="py-20 bg-white/50 backdrop-blur-sm overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl mb-4">
            Powering <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EPC Excellence</span>
          </h2>
          <p className="text-gray-600 text-lg">Real-world applications across engineering, procurement, and construction</p>
        </motion.div>

        <div className="relative">
          <div 
            className="flex gap-6"
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: 'transform 0.1s linear',
            }}
          >
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 w-96 h-64 rounded-2xl overflow-hidden shadow-xl"
              >
                <img 
                  src={img} 
                  alt={`EPC Project ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EPC Reasoning?</span>
            </h2>
            <p className="text-xl text-gray-600">Built on a foundation of transparency, reliability, and intelligent decision-making</p>
          </motion.div>

          <div className="grid grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link to={feature.link}>
                  <div className={`${feature.bgColor} rounded-3xl p-8 h-full border-2 border-transparent hover:border-purple-300 transition-all cursor-pointer shadow-lg hover:shadow-2xl`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    <div className="mt-6 flex items-center text-purple-600">
                      Explore Feature <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h2 className="text-4xl mb-4">Ready to Experience Transparent AI Reasoning?</h2>
                <p className="text-xl text-white/90 mb-6">
                  Join thousands of users who trust our EPC framework for critical decision-making and analysis.
                </p>
                <ul className="space-y-3 text-lg mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    No credit card required
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    Full access to all features
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6" />
                    Start using immediately
                  </li>
                </ul>
                <Link to="/query-engine">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-purple-600 rounded-full flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all"
                  >
                    Get Started Now <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              <div className="flex gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-2">95%</div>
                  <div className="text-sm">ACCURACY</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-2">100%</div>
                  <div className="text-sm">EXPLAINABLE</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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
      </footer>
    </div>
  );
}
