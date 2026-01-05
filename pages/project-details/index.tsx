
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../../constants';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Calendar, Ruler, ArrowRight } from 'lucide-react';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <Navigate to="/projects" />;

  return (
    <div className="bg-neutral-950 min-h-screen pt-24">
      {/* Hero Header */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        
        <div className="absolute inset-0 container mx-auto px-6 flex flex-col justify-end pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="bg-amber-400 text-black px-4 py-2 text-sm font-black uppercase tracking-[0.2em] mb-6 inline-block">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="text-amber-400" />
                <span className="font-bold">{project.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Calendar className="text-amber-400" />
                <span className="font-bold">سنة الإنجاز: {project.completionDate}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Ruler className="text-amber-400" />
                <span className="font-bold">المساحة: {project.area}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview & Stats */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-white mb-10 border-r-8 border-amber-400 pr-6">
              نظرة عامة على المشروع
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              {project.description}
            </p>
            
            <h3 className="text-2xl font-black text-white mb-8">التفاصيل الفنية</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-4 text-gray-400">
                  <CheckCircle2 className="text-amber-400 shrink-0 mt-1" />
                  <span className="text-lg">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-neutral-900 p-12 border-t-8 border-amber-400">
            <h3 className="text-2xl font-black text-white mb-10 uppercase tracking-widest">إحصائيات الإنجاز</h3>
            <div className="flex flex-col gap-12">
              {project.stats.map((stat, idx) => (
                <div key={idx} className="border-b border-white/5 pb-6 last:border-0">
                  <div className="text-5xl font-black text-amber-400 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 container mx-auto px-6 border-t border-white/5">
        <h2 className="text-3xl font-black text-white mb-12 border-r-8 border-amber-400 pr-6 uppercase tracking-wider">
          معرض الصور التقنية
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img src={project.imageUrl} className="aspect-square object-cover grayscale hover:grayscale-0 transition-all cursor-zoom-in" alt="Shot 1" />
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" className="aspect-square object-cover grayscale hover:grayscale-0 transition-all cursor-zoom-in" alt="Shot 2" />
          <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=2070" className="aspect-square object-cover grayscale hover:grayscale-0 transition-all cursor-zoom-in" alt="Shot 3" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-400 py-20 mt-32">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-4xl font-black text-black">هل تريد تنفيذ مشروع مماثل؟</h2>
          <Link to="/contact" className="bg-black text-white px-12 py-5 font-black uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center gap-4">
            تواصل معنا الآن
            <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsPage;
