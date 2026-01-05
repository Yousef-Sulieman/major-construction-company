
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { TIMELINE } from '../../constants';
import SectionHeader from '../shared/SectionHeader';

const TimelineSection: React.FC = () => {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-32 bg-neutral-900 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          title="مسيرة الإنجاز" 
          subtitle="عقود من التطوير المستمر وبناء الحضارة العمرانية في المنطقة."
          light
        />

        <div className="relative mt-24">
          {/* Vertical Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute right-4 md:right-1/2 top-0 w-1 h-full bg-amber-400 z-0"
          />

          <div className="flex flex-col gap-32">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center justify-center w-full ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute right-1.5 md:right-[calc(50%-10px)] top-0 w-5 h-5 bg-amber-400 rounded-none z-10 border-4 border-black" />

                {/* Content Card */}
                <div className={`w-full md:w-5/12 pr-12 md:pr-0 ${idx % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                  <div className="text-4xl md:text-6xl font-black text-white/10 mb-2">{item.year}</div>
                  <h4 className="text-2xl font-bold text-amber-400 mb-4">{item.title}</h4>
                  <p className="text-gray-400 leading-relaxed text-lg">{item.description}</p>
                </div>

                {/* Spacer for other side */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
