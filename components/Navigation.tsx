
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  Search, 
  Zap, 
  Map as MapIcon, 
  Users,
  CreditCard,
  TrendingUp,
  Leaf
} from 'lucide-react';
import { NavItem } from '../types';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems: NavItem[] = [
    { id: 'summary', label: 'Market Audit', icon: <Search size={18} /> },
    { id: 'analysis', label: 'Central Belt Volume', icon: <TrendingUp size={18} /> },
    { id: 'strategy', label: 'The Roadmap', icon: <Zap size={18} /> },
    { id: 'regional', label: 'Glasgow & Beyond', icon: <MapIcon size={18} /> },
    { id: 'value', label: 'Value Logic', icon: <Leaf size={18} /> },
    { id: 'investment', label: 'Investment', icon: <CreditCard size={18} /> },
    { id: 'next-steps', label: 'Next Steps', icon: <Users size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-slate-950 border-r border-slate-800 z-50 flex flex-col justify-between py-8 hidden md:flex"
    >
      <div className="px-6 mb-8">
        <div className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
          <Sun className="text-brand" />
          <span className="hidden lg:inline uppercase">T&C<span className="text-brand">Renewables</span></span>
        </div>
        <div className="text-[10px] text-slate-500 mt-1 hidden lg:block uppercase tracking-widest">Scotland Domestic SEO Strategy</div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-2 no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
              activeSection === item.id 
                ? 'bg-brand text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                : 'text-slate-400 hover:bg-slate-900 hover:text-white'
            }`}
          >
            <div className={`${activeSection === item.id ? 'text-slate-950' : 'text-slate-400 group-hover:text-brand'}`}>
              {item.icon}
            </div>
            <span className="text-sm font-medium hidden lg:block">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="px-6 pt-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-slate-950 font-bold text-xs uppercase">D</div>
          <div className="hidden lg:block">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Donovan</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter mt-1 leading-none">Head of delivery & Owner</div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
