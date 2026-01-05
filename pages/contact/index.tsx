
import React from 'react';
import SectionHeader from '../../components/shared/SectionHeader';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-neutral-950 pt-40 min-h-screen">
      <div className="container mx-auto px-6 mb-24">
        <SectionHeader 
          title="تواصل مع الخبراء" 
          subtitle="نحن مستعدون لمناقشة تطلعاتكم الهندسية وتقديم الاستشارات اللازمة لمشاريعكم القادمة."
          light
        />
      </div>

      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-black text-white mb-10 border-r-8 border-amber-400 pr-6 uppercase tracking-wider">
              المكاتب الرئيسية
            </h2>
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="bg-amber-400 p-5 shrink-0">
                  <MapPin className="text-black" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-3">المقر الرئيسي - الرياض</h4>
                  <p className="text-gray-400 text-lg">شارع العليا العام، البرج الهندسي، الطابق 22، الرياض، المملكة العربية السعودية</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="bg-white/10 p-5 shrink-0">
                  <Phone className="text-amber-400" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-3">مركز الاتصالات</h4>
                  <p className="text-gray-400 text-lg">هاتف: +966 11 123 4567</p>
                  <p className="text-gray-400 text-lg">رقم مجاني: 800 124 5566</p>
                </div>
              </div>
              <div className="flex items-start gap-8">
                <div className="bg-white/10 p-5 shrink-0">
                  <Mail className="text-amber-400" size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white mb-3">البريد الإلكتروني</h4>
                  <p className="text-gray-400 text-lg">للمشاريع: projects@emaar-contracting.com</p>
                  <p className="text-gray-400 text-lg">عام: info@emaar-contracting.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-neutral-900 p-12 border-t-8 border-amber-400">
            <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-4">
              <MessageSquare className="text-amber-400" />
              طلب استشارة فنية
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">الاسم بالكامل</label>
                  <input type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-400 outline-none transition-all" placeholder="ادخل اسمك هنا" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">الجهة / الشركة</label>
                  <input type="text" className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-400 outline-none transition-all" placeholder="اسم جهة العمل" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">البريد الإلكتروني الرسمي</label>
                <input type="email" className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-400 outline-none transition-all" placeholder="example@company.com" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">نوع المشروع</label>
                <select className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-400 outline-none transition-all">
                  <option>بنية تحتية وجسور</option>
                  <option>ناطحات سحاب ومباني تجارية</option>
                  <option>مشاريع صناعية وبتروكيماويات</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-3">تفاصيل الاستفسار</label>
                <textarea rows={6} className="w-full bg-black border border-white/10 p-4 text-white focus:border-amber-400 outline-none transition-all" placeholder="اكتب نبذة عن مشروعك هنا..."></textarea>
              </div>
              <button className="w-full bg-amber-400 text-black p-6 font-black uppercase tracking-[0.2em] text-lg hover:bg-white transition-all flex items-center justify-center gap-4">
                إرسال الطلب
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-neutral-800 relative mt-20 grayscale">
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 font-black text-4xl uppercase tracking-[0.3em]">Interactive Map Placeholder</span>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
