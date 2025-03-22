
// import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image2 from '../assets/image2.png'

const serviceVariants = {
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

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'GHG Accounting',
      description: 'We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.',
      image: {image2}
    },
    {
      id: 2,
      title: 'GHG Accounting',
      description: 'We provide GHG accounting services, measuring and reporting Scope 1, 2, and 3 emissions. Our process ensures compliance and helps organizations track and reduce their carbon footprint.',
      image: {image2}
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-carbon-green font-medium mb-2">OUR SERVICES</h2>
          <h3 className="text-3xl font-bold">What do we <span className="text-orange-400">do</span>?</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <motion.img 
              src={image2}
              alt="Computer showing carbon data"
              className="w-full max-w-md mx-auto object-contain"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="service-card"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={serviceVariants}
              >
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <Link to="/services" className="inline-block text-carbon-green hover:underline text-sm font-medium">
                  See More Details
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
