'use client';
import { motion } from "framer-motion";

export default function AnimatedSection(
    { className, children }:
    { className: string, children: React.ReactNode }
) {
  return (
    <motion.section 
    className={className}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}