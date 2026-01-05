
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Parallax-ish feel */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" 
          alt="Construction Site"
          className="w-full h-full object-cover grayscale-[30%] brightness-[40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
        </motion.div>


      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-20 bg-amber-400" />
            <span className="text-amber-400 font-bold uppercase tracking-[0.3em] text-sm md:text-base">
              قوة التنفيذ .. دقة الهندسة
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-10"
          >
            نبني <span className="text-amber-400">للمستقبل</span><br />بأبعاد عملاقة
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            مجموعة الإعمار الهندسية هي الشريك الاستراتيجي لبناء البنى التحتية والمشاريع القومية الكبرى بأعلى معايير الكفاءة والابتكار.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              to="/projects"
              className="bg-amber-400 text-black px-12 py-5 font-black uppercase text-base tracking-widest flex items-center justify-center gap-4 group hover:bg-white transition-all"
            >
              استعرض مشاريعنا
              <ArrowLeft className="group-hover:-translate-x-2 transition-transform" />
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-12 py-5 font-black uppercase text-base tracking-widest flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              من نحن
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical indicators */}
      <div className="absolute left-10 bottom-10 hidden lg:flex flex-col gap-8 items-center">
        <span className="text-white/20 text-xs font-bold uppercase rotate-90 origin-left tracking-widest">SCROLL</span>
        <div className="w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
