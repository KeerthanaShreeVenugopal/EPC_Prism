import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Home, Network, MapPin, Truck, Package, Globe } from 'lucide-react';

const suppliers = [
  { name: 'Global Steel Corp', rating: 4.8, location: 'USA', status: 'active' },
  { name: 'Tech Components Ltd', rating: 4.6, location: 'Germany', status: 'active' },
  { name: 'Materials Plus', rating: 4.9, location: 'Japan', status: 'active' },
  { name: 'Industrial Supplies Co', rating: 4.5, location: 'UK', status: 'review' },
];

const shipments = [
  { id: 'SH-001', destination: 'Site A', status: 'in-transit', eta: '2 days' },
  { id: 'SH-002', destination: 'Site B', status: 'delivered', eta: 'Complete' },
  { id: 'SH-003', destination: 'Site C', status: 'pending', eta: '5 days' },
];

export default function SupplyChainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg border-b border-purple-100"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <Network className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg">Supply Chain Intelligence</div>
              <div className="text-xs text-gray-500">AI-Driven Network Optimization</div>
            </div>
          </motion.div>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full flex items-center gap-2 hover:bg-purple-200 transition-colors"
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
            Intelligent <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Supply Chain</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Map and optimize procurement networks with AI-driven supplier evaluation, logistics 
            planning, and lead-time forecasting.
          </p>
        </motion.div>

        {/* Network Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl border-2 border-purple-100 p-12 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>

          <div className="relative z-10">
            <h2 className="text-3xl mb-8 text-center">Global Supply Network</h2>
            
            <div className="flex items-center justify-center">
              {/* Central Hub */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="relative"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Globe className="w-16 h-16 text-white" />
                </div>
                
                {/* Connecting Lines and Nodes */}
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const angle = (i * 60) * (Math.PI / 180);
                  const radius = 200;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                      className="absolute"
                      style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -10, 0],
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform"
                      >
                        {i % 3 === 0 ? <Package className="w-8 h-8 text-white" /> :
                         i % 3 === 1 ? <Truck className="w-8 h-8 text-white" /> :
                         <MapPin className="w-8 h-8 text-white" />}
                      </motion.div>
                      
                      {/* Animated connection line */}
                      <svg 
                        className="absolute pointer-events-none"
                        style={{
                          left: '50%',
                          top: '50%',
                          width: Math.abs(x) * 2 + 'px',
                          height: Math.abs(y) * 2 + 'px',
                          transform: `translate(-${Math.abs(x)}px, -${Math.abs(y)}px)`
                        }}
                      >
                        <motion.line
                          x1={Math.abs(x)}
                          y1={Math.abs(y)}
                          x2={Math.abs(x) - x}
                          y2={Math.abs(y) - y}
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        />
                        <defs>
                          <linearGradient id="gradient">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Suppliers and Shipments Grid */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Supplier Directory */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl border-2 border-purple-100 p-8"
          >
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <Package className="w-8 h-8 text-purple-600" />
              Supplier Directory
            </h2>
            
            <div className="space-y-4">
              {suppliers.map((supplier, index) => (
                <motion.div
                  key={supplier.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg">{supplier.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      supplier.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {supplier.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {supplier.location}
                    </div>
                    <div className="flex items-center gap-1">
                      ⭐ {supplier.rating}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Active Shipments */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl border-2 border-purple-100 p-8"
          >
            <h2 className="text-2xl mb-6 flex items-center gap-3">
              <Truck className="w-8 h-8 text-purple-600" />
              Active Shipments
            </h2>
            
            <div className="space-y-4">
              {shipments.map((shipment, index) => (
                <motion.div
                  key={shipment.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: -10, scale: 1.02 }}
                  className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-purple-200 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg">{shipment.id}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      shipment.status === 'delivered' 
                        ? 'bg-green-100 text-green-700' 
                        : shipment.status === 'in-transit'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {shipment.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {shipment.destination}
                    </div>
                    <div>ETA: {shipment.eta}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full shadow-lg"
            >
              Track All Shipments
            </motion.button>
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-3 gap-6"
        >
          {[
            { title: 'Supplier Evaluation', desc: 'AI-driven scoring', icon: Package },
            { title: 'Route Optimization', desc: 'Smart logistics planning', icon: Truck },
            { title: 'Lead-time Forecasting', desc: 'Predictive analytics', icon: Globe },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, rotate: index % 2 === 0 ? 2 : -2 }}
              className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl"
            >
              <feature.icon className="w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-2">{feature.title}</h3>
              <p className="text-purple-100">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
