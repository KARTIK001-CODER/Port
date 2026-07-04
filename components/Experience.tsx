'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    period: "2025 — Present",
    title: "Full Stack Developer",
    company: "Building Products",
    description: "Crafting modern web applications with React, Next.js, and Node.js. Focused on creating premium user experiences with clean, scalable code.",
    tags: ["React", "Next.js", "Node.js", "MongoDB"],
    highlight: true,
  },
  {
    period: "2024 — 2025",
    title: "Frontend Developer",
    company: "Learning & Building",
    description: "Deep-dived into frontend development, mastering React ecosystem, state management, and modern CSS. Built multiple production-ready projects.",
    tags: ["React", "TailwindCSS", "JavaScript", "Git"],
    highlight: false,
  },
  {
    period: "2024",
    title: "Programming Foundations",
    company: "Self-Taught Journey",
    description: "Started the coding journey with JavaScript, HTML/CSS, and foundational CS concepts. Fell in love with building things for the web.",
    tags: ["JavaScript", "HTML/CSS", "DSA", "Python"],
    highlight: false,
  },
];

export default function Experience() {
  return (
    <section id="journey" className="relative py-24 md:py-36 px-6 overflow-clip">
      <div className="container-premium relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label justify-center">Journey</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1A] leading-[1.05]">
            MY{' '}
            <span className="highlight-box" style={{ transform: 'rotate(1deg)' }}>PATH</span>{' '}
            <span className="text-[#4A4A4A]">SO FAR</span>
          </h2>
          <p className="mt-6 text-[#7A7A7A] text-base max-w-lg mx-auto leading-relaxed">
            Every step has been a lesson in building better, thinking deeper
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-[#1A1A1A]" />

          {/* Experience items */}
          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-5 h-5 border-3 border-[#1A1A1A] ${
                      exp.highlight ? 'bg-[#FFD700]' : 'bg-white'
                    }`}
                    style={{ transform: 'rotate(45deg)' }}
                  />
                </div>

                {/* Period label */}
                <div className={`w-full md:w-[calc(50%-32px)] ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } pl-16 md:pl-0`}>
                  <span
                    className="inline-block px-3 py-1 border-2 border-[#1A1A1A] text-[12px] font-black tracking-wider text-[#1A1A1A]"
                    style={{
                      backgroundColor: exp.highlight ? '#FFD700' : '#F5EDD6',
                      boxShadow: '2px 2px 0px #1A1A1A',
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-32px)] pl-16 md:pl-0`}>
                  <div
                    className={`p-6 border-3 border-[#1A1A1A] bg-white transition-all duration-300 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_#1A1A1A]`}
                    style={{ boxShadow: '4px 4px 0px #1A1A1A' }}
                  >
                    {exp.highlight && (
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[#1A1A1A] bg-[#FFD700] text-[10px] font-black tracking-wider uppercase text-[#1A1A1A] mb-3"
                        style={{ boxShadow: '2px 2px 0px #1A1A1A' }}
                      >
                        <span className="w-2 h-2 rounded-full bg-[#1A1A1A] animate-pulse" />
                        Current
                      </span>
                    )}

                    <h3 className="text-xl font-black text-[#1A1A1A] mb-1 font-display">{exp.title}</h3>
                    <p className="text-[13px] font-bold text-[#7A7A7A] mb-3 uppercase tracking-wider">{exp.company}</p>
                    <p className="text-[#4A4A4A] text-sm leading-[1.7] mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="tag-chip !text-[10px] !py-1 !px-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
