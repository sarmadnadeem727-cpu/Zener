import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <PageLayout>
      <div className="bg-zener-dark min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-1/3 h-full border-l border-zener-border opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 border-t border-zener-border opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

          {/* Left: Content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-white mb-6"
            >
              Initiate <br />
              <span className="text-zener-cyan">Transformation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-zener-text-muted mb-12 max-w-lg font-light leading-relaxed"
            >
              Take time to let us present a structured project management timeline for your digital supply chain transformation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-zener-navy p-3 border border-zener-border rounded-sm">
                  <Mail className="text-zener-cyan w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email Connection</h3>
                  <p className="text-zener-text-muted">infrastructure@zener.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-zener-navy p-3 border border-zener-border rounded-sm">
                  <MapPin className="text-zener-cyan w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Global Headquarters</h3>
                  <p className="text-zener-text-muted">
                    10 Hudson Yards, Suite 4500<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-zener-navy/30 backdrop-blur-md p-10 border border-zener-border rounded-sm shadow-2xl"
          >
            <h2 className="text-2xl font-bold text-white mb-8">System Access Request</h2>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative">
                  <label className="text-xs font-mono text-zener-cyan uppercase mb-2 block">Identity</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-zener-dark border border-zener-border p-4 text-white focus:border-zener-cyan focus:outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <label className="text-xs font-mono text-zener-cyan uppercase mb-2 block">Organization</label>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full bg-zener-dark border border-zener-border p-4 text-white focus:border-zener-cyan focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-mono text-zener-cyan uppercase mb-2 block">Communication Point</label>
                <input
                  type="email"
                  placeholder="Business Email"
                  className="w-full bg-zener-dark border border-zener-border p-4 text-white focus:border-zener-cyan focus:outline-none transition-colors"
                />
              </div>

              <div className="relative">
                <label className="text-xs font-mono text-zener-cyan uppercase mb-2 block">Sector</label>
                <select className="w-full bg-zener-dark border border-zener-border p-4 text-white focus:border-zener-cyan focus:outline-none transition-colors appearance-none">
                  <option>Logistics & Transportation</option>
                  <option>Manufacturing</option>
                  <option>Retail & Distribution</option>
                  <option>Pharmaceuticals</option>
                </select>
              </div>

              <div className="relative">
                <label className="text-xs font-mono text-zener-cyan uppercase mb-2 block">Project Scope</label>
                <textarea
                  rows={4}
                  placeholder="Describe your infrastructure needs..."
                  className="w-full bg-zener-dark border border-zener-border p-4 text-white focus:border-zener-cyan focus:outline-none transition-colors"
                />
              </div>

              <button className="w-full bg-zener-cyan text-zener-dark font-bold tracking-widest uppercase py-4 hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group">
                Schedule Infrastructure Discussion
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
