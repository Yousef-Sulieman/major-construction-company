
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 py-4 shadow-2xl border-b border-white/10' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-amber-400 p-2">
            <Building2 className="text-black w-8 h-8" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase leading-none">
              مجموعة الإعمار
            </span>
            <span className="text-[10px] md:text-xs text-amber-400 font-bold tracking-[0.2em] uppercase leading-none mt-1">
              للمقاولات الهندسية
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-amber-400 ${
                location.pathname === link.path ? 'text-amber-400' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-amber-400 text-black px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-white transition-colors"
          >
            ابدأ مشروعك
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 lg:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-white hover:text-amber-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
