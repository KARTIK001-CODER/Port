'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-start pt-32 md:pt-40 text-center px-6 overflow-clip">
      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-4xl"
      >
        {/* Status badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="badge-pill">
            <span className="text-[#FF4D8D]">✦</span>
            Available for Opportunities
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] mb-8 text-[#1A1A1A]"
        >
          FULL STACK
          <br />
          <span className="inline-block">
            <span className="highlight-box" style={{ transform: 'rotate(-2deg)' }}>
              DEVELOPER
            </span>
          </span>
          <br />
          <span className="text-[#4A4A4A]">&amp; BUILDER</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="max-w-xl mx-auto text-[#4A4A4A] text-base md:text-lg mb-12 leading-[1.8]"
        >
          Hi, I&apos;m <span className="font-bold underline-yellow text-[#1A1A1A]">Kartik</span> — a passionate developer
          who builds modern web apps with clean code, thoughtful design,
          and a focus on <span className="font-bold text-[#1A1A1A]">real impact</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="btn-primary">
            <span>🔗</span>
            <span>View My Work</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#about" className="btn-secondary">
            <span>⚡</span>
            <span>About Me</span>
          </a>
        </motion.div>

        {/* Built with */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex items-center justify-center gap-4 flex-wrap"
        >
          <span className="text-[12px] tracking-[0.2em] uppercase font-bold text-[#7A7A7A]">Built with</span>
          <div className="flex items-center gap-3">
            {['Next.js', 'React', 'TypeScript', 'Tailwind'].map((tech, i) => (
              <span
                key={tech}
                className="tag-chip !text-[11px] !py-1 !px-3"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>


    </section>
  );
}
