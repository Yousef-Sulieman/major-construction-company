
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, light = false }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-16 border-r-8 border-amber-400 pr-6"
    >
      <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-xl max-w-2xl ${light ? 'text-gray-400' : 'text-gray-600'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
