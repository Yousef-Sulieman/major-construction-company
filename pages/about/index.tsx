
import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';
import TimelineSection from '../../components/sections/TimelineSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-neutral-950 pt-40 min-h-screen">
      <div className="container mx-auto px-6 mb-24">
        <SectionHeader 
          title="عن مجموعة الإعمار" 
          subtitle="تعرف على تاريخنا وقيمنا التي جعلت منا القوة الرائدة في قطاع الإنشاءات الكبرى."
          light
        />
      </div>

      <section className="py-24 border-y border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative h-[600px]">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070" className="w-full h-full object-cover grayscale" alt="Team" />
            <div className="absolute -bottom-10 -left-10 bg-amber-400 p-12 hidden md:block">
              <div className="text-6xl font-black text-black mb-2">35+</div>
              <div className="text-black font-black uppercase tracking-widest text-sm">عاماً من التميز</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-black text-white mb-8 leading-tight">رؤيتنا: بناء مدن ذكية ومستدامة للأجيال القادمة.</h2>
            <div className="space-y-8 text-gray-400 text-lg leading-relaxed">
              <p>
                تأسست مجموعة الإعمار الهندسية برؤية طموحة للمساهمة في النهضة العمرانية التي تشهدها المنطقة. على مر العقود، نجحنا في التحول من شركة مقاولات محلية إلى مجموعة هندسية متكاملة تدير أضخم المشاريع الإنشائية.
              </p>
              <p>
                نحن نؤمن بأن الهندسة ليست مجرد بناء جدران، بل هي فن تشكيل المساحات وخلق بيئات عمل وحياة تلهم الإنسان. نلتزم دائماً بالابتكار التقني ودمج الاستدامة في كل مراحل التنفيذ.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-white font-black mb-4">رسالتنا</h4>
                  <p className="text-sm">تقديم حلول هندسية مبتكرة وموثوقة تفوق توقعات عملائنا وتساهم في التطور المجتمعي.</p>
                </div>
                <div>
                  <h4 className="text-white font-black mb-4">قيمنا</h4>
                  <p className="text-sm">النزاهة، الكفاءة، السلامة أولاً، والابتكار المستمر في كل مشروع.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TimelineSection />

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader title="القيادة العليا" subtitle="نخبة من الكفاءات الهندسية والإدارية التي تقود المجموعة نحو آفاق جديدة." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            {[1, 2, 3,].map(i => (
              <div key={i} className="group overflow-hidden">
                <div className="h-[450px] overflow-hidden bg-gray-200 mb-8">
                  <img src="https://plus.unsplash.com/premium_photo-1683133992051-daa8ff45115e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="Executive" />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-2">م. إبراهيم </h4>
                <p className="text-amber-600 font-bold uppercase tracking-widest text-sm">الرئيس التنفيذي</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
