
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-amber-400 overflow-hidden relative">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-black/5 -skew-x-12 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="text-center lg:text-right">
          <h2 className="text-4xl md:text-7xl font-black text-black leading-tight mb-6">
            هل أنت جاهز لتنفيذ <br /> مشروعك القادم؟
          </h2>
          <p className="text-black/70 text-xl font-bold max-w-xl mx-auto lg:mx-0">
            نحن هنا لتحويل الرؤى الطموحة إلى واقع ملموس. فريقنا من الخبراء جاهز لمناقشة التفاصيل التقنية لمشروعك.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            to="/contact"
            className="bg-black text-white px-12 py-6 font-black uppercase tracking-[0.2em] text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-4"
          >
            تواصل معنا الآن
            <PhoneCall />
          </Link>
          <Link 
            to="/projects"
            className="border-2 border-black text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-lg hover:bg-black hover:text-white transition-all flex items-center justify-center"
          >
            تصفح السابقة الأعمال
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
