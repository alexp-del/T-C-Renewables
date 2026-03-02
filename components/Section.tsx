import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionProps } from '../types';

export const Section: React.FC<SectionProps> = ({ id, children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section 
      id={id} 
      ref={ref}
      className={`min-h-screen w-full py-20 px-4 md:px-8 lg:px-16 flex flex-col justify-center relative border-b border-slate-900/50 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto w-full"
      >
        {children}
      </motion.div>
    </section>
  );
};