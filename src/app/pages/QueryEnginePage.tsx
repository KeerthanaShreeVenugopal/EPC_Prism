import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Home, Send, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface QueryHistoryItem {
  id: string;
  query: string;
  timestamp: string;
  status: 'completed' | 'processing';
}

const sampleQueries = [
  'What are the environmental impacts of renewable energy?',
  'Explain the process of protein synthesis in cells',
  'How does blockchain technology ensure security?',
  'Analyze the factors contributing to urban heat islands',
  'What are the key risks in offshore wind farm construction?',
  'Explain procurement strategies for large-scale EPC projects',
];

export default function QueryEnginePage() {
  const [query, setQuery] = useState('');
  const [queryHistory, setQueryHistory] = useState<QueryHistoryItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const newQuery: QueryHistoryItem = {
      id: Date.now().toString(),
      query: query,
      timestamp: new Date().toLocaleTimeString(),
      status: 'processing',
    };

    setQueryHistory([newQuery, ...queryHistory]);
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setQueryHistory(prev => 
        prev.map(q => 
          q.id === newQuery.id 
            ? { ...q, status: 'completed' as const }
            : q
        )
      );
      setIsProcessing(false);
    }, 2000);
    
    setQuery('');
  };

  const handleSampleQuery = (sampleQuery: string) => {
    setQuery(sampleQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg">EPC Reasoning Engine</div>
              <div className="text-xs text-gray-500">Event-Process-Condition Framework</div>
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-8">
          {/* Main Query Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl mb-2">Ask a Question</h1>
                <p className="text-gray-600 mb-6">
                  Enter your query here... The system will analyze it using the EPC framework and provide a structured, explainable response.
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <textarea
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="What are the key considerations for managing procurement delays in large-scale EPC projects?"
                      className="w-full h-32 px-6 py-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 focus:border-purple-400 outline-none resize-none transition-all"
                    />
                    <motion.button
                      type="submit"
                      disabled={isProcessing || !query.trim()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                    </motion.button>
                  </div>
                </form>

                <div className="mt-6">
                  <p className="text-sm text-gray-600 mb-3">Try these sample queries:</p>
                  <div className="grid grid-cols-2 gap-3">
                    {sampleQueries.map((sample, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        onClick={() => handleSampleQuery(sample)}
                        className="text-left px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl text-sm text-gray-700 hover:from-blue-100 hover:to-purple-100 transition-all border border-purple-200"
                      >
                        {sample}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Processing Visualization */}
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-white rounded-3xl shadow-xl border border-purple-100 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center"
                  >
                    <Brain className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl">Analyzing Query</h3>
                    <p className="text-gray-600">Processing through EPC framework...</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {['EVENT', 'PROCESS', 'CONDITION'].map((step, index) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.3 }}
                      className="flex items-center gap-4"
                    >
                      <div className={`px-4 py-2 rounded-lg text-sm ${
                        index === 0 ? 'bg-blue-100 text-blue-700' :
                        index === 1 ? 'bg-purple-100 text-purple-700' :
                        'bg-pink-100 text-pink-700'
                      }`}>
                        {step}
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1, delay: index * 0.3 }}
                          className={`h-full ${
                            index === 0 ? 'bg-blue-500' :
                            index === 1 ? 'bg-purple-500' :
                            'bg-pink-500'
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Query History Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl">Query History</h2>
              </div>

              {queryHistory.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <TrendingUp className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p className="text-gray-400">No queries yet</p>
                  <p className="text-sm text-gray-400">Your query history will appear here</p>
                </motion.div>
              ) : (
                <div className="space-y-3 max-h-[600px] overflow-y-auto">
                  {queryHistory.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 rounded-xl border-2 ${
                        item.status === 'processing'
                          ? 'bg-purple-50 border-purple-300'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          item.status === 'processing'
                            ? 'bg-purple-200 text-purple-700'
                            : 'bg-green-200 text-green-700'
                        }`}>
                          {item.status === 'processing' ? 'Processing...' : 'Completed'}
                        </span>
                        <span className="text-xs text-gray-500">{item.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-700 line-clamp-2">{item.query}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mt-8"
        >
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
            <Brain className="w-8 h-8 mb-3" />
            <h3 className="text-xl mb-2">Smart Analysis</h3>
            <p className="text-blue-100">Powered by fine-tuned LLM reasoning with domain-specific knowledge</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
            <Sparkles className="w-8 h-8 mb-3" />
            <h3 className="text-xl mb-2">Explainable AI</h3>
            <p className="text-purple-100">Every answer includes clear reasoning steps you can trust</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
            <TrendingUp className="w-8 h-8 mb-3" />
            <h3 className="text-xl mb-2">Real-time Results</h3>
            <p className="text-pink-100">Get instant responses without sacrificing depth or quality</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
