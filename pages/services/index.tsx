
import React from 'react';
import { SERVICES } from '../../constants';
import SectionHeader from '../../components/shared/SectionHeader';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-neutral-950 pt-40 min-h-screen">
      <div className="container mx-auto px-6 mb-24">
        <SectionHeader 
          title="حلول هندسية متكاملة" 
          subtitle="نقدم حزمة واسعة من الخدمات الإنشائية والهندسية الموجهة للمشاريع العملاقة والقطاعات الحكومية والصناعية."
          light
        />
      </div>

      <div className="flex flex-col">
        {SERVICES.map((service, idx) => (
          <section key={service.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} border-b border-white/5`}>
            <div className="w-full lg:w-1/2 h-[60vh] lg:h-auto overflow-hidden">
              <img src={service.imageUrl} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={service.title} />
            </div>
            <div className="w-full lg:w-1/2 p-12 lg:p-24 flex items-center">
              <div>
                <span className="text-amber-400 font-black text-7xl opacity-20 block mb-6">0{idx + 1}</span>
                <h2 className="text-4xl lg:text-6xl font-black text-white mb-10 leading-tight">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-xl leading-relaxed mb-12">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-4 text-white font-bold border-r-2 border-amber-400 pr-4">
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
