'use client';
import { Bot, FileUp, Sparkles, Target } from "lucide-react";
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description: "Our custom-trained models use SBERT for semantic similarity to find scholarships that truly match your profile.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: FileUp,
      title: "CV or Text Input",
      description: "Upload your resume or simply write about yourself. Our system understands both formats perfectly.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "Smart Retrieval",
      description: "Advanced NLP techniques ensure you never miss relevant opportunities. No manual keyword matching needed.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Target,
      title: "Personalized Results",
      description: "Get scholarships ranked by relevance score, saving you hours of research and increasing your chances.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-50 via-indigo-100 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            Why Choose <span className="bg-gradient-to-r from-cyan-950 via-blue-600 to-blue-600 bg-clip-text text-transparent">SkuleMate?</span>
          </h2>
          <p className="text-lg text-gray-700">
            Powered by cutting-edge AI technology to make scholarship hunting effortless
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white p-6 rounded-2xl border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}>
              <div className="mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
