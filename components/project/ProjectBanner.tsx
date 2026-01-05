
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import { MapPin, Calendar, ArrowLeft } from 'lucide-react';

interface ProjectBannerProps {
  project: Project;
  reverse?: boolean;
}

const ProjectBanner: React.FC<ProjectBannerProps> = ({ project, reverse = false }) => {
  return (
    <section className={`relative min-h-[80vh] flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-neutral-900 border-b border-white/5`}>
      {/* Image Side */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="w-full lg:w-3/5 h-[50vh] lg:h-auto overflow-hidden relative"
      >
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all" />
      </motion.div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-amber-400 text-black px-3 py-1 text-xs font-black uppercase tracking-widest">
              {project.category}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-8">
            {project.title}
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            {project.description}
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-3">
              <MapPin className="text-amber-400" size={20} />
              <span className="text-gray-300 text-sm font-bold">{project.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="text-amber-400" size={20} />
              <span className="text-gray-300 text-sm font-bold">التسليم: {project.completionDate}</span>
            </div>
          </div>

          <Link 
            to={`/project/${project.id}`}
            className="inline-flex items-center gap-4 text-white font-black uppercase tracking-widest text-sm border-b-2 border-amber-400 pb-2 hover:text-amber-400 transition-colors"
          >
            تفاصيل المشروع
            <ArrowLeft />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectBanner;
