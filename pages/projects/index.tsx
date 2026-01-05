
import React from 'react';
import { PROJECTS } from '../../constants';
import ProjectBanner from '../../components/project/ProjectBanner';
import SectionHeader from '../../components/shared/SectionHeader';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-40 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-6 mb-24">
        <SectionHeader 
          title="سجل الإنجازات" 
          subtitle="استعرض أضخم المشاريع الهندسية والإنشائية التي قامت مجموعة الإعمار بتنفيذها في مختلف القطاعات."
          light
        />
      </div>

      <div className="flex flex-col">
        {PROJECTS.map((project, idx) => (
          <ProjectBanner 
            key={project.id} 
            project={project} 
            reverse={idx % 2 !== 0} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
