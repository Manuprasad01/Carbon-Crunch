
import React from 'react';
import { motion } from 'framer-motion';

const statVariants = {
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

const StatsSection = () => {
  const stats = [
    { id: 1, value: '98%', text: 'of CEOs agree sustainability is their responsibility', bg: 'bg-carbon-dark' },
    { id: 2, value: '3X', text: 'ESG high performers deliver a higher total shareholder return', bg: 'bg-carbon-green' },
    { id: 3, value: '37%', text: 'of the world\'s largest companies have a public net zero target. Nearly all are off track', bg: 'bg-yellow-500' },
    { id: 4, value: '18%', text: 'of companies are cutting emissions fast enough to reach net zero by 2050', bg: 'bg-carbon-dark' },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className={`stat-card ${stat.bg} rounded-lg`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={statVariants}
            >
              <span className="text-3xl font-bold mb-2">{stat.value}</span>
              <p className="text-sm">{stat.text}</p>
              {index === 2 && (
                <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs py-1 px-2 rounded-bl-md">
                  Anonymous
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
