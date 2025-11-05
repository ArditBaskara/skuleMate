'use client';
import Image from 'next/image';

const Features = () => {
  const features = [
  {
    title: 'AI-Powered Matching',
    description:
      'Automatically matches your profile with scholarship descriptions using advanced sentence embedding and semantic similarity.',
    image: '/ai.jpg',
    alt: 'AI Matching',
  },
  {
    title: 'CV or Text Input',
    description:
      'Upload your resume or simply describe yourself, our system will personalize the recommendations based on your academic journey.',
    image: '/cv.jpg',
    alt: 'CV Input',
  },
  {
    title: 'Massive Scholarship Data',
    description:
      'Our scraper technology continuously gathers and updates thousands of verified scholarships from global sources, so you don’t have to.',
    image: '/data.jpg',
    alt: 'Scraping Tech',
  },
];

  return (
    <section id='features' className="bg-gradient-to-b from-neutral-900 via-neutral-950 to-neutral-950 text-white py-25 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-blue-400">
          Smarter Features for Smarter Scholarship Search
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature Card */}
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-md border border-neutral-800 transform transition duration-300 hover:-translate-y-2"
            >
              <div className="w-full h-48 relative">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-blue-300 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
