
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
import SectionHeader from '../shared/SectionHeader';

const CapabilitiesSection: React.FC = () => {
  return (
    <section className="py-32 bg-neutral-900">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="قدرات التنفيذ" 
          subtitle="نمزج بين الخبرة الميدانية والابتكار الهندسي لتنفيذ أعقد المشاريع الإنشائية."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="group relative h-[600px] overflow-hidden bg-black"
            >
              <img 
                src={service.imageUrl} 
                alt={service.title}
                className="w-full h-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-70"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
                <h3 className="text-3xl font-black text-white mb-6 uppercase leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {service.capabilities.map((cap, i) => (
                    <li key={i} className="text-[10px] font-black uppercase tracking-widest text-black bg-amber-400 px-3 py-1">
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
