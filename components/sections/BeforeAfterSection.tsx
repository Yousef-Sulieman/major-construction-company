
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../shared/SectionHeader';

const BeforeAfterSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(x, 0), 100));
  };

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="تحولات جذرية" 
          subtitle="نحن لا نبني المباني فحسب، بل نحول المواقع القاحلة إلى معالم هندسية نابضة بالحياة."
        />

        <div 
          className="relative aspect-video w-full overflow-hidden cursor-ew-resize group shadow-2xl"
          onMouseMove={handleMouseMove}
        >
          {/* After Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" 
              alt="After" 
              className="w-full h-full object-cover"
            />
            <div className="absolute left-8 bottom-8 bg-amber-400 text-black px-4 py-2 font-black uppercase tracking-widest text-sm z-20">
              بعد التنفيذ
            </div>
          </div>

          {/* Before Image Overlay */}
          <div 
            className="absolute inset-0" 
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592dee58c460?q=80&w=2070" 
              alt="Before" 
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute right-8 bottom-8 bg-black text-white px-4 py-2 font-black uppercase tracking-widest text-sm z-20">
              قبل البدء
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-amber-400 z-30 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-amber-400 rounded-none flex items-center justify-center shadow-xl">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-black" />
                <div className="w-1 h-4 bg-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
