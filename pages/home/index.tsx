
import React from 'react';
import HeroSection from '../../components/sections/HeroSection';
import StatsSection from '../../components/sections/StatsSection';
import CapabilitiesSection from '../../components/sections/CapabilitiesSection';
import ProjectBanner from '../../components/project/ProjectBanner';
import TimelineSection from '../../components/sections/TimelineSection';
import BeforeAfterSection from '../../components/sections/BeforeAfterSection';
import CTASection from '../../components/sections/CTASection';
import { PROJECTS } from '../../constants';
import SectionHeader from '../../components/shared/SectionHeader';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="القوة في التنفيذ" 
            subtitle="نحن لسنا مجرد شركة مقاولات، نحن القوة الهندسية التي تشكل أفق المستقبل من خلال الابتكار والخبرة."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-20">
            <div className="text-lg text-gray-600 leading-relaxed">
              تتمتع مجموعة الإعمار الهندسية بسجل حافل من النجاحات في تنفيذ أضخم المشاريع القومية والبنى التحتية. بفضل أسطولنا الضخم من المعدات وكوادرنا المؤهلة، نضمن جودة لا تضاهى في كل متر مربع نقوم ببنائه.
            </div>
            <div className="text-lg text-gray-600 leading-relaxed">
              نحن نلتزم بأعلى معايير السلامة والاستدامة، متبنين أحدث التقنيات الرقمية في التصميم والإشراف لضمان دقة التنفيذ والالتزام بالجداول الزمنية الصارمة للمشاريع الكبرى.
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <CapabilitiesSection />

      <section className="bg-neutral-900 py-32">
        <div className="container mx-auto px-6 mb-20">
          <SectionHeader 
            title="مشاريع مميزة" 
            subtitle="نظرة على بعض التحف الهندسية التي قمنا بتنفيذها مؤخراً."
            light
          />
        </div>
        {PROJECTS.map((project, idx) => (
          <ProjectBanner 
            key={project.id} 
            project={project} 
            reverse={idx % 2 !== 0}
          />
        ))}
      </section>

      <TimelineSection />
      <BeforeAfterSection />
      <CTASection />
    </div>
  );
};

export default HomePage;
