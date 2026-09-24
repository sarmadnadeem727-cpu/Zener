import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart3, Box, RefreshCw, Settings } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

const Services: React.FC = () => {
  const services = [
    {
      title: "ERP Integration",
      description: "Seamlessly connect disparate legacy systems into a unified data backbone. We support SAP, Oracle, and Microsoft Dynamics.",
      icon: Database
    },
    {
      title: "BI & Analytics",
      description: "Turn data into decisions. Our custom dashboards visualize real-time KPIs for actionable operational intelligence.",
      icon: BarChart3
    },
    {
      title: "Inventory Planning",
      description: "AI-driven demand forecasting and automated replenishment systems to minimize holding costs and stockouts.",
      icon: Box
    },
    {
      title: "Digital Transformation",
      description: "End-to-end modernization of your supply chain infrastructure. From paper-based to fully digital workflows.",
      icon: RefreshCw
    },
    {
      title: "System Architecture",
      description: "Robust, scalable cloud infrastructure design ensuring high availability and security for your critical operations.",
      icon: Settings
    }
  ];

  return (
    <PageLayout>
      <div className="bg-zener-dark min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 sm:mb-16 border-b border-zener-border pb-6 sm:pb-8"
          >
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">Core Services</h1>
            <p className="text-base sm:text-xl text-zener-text-muted max-w-2xl font-light">
              Specialized engineering for the modern supply chain.
            </p>
          </motion.div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-zener-navy/30 border border-zener-border hover:border-zener-cyan p-5 sm:p-8 rounded-xl transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <service.icon className="w-32 h-32 text-zener-cyan" />
                </div>

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  <div className="p-4 bg-zener-dark/50 rounded border border-zener-border/50">
                    <service.icon className="w-8 h-8 text-zener-cyan" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zener-cyan transition-colors">{service.title}</h3>
                    <p className="text-zener-text-muted max-w-3xl leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="md:ml-auto">
                    <span className="text-xs font-mono text-zener-cyan uppercase border border-zener-cyan/30 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Module
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Services;
