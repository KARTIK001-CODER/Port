'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "LinkForge",
    category: "Smart Link Management SaaS",
    description: "Production-ready Smart Link Management SaaS with 42+ REST APIs for intelligent URL redirection and real-time analytics. Architected an event-driven analytics pipeline using Redis and BullMQ, reducing URL redirect latency by 30% and backend processing time by 35%.",
    tech: ["Redis", "BullMQ", "React.js", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    github: "https://github.com/KARTIK001-CODER/LinkForge",
    demo: "https://link-forge-frontend-blue.vercel.app/",
    accentColor: "#3B82F6",
    emoji: "🚀",
    image: "/linkforge-ss.png",
    metrics: ["↓ 30% Latency", "42+ REST APIs"],
  },
  {
    title: "Learning Management System",
    category: "AI-assisted LMS",
    description: "AI-assisted Learning Management System with role-based portals and 20+ REST APIs. Developed a unified platform for educators and students, reducing API response time by 25% and improving course management efficiency by 30% through optimized MongoDB queries and scalable architecture.",
    tech: ["MongoDB", "TypeScript", "React.js", "Node.js", "Tailwind CSS"],
    github: "https://github.com/kalviumcommunity/S64_Kartik_Capstone_LMS",
    demo: "https://s64-kartik-capstone-lms.vercel.app/",
    accentColor: "#10B981",
    emoji: "🎓",
    image: "/lms-ss.png",
    metrics: ["↓ 25% Response Time", "↑ 30% Efficiency"],
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`relative flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-14 items-center`}
    >
      {/* Project visual */}
      <div className="w-full lg:w-[55%] group">
        <div
          className="relative aspect-[16/10] border-3 border-[#1A1A1A] overflow-hidden transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_#1A1A1A]"
          style={{
            backgroundColor: project.accentColor + '30',
            boxShadow: '5px 5px 0px #1A1A1A',
          }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: `
              linear-gradient(#1A1A1A 1px, transparent 1px),
              linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }} />

          {/* Center content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {'image' in project && project.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-[88%] h-[82%] object-cover object-top border-3 border-[#1A1A1A] shadow-[6px_6px_0px_rgba(26,26,26,0.2)] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[8px_8px_0px_rgba(26,26,26,0.3)] bg-white" 
              />
            ) : (
              <div
                className="w-24 h-24 border-3 border-[#1A1A1A] flex items-center justify-center bg-white"
                style={{
                  boxShadow: '4px 4px 0px #1A1A1A',
                  transform: `rotate(${index % 2 === 0 ? '-3' : '3'}deg)`,
                }}
              >
                <span className="text-4xl">{project.emoji}</span>
              </div>
            )}
          </div>

          {/* Floating metrics pills */}
          <motion.div
            className="absolute top-[12%] right-[8%] px-3 py-1.5 bg-white border-2 border-[#1A1A1A] text-[11px] font-bold tracking-wider text-[#1A1A1A] z-10"
            style={{ boxShadow: '2px 2px 0px #1A1A1A' }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {'metrics' in project ? project.metrics[0] : project.tech[0]}
          </motion.div>
          <motion.div
            className="absolute bottom-[15%] left-[5%] px-3 py-1.5 bg-[#1A1A1A] border-2 border-[#1A1A1A] text-[11px] font-bold tracking-wider text-white z-10"
            style={{ boxShadow: '2px 2px 0px rgba(0,0,0,0.3)' }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            {'metrics' in project ? project.metrics[1] : project.tech[1]}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        style={{ y }}
        className="w-full lg:w-[45%] flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-3 py-1 border-2 border-[#1A1A1A] text-[11px] font-black tracking-[0.15em] uppercase text-[#1A1A1A]"
            style={{ backgroundColor: project.accentColor, boxShadow: '2px 2px 0px #1A1A1A' }}
          >
            0{index + 1}
          </span>
          <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-[#7A7A7A]">
            {project.category}
          </span>
        </div>

        <h3 className="font-display text-3xl md:text-4xl lg:text-[2.8rem] text-[#1A1A1A] leading-[1.05] mb-5">
          {project.title.toUpperCase()}
        </h3>

        <p className="text-[#4A4A4A] text-base md:text-lg leading-[1.8] mb-6">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span key={t} className="tag-chip">
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <a href={project.demo} className="btn-primary !py-3 !px-6 !text-[12px]">
            <span>Live Demo</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <a href={project.github} className="btn-outline !py-3 !px-6 !text-[12px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            <span>Source</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-36 px-6 overflow-clip">
      {/* Marquee divider */}
      <div className="border-y-3 border-[#1A1A1A] py-4 mb-20 overflow-hidden bg-[#FFD700]">
        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 pr-8">
              {['PROJECTS', '★', 'SELECTED WORK', '★', 'PORTFOLIO', '★', 'CASE STUDIES', '★'].map((text, j) => (
                <span key={j} className="text-[14px] font-black tracking-[0.2em] uppercase text-[#1A1A1A]">
                  {text}
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container-premium relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="section-label justify-center">Selected Work</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1A] leading-[1.05]">
            PROJECTS I&apos;VE{' '}
            <span className="highlight-box" style={{ transform: 'rotate(-1deg)' }}>CRAFTED</span>
          </h2>
          <p className="mt-6 text-[#7A7A7A] text-base max-w-lg mx-auto leading-relaxed">
            Each project is a story of problem-solving, design thinking, and clean execution
          </p>
        </motion.div>

        {/* Projects list */}
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
