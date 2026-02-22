import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Brain, Home, FileText, Upload, CheckCircle, Sparkles, FileSearch, BookText } from 'lucide-react';
import { useState } from 'react';

const documentTypes = [
  { name: 'Engineering Specifications', icon: FileText, color: 'from-blue-400 to-blue-600' },
  { name: 'Procurement Documents', icon: FileSearch, color: 'from-purple-400 to-purple-600' },
  { name: 'Project Plans', icon: BookText, color: 'from-pink-400 to-pink-600' },
];

const analysisFeatures = [
  'AI-powered summarization',
  'Entity extraction',
  'Cross-referencing',
  'Compliance checking',
  'Risk identification',
  'Cost analysis',
];

export default function DocumentAnalysisPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files).map(f => f.name);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg border-b border-pink-100"
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-lg">Document Analysis</div>
              <div className="text-xs text-gray-500">AI-Powered Document Intelligence</div>
            </div>
          </motion.div>
          
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full flex items-center gap-2 hover:bg-pink-200 transition-colors"
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
            Intelligent <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Document Analysis</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload and analyze engineering specs, procurement docs, and project plans with AI-powered 
            summarization, entity extraction, and cross-referencing.
          </p>
        </motion.div>

        {/* Document Types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mb-12"
        >
          {documentTypes.map((type, index) => (
            <motion.div
              key={type.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4`}>
                <type.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg">{type.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl border-2 border-pink-200 p-12 mb-12"
        >
          <motion.div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            whileHover={{ scale: 1.02 }}
            className={`border-4 border-dashed rounded-3xl p-16 text-center transition-all ${
              isDragging 
                ? 'border-pink-500 bg-pink-50' 
                : 'border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50'
            }`}
          >
            <motion.div
              animate={{ 
                y: isDragging ? -10 : [0, -10, 0],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Upload className="w-16 h-16 mx-auto mb-6 text-pink-500" />
            </motion.div>
            <h3 className="text-2xl mb-3">Drop your documents here</h3>
            <p className="text-gray-600 mb-6">or click to browse files</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-lg"
            >
              Select Files
            </motion.button>
          </motion.div>

          {uploadedFiles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 space-y-3"
            >
              <h4 className="text-lg mb-4">Uploaded Documents:</h4>
              {uploadedFiles.map((file, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="flex-1">{file}</span>
                  <span className="text-sm text-gray-500">Processing...</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl text-center mb-8">
            Powerful <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Analysis Features</span>
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {analysisFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-lg border border-pink-200"
              >
                <Sparkles className="w-8 h-8 text-pink-500 mb-3" />
                <h3 className="text-lg">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-3xl mb-4">Ready to analyze your documents?</h3>
          <p className="text-lg mb-6">Start extracting insights from your EPC documents today</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-pink-600 rounded-full shadow-xl"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
