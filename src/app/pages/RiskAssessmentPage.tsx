import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Home, Shield, AlertTriangle, TrendingDown, Clock, Zap } from 'lucide-react';

const riskCategories = [
  { 
    name: 'Procurement Delays', 
    level: 'High', 
    score: 85, 
    color: 'red',
    trend: 'up',
    icon: Clock 
  },
  { 
    name: 'Supply Chain Issues', 
    level: 'Medium', 
    score: 62, 
    color: 'yellow',
    trend: 'stable',
    icon: AlertTriangle 
  },
  { 
    name: 'Execution Risks', 
    level: 'Low', 
    score: 28, 
    color: 'green',
    trend: 'down',
    icon: TrendingDown 
  },
];

const recentAlerts = [
  { message: 'Critical supplier delivery delay detected', severity: 'high', time: '2 min ago' },
  { message: 'Resource allocation approaching threshold', severity: 'medium', time: '15 min ago' },
  { message: 'Budget variance identified in Project A', severity: 'medium', time: '1 hour ago' },
  { message: 'Quality inspection scheduled', severity: 'low', time: '2 hours ago' },
];

export default function RiskAssessmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg border-b border-green-100"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg">Risk Assessment</div>
              <div className="text-xs text-gray-500">Predictive Risk Intelligence</div>
            </div>
          </motion.div>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full flex items-center gap-2 hover:bg-green-200 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </motion.button>
          </Link>
        </nav>
      </motion.header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl mb-4">
            Predictive <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Risk Assessment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identify procurement delays, execution risks, and supply chain vulnerabilities before 
            they become problems with predictive risk scoring.
          </p>
        </motion.div>

        {/* Risk Score Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          {riskCategories.map((risk, index) => (
            <motion.div
              key={risk.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-green-100 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${risk.color}-100 rounded-full blur-3xl opacity-50`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <risk.icon className={`w-12 h-12 text-${risk.color}-500`} />
                  <span className={`px-3 py-1 bg-${risk.color}-100 text-${risk.color}-700 rounded-full text-sm`}>
                    {risk.level} Risk
                  </span>
                </div>
                
                <h3 className="text-xl mb-4">{risk.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Risk Score</span>
                    <span className={`text-2xl text-${risk.color}-600`}>{risk.score}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${risk.score}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${
                        risk.color === 'red' ? 'from-red-400 to-red-600' :
                        risk.color === 'yellow' ? 'from-yellow-400 to-yellow-600' :
                        'from-green-400 to-green-600'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4" />
                  Trend: {risk.trend === 'up' ? '↑ Increasing' : risk.trend === 'down' ? '↓ Decreasing' : '→ Stable'}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-8">
          {/* Live Risk Monitor */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 bg-white rounded-3xl shadow-2xl border-2 border-green-100 p-8"
          >
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-green-600" />
              Live Risk Monitor
            </h2>
            
            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className={`p-4 rounded-2xl border-l-4 ${
                    alert.severity === 'high' 
                      ? 'bg-red-50 border-red-500' 
                      : alert.severity === 'medium'
                      ? 'bg-yellow-50 border-yellow-500'
                      : 'bg-green-50 border-green-500'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-gray-800">{alert.message}</p>
                      <p className="text-sm text-gray-500 mt-1">{alert.time}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-4 py-2 bg-white rounded-lg text-sm shadow-sm hover:shadow-md transition-all"
                    >
                      Review
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Risk Insights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 space-y-6"
          >
            <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl p-6 text-white shadow-2xl">
              <Shield className="w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-2">Protected</h3>
              <p className="text-green-100 mb-4">24/7 continuous monitoring</p>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-3xl mb-1">156</div>
                <div className="text-sm text-green-100">Risks Mitigated</div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-green-100"
            >
              <h4 className="text-lg mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl text-left hover:from-green-100 hover:to-teal-100 transition-all">
                  Run Full Assessment
                </button>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl text-left hover:from-green-100 hover:to-teal-100 transition-all">
                  Export Report
                </button>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl text-left hover:from-green-100 hover:to-teal-100 transition-all">
                  Configure Alerts
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-4 gap-6"
        >
          {[
            { title: 'Predictive Analytics', desc: 'AI-driven forecasting' },
            { title: 'Real-time Alerts', desc: 'Instant notifications' },
            { title: 'Historical Analysis', desc: 'Learn from past data' },
            { title: 'Custom Reports', desc: 'Tailored insights' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, rotate: 2 }}
              className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 shadow-lg border border-green-100 text-center"
            >
              <h4 className="text-lg mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
