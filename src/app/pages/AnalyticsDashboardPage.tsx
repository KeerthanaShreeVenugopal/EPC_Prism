import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Home, BarChart3, TrendingUp, DollarSign, Activity, PieChart } from 'lucide-react';

const projectMetrics = [
  { label: 'Active Projects', value: '24', trend: '+12%', color: 'blue' },
  { label: 'Total Budget', value: '$45M', trend: '+8%', color: 'green' },
  { label: 'On Schedule', value: '87%', trend: '+5%', color: 'purple' },
  { label: 'Resources', value: '156', trend: '+15%', color: 'orange' },
];

const chartData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 72 },
  { month: 'Mar', value: 68 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 92 },
  { month: 'Jun', value: 88 },
];

const costBreakdown = [
  { category: 'Engineering', percentage: 35, color: 'blue' },
  { category: 'Procurement', percentage: 30, color: 'purple' },
  { category: 'Construction', percentage: 25, color: 'orange' },
  { category: 'Other', percentage: 10, color: 'pink' },
];

export default function AnalyticsDashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg border-b border-orange-100"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg">Analytics Dashboard</div>
              <div className="text-xs text-gray-500">Real-time Performance Metrics</div>
            </div>
          </motion.div>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full flex items-center gap-2 hover:bg-orange-200 transition-colors"
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
            Interactive <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Analytics Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize project metrics, cost analysis, and performance indicators across your EPC 
            portfolio with interactive charts and drill-downs.
          </p>
        </motion.div>

        {/* Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 gap-6 mb-12"
        >
          {projectMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-2xl border-2 border-orange-100 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${metric.color}-100 rounded-full blur-2xl opacity-50`}></div>
              
              <div className="relative z-10">
                <div className={`text-sm text-${metric.color}-600 mb-2`}>{metric.label}</div>
                <div className="text-3xl mb-2">{metric.value}</div>
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {metric.trend}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 bg-white rounded-3xl shadow-2xl border-2 border-orange-100 p-8"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl mb-2">Project Performance</h2>
                <p className="text-gray-600">Monthly completion rate</p>
              </div>
              <Activity className="w-8 h-8 text-orange-500" />
            </div>

            <div className="flex items-end justify-between h-64 gap-4">
              {chartData.map((data, index) => (
                <div key={data.month} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${data.value}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-full bg-gradient-to-t from-orange-400 to-pink-500 rounded-t-lg relative group cursor-pointer"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      {data.value}%
                    </div>
                  </motion.div>
                  <div className="mt-2 text-sm text-gray-600">{data.month}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cost Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 bg-white rounded-3xl shadow-2xl border-2 border-orange-100 p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <PieChart className="w-8 h-8 text-orange-500" />
              <div>
                <h2 className="text-xl">Cost Breakdown</h2>
                <p className="text-sm text-gray-600">By category</p>
              </div>
            </div>

            <div className="space-y-4">
              {costBreakdown.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">{item.category}</span>
                    <span className={`text-sm text-${item.color}-600`}>{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percentage}%` }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${
                        item.color === 'blue' ? 'from-blue-400 to-blue-600' :
                        item.color === 'purple' ? 'from-purple-400 to-purple-600' :
                        item.color === 'orange' ? 'from-orange-400 to-orange-600' :
                        'from-pink-400 to-pink-600'
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl"
            >
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <DollarSign className="w-4 h-4" />
                Total Budget Utilization
              </div>
              <div className="text-2xl">78%</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <BarChart3 className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-2">Real-time Data</h3>
            <p className="text-blue-100">Live updates every second</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <Activity className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-2">Custom Views</h3>
            <p className="text-purple-100">Personalized dashboards</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <TrendingUp className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-2">AI Insights</h3>
            <p className="text-orange-100">Automated recommendations</p>
          </motion.div>
        </motion.div>

        {/* Export Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-white rounded-3xl shadow-2xl border-2 border-orange-100 p-8 text-center"
        >
          <h3 className="text-2xl mb-4">Export Your Analytics</h3>
          <p className="text-gray-600 mb-6">Download comprehensive reports in multiple formats</p>
          <div className="flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-full shadow-lg"
            >
              Export as PDF
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg"
            >
              Export as Excel
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
