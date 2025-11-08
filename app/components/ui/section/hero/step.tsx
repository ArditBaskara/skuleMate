import { Upload, Brain, Search } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload or Describe",
    description: "Share your CV or write a brief bio about your background, achievements, and goals.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our advanced NLP model analyzes your profile using semantic understanding and sentence embeddings.",
  },
  {
    icon: Search,
    title: "Get Matched",
    description: "Receive personalized scholarship recommendations ranked by relevance to your profile.",
  },
];

const Step = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-50 via-indigo-100 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
            How <span className="bg-gradient-to-r from-cyan-950 via-blue-600 to-blue-600 bg-clip-text text-transparent">SkuleMate</span> Works
          </h2>
          <p className="text-lg text-gray-700">
            Three simple steps to discover scholarships that match your unique profile
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
              )}

              <div className="relative bg-white p-8 rounded-2xl border border-gray-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6 relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 shadow-md">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold shadow-blue-600">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Step;
