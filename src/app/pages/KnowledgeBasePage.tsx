import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Home, BookOpen, Search, FileText, Shield, Zap, BookMarked } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { name: 'Engineering Standards', count: 342, icon: FileText, color: 'blue' },
  { name: 'Safety Regulations', count: 156, icon: Shield, color: 'red' },
  { name: 'Best Practices', count: 289, icon: Zap, color: 'green' },
  { name: 'Industry Guidelines', count: 203, icon: BookMarked, color: 'purple' },
];

const recentDocuments = [
  { 
    title: 'ISO 9001:2015 Quality Management',
    category: 'Standards',
    updated: '2 days ago',
    relevance: 98 
  },
  { 
    title: 'OSHA Safety Requirements for Construction',
    category: 'Safety',
    updated: '1 week ago',
    relevance: 95 
  },
  { 
    title: 'Project Management Best Practices',
    category: 'Practices',
    updated: '3 days ago',
    relevance: 92 
  },
  { 
    title: 'Procurement Guidelines for EPC Projects',
    category: 'Guidelines',
    updated: '5 days ago',
    relevance: 89 
  },
];

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => setIsSearching(false), 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg border-b border-teal-100"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg">Knowledge Base</div>
              <div className="text-xs text-gray-500">Curated EPC Domain Knowledge</div>
            </div>
          </motion.div>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full flex items-center gap-2 hover:bg-teal-200 transition-colors"
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
            Comprehensive <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Knowledge Base</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access curated EPC domain knowledge with contextual search across engineering standards, 
            safety regulations, and industry best practices.
          </p>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-teal-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search engineering standards, safety regulations, best practices..."
                className="w-full pl-16 pr-6 py-6 bg-white rounded-3xl border-2 border-teal-200 focus:border-teal-400 outline-none text-lg shadow-xl"
              />
              {isSearching && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="absolute right-6 top-1/2 -translate-y-1/2"
                >
                  <Brain className="w-6 h-6 text-teal-500" />
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-4 gap-6 mb-12"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border-2 border-teal-100 cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-24 h-24 bg-${category.color}-100 rounded-full blur-2xl opacity-50`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                  category.color === 'blue' ? 'from-blue-400 to-blue-600' :
                  category.color === 'red' ? 'from-red-400 to-red-600' :
                  category.color === 'green' ? 'from-green-400 to-green-600' :
                  'from-purple-400 to-purple-600'
                } flex items-center justify-center mb-4`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2">{category.name}</h3>
                <div className={`text-3xl ${
                  category.color === 'blue' ? 'text-blue-600' :
                  category.color === 'red' ? 'text-red-600' :
                  category.color === 'green' ? 'text-green-600' :
                  'text-purple-600'
                } mb-1`}>
                  {category.count}
                </div>
                <div className="text-sm text-gray-600">Documents</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent Documents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl border-2 border-teal-100 p-8 mb-12"
        >
          <h2 className="text-3xl mb-8">Recently Accessed Documents</h2>
          
          <div className="space-y-4">
            {recentDocuments.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-6 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl border border-teal-200 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg mb-2">{doc.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="px-3 py-1 bg-white rounded-full">{doc.category}</span>
                      <span>{doc.updated}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-teal-600 mb-1">{doc.relevance}%</div>
                    <div className="text-sm text-gray-600">Relevance</div>
                  </div>
                </div>
                
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${doc.relevance}%` }}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-teal-400 to-cyan-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <Search className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-2">Contextual Search</h3>
            <p className="text-teal-100">AI-powered semantic search</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <BookOpen className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-2">Smart Navigation</h3>
            <p className="text-cyan-100">Intuitive browsing experience</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl"
          >
            <Brain className="w-12 h-12 mb-4" />
            <h3 className="text-2xl mb-2">AI Recommendations</h3>
            <p className="text-blue-100">Personalized content suggestions</p>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-3xl p-8 text-white text-center"
        >
          <BookOpen className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-3xl mb-4">Explore the Full Knowledge Base</h3>
          <p className="text-lg mb-6 text-teal-100">Unlock access to thousands of EPC resources</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-teal-600 rounded-full shadow-xl"
          >
            Browse All Resources
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
