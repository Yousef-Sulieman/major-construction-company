
import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '500+', label: 'مشروع منجز' },
  { value: '35', label: 'عاماً من الخبرة' },
  { value: '150k', label: 'متر مكعب خرسانة/سنوياً' },
  { value: '12k+', label: 'كوادر هندسية وفنية' }
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center lg:text-right border-r-4 border-amber-400 pr-6"
            >
              <div className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
