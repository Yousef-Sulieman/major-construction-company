
import React from 'react';
import { Building2, Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-amber-400 p-2">
              <Building2 className="text-black w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-white uppercase leading-none">مجموعة الإعمار</span>
              <span className="text-xs text-amber-400 font-bold uppercase leading-none mt-1">للمقاولات الهندسية</span>
            </div>
          </div>
          <p className="text-gray-500 leading-relaxed mb-8">
            نحن القوة الدافعة خلف أضخم المشاريع الإنشائية في المنطقة. نجمع بين الخبرة الهندسية العريقة والتقنيات الحديثة لبناء مستقبل الغد.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black cursor-pointer transition-all">
              <Linkedin size={20} />
            </div>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black cursor-pointer transition-all">
              <Twitter size={20} />
            </div>
            <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-white hover:bg-amber-400 hover:text-black cursor-pointer transition-all">
              <Instagram size={20} />
            </div>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-8 border-r-4 border-amber-400 pr-4 uppercase tracking-wider">
            روابط سريعة
          </h4>
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link to={link.path} className="text-gray-500 hover:text-amber-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold text-lg mb-8 border-r-4 border-amber-400 pr-4 uppercase tracking-wider">
            تخصصاتنا
          </h4>
          <ul className="flex flex-col gap-4">
            <li className="text-gray-500">الهندسة الإنشائية</li>
            <li className="text-gray-500">البنية التحتية والجسور</li>
            <li className="text-gray-500">المقاولات الصناعية</li>
            <li className="text-gray-500">الطاقة والمياه</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold text-lg mb-8 border-r-4 border-amber-400 pr-4 uppercase tracking-wider">
            اتصل بنا
          </h4>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4 text-gray-500">
              <MapPin className="text-amber-400 shrink-0" size={20} />
              <span>شارع العليا العام، حي المروج، الرياض، المملكة العربية السعودية</span>
            </li>
            <li className="flex items-center gap-4 text-gray-500">
              <Phone className="text-amber-400 shrink-0" size={20} />
              <span>+966 11 123 4567</span>
            </li>
            <li className="flex items-center gap-4 text-gray-500">
              <Mail className="text-amber-400 shrink-0" size={20} />
              <span>info@emaar-contracting.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} مجموعة الإعمار الهندسية. جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-8 text-gray-600 text-sm">
          <a href="#" className="hover:text-white">سياسة الخصوصية</a>
          <a href="#" className="hover:text-white">الشروط والأحكام</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
