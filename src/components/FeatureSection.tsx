
import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, Brain } from 'lucide-react';

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    }
  })
};

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  index: number 
}) => (
  <motion.div
    className="feature-card"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={featureVariants}
  >
    <div className="w-12 h-12 bg-carbon-light rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-carbon-green" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: Database,
      title: 'Automated Data Collection',
      description: 'Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Reporting',
      description: 'Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.'
    },
    {
      icon: BarChart3,
      title: 'Monitoring & Reporting',
      description: 'Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.'
    },
    {
      icon: Database,
      title: 'Simplified Certification Process',
      description: 'Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.'
    },
    {
      icon: Brain,
      title: 'AI-Driven Insights',
      description: 'Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.'
    },
    {
      icon: Brain,
      title: 'AI-Driven Insights',
      description: 'Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-orange-400 font-medium mb-2">FEATURES</h2>
          <h3 className="text-3xl font-bold">Why <span className="text-carbon-dark">Carbon Crunch</span>?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
