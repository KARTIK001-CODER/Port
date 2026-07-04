'use client';

import { motion } from 'framer-motion';

const certifications = [
  { title: 'AWS Certified Solutions Architect', year: '2023', org: 'Amazon Web Services' },
  { title: 'Meta Front-End Developer', year: '2023', org: 'Meta / Coursera' },
  { title: 'MongoDB Node.js Developer', year: '2024', org: 'MongoDB' },
  { title: 'Google Data Analytics Professional', year: '2024', org: 'Google' },
  { title: 'Full Stack Web Development', year: '2022', org: 'FreeCodeCamp' },
  { title: 'AI for Everyone', year: '2023', org: 'DeepLearning.AI' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 md:py-16 border-y-3 border-[#1A1A1A] bg-[#A8C8E8] overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `
          linear-gradient(#1A1A1A 1px, transparent 1px),
          linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px',
      }} />

      <div className="relative z-10 flex flex-col mb-10">
        <div className="container-premium text-center">
          <span className="section-label bg-white px-4 py-2 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_#1A1A1A]">
            Milestones
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#1A1A1A] mt-4 mb-2 uppercase">
            Certifications & Badges
          </h2>
        </div>
      </div>

      <div className="overflow-hidden py-4 relative z-10">
        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              {certifications.map((cert, j) => (
                <div key={`${i}-${j}`} className="flex items-center gap-8">
                  <div className="card-brutal px-6 py-4 flex flex-col justify-center bg-white cursor-default hover:bg-[#FFD700] transition-colors group">
                    <span className="text-[11px] font-black tracking-wider uppercase text-[#7A7A7A] mb-1 group-hover:text-[#1A1A1A]">
                      {cert.org} • {cert.year}
                    </span>
                    <span className="text-[16px] font-bold text-[#1A1A1A]">
                      {cert.title}
                    </span>
                  </div>
                  <span className="text-[#1A1A1A] text-2xl">✦</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
