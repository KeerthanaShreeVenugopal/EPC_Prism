import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Home, Send, Clock, TrendingUp, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface QueryHistoryItem {
  id: string;
  query: string;
  timestamp: string;
  status: 'completed' | 'processing';
  answer?: string; // ✅ added
}

const sampleQueries = [
  'What are the key risks in offshore wind farm construction?',
  'Explain procurement strategies for large-scale EPC projects',
  'What are pre-construction risks in RCC residential buildings?',
  'How does column spacing affect structural behavior?',
];

export default function QueryEnginePage() {
  const [query, setQuery] = useState('');
  const [queryHistory, setQueryHistory] = useState<QueryHistoryItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const newQuery: QueryHistoryItem = {
      id: Date.now().toString(),
      query: query,
      timestamp: new Date().toLocaleTimeString(),
      status: 'processing',
    };

    setQueryHistory(prev => [newQuery, ...prev]);
    setIsProcessing(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: query }),
      });

      const data = await response.json();

      setQueryHistory(prev =>
        prev.map(q =>
          q.id === newQuery.id
            ? { ...q, status: 'completed', answer: data.answer }
            : q
        )
      );

    } catch (error) {
      console.error("API error:", error);

      setQueryHistory(prev =>
        prev.map(q =>
          q.id === newQuery.id
            ? {
                ...q,
                status: 'completed',
                answer: "Error: Unable to fetch response from backend.",
              }
            : q
        )
      );
    }

    setIsProcessing(false);
    setQuery('');
  };

  const handleSampleQuery = (sampleQuery: string) => {
    setQuery(sampleQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">

      {/* HEADER (UNCHANGED) */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg border-b border-purple-100"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.05 }}>
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

          {/* MAIN SECTION (UNCHANGED DESIGN) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-8">
              <h1 className="text-3xl mb-2">Ask a Question</h1>
              <p className="text-gray-600 mb-6">
                Enter your query here... The system will analyze it using the EPC framework.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask your EPC pre-construction question..."
                    className="w-full h-32 px-6 py-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 focus:border-purple-400 outline-none resize-none transition-all"
                  />

                  <motion.button
                    type="submit"
                    disabled={isProcessing || !query.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
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
            </div>
          </motion.div>

          {/* QUERY HISTORY SIDEBAR (DESIGN KEPT) */}
          <motion.div className="col-span-1">
            <div className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl">Query History</h2>
              </div>

              {queryHistory.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  No queries yet
                </div>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {queryHistory.map(item => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl border bg-gray-50 border-gray-200"
                    >
                      <div className="text-xs text-gray-500 mb-2">
                        {item.timestamp}
                      </div>

                      <p className="text-sm font-medium text-gray-800 mb-2">
                        {item.query}
                      </p>

                      {item.answer && (
                        <p className="text-sm text-gray-600 whitespace-pre-line">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}