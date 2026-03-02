import React from 'react';
import { motion } from 'framer-motion';
import { StatProps } from '../types';

export const Heading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent tracking-tight ${className}`}>
    {children}
  </h2>
);

export const SubHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h3 className={`text-xl md:text-2xl font-bold mb-4 text-brand flex items-center gap-2 ${className}`}>
    {children}
  </h3>
);

export const Paragraph: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-4xl ${className}`}>
    {children}
  </p>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; title?: string; icon?: React.ReactNode }> = ({ children, className = '', title, icon }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
    className={`bg-slate-900/40 border border-slate-800/60 p-8 rounded-2xl backdrop-blur-md transition-all duration-300 ${className}`}
  >
    {title && (
      <div className="flex items-center gap-4 mb-6">
        {icon && (
          <div className="p-3 rounded-lg bg-slate-800/50 text-brand border border-slate-700/50 shadow-inner">
            {icon}
          </div>
        )}
        <h4 className="text-xl font-bold text-white tracking-wide">{title}</h4>
      </div>
    )}
    <div className="text-slate-300 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

export const GlowCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-0.5 bg-gradient-to-r from-brand to-teal-600 rounded-2xl opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
    <div className="relative h-full bg-slate-950/90 border border-slate-800 p-8 rounded-2xl backdrop-blur-xl">
      {children}
    </div>
  </div>
);

export const StatCard: React.FC<StatProps> = ({ label, value, subtext, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800/60 relative overflow-hidden group hover:border-brand/30 transition-colors"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
      <div className="w-16 h-16 rounded-full bg-brand blur-2xl"></div>
    </div>
    <div className="relative z-10">
      <div className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter">{value}</div>
      <div className="text-sm font-bold uppercase tracking-widest text-brand mb-3">{label}</div>
      {subtext && (
        <div className="text-slate-500 text-xs font-medium border-t border-slate-800 pt-3 mt-1 flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-brand"></span>
          {subtext}
        </div>
      )}
    </div>
  </motion.div>
);

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.span 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand/10 text-brand text-xs font-bold uppercase tracking-widest rounded-full border border-brand/20 mb-6 shadow-[0_0_20px_rgba(0,206,209,0.1)]"
  >
    <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
    {children}
  </motion.span>
);

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50 }
  }
};