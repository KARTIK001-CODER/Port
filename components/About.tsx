'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const stats = [
    { number: '10+', label: 'Projects Built', icon: '📦' },
    { number: '5+', label: 'Technologies', icon: '⚡' },
    { number: '1+', label: 'Years Building', icon: '🚀' },
  ];

  return (
    <section id="about" className="relative py-24 md:py-36 px-6 overflow-clip">
      <div className="container-premium relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-label">About</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1A] leading-[1.05]">
            A LITTLE BIT
            <br />
            <span className="highlight-box" style={{ transform: 'rotate(-1deg)' }}>ABOUT</span>{' '}
            <span className="text-[#4A4A4A]">ME</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 order-2 lg:order-1"
          >
            <p className="text-[#4A4A4A] text-lg md:text-xl leading-[1.85] mb-6">
              I&apos;m a passionate developer who thrives at the intersection of{' '}
              <span className="font-bold underline-yellow text-[#1A1A1A]">clean code</span> and{' '}
              <span className="font-bold underline-yellow text-[#1A1A1A]">thoughtful design</span>.
              Every project I build is an opportunity to create something
              meaningful — software that doesn&apos;t just work, but{' '}
              <span className="font-bold text-[#1A1A1A]">feels right</span>.
            </p>

            <p className="text-[#7A7A7A] text-base leading-[1.85] mb-10">
              Currently focused on mastering the MERN stack and exploring the
              depths of Data Structures, Algorithms, and AI to build more efficient,
              scalable software that makes a real impact.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 md:gap-10">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="card-brutal px-5 py-4 text-center hover:bg-[#FFD700] cursor-default"
                    style={{ boxShadow: '3px 3px 0px #1A1A1A' }}
                  >
                    <p className="text-3xl md:text-4xl font-black font-display text-[#1A1A1A] mb-1">
                      {stat.number}
                    </p>
                    <p className="text-[11px] text-[#7A7A7A] tracking-wider uppercase font-bold group-hover:text-[#1A1A1A] transition-colors">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo / Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true }}
            className="relative w-full lg:w-[42%] order-1 lg:order-2"
          >
            <div
              className="relative aspect-[4/5] bg-[#F5EDD6] border-3 border-[#1A1A1A] overflow-hidden"
              style={{ boxShadow: '6px 6px 0px #1A1A1A' }}
            >
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-[0.06]" style={{
                backgroundImage: `
                  linear-gradient(#1A1A1A 1px, transparent 1px),
                  linear-gradient(90deg, #1A1A1A 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px',
              }} />

              {/* Profile Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/about.png"
                  alt="Kartik"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              </div>

              {/* Badge — bottom left */}
              <div
                className="absolute bottom-6 left-6 px-4 py-2 bg-white border-2 border-[#1A1A1A] flex items-center gap-2"
                style={{ boxShadow: '2px 2px 0px #1A1A1A' }}
              >
                <span className="text-[12px] font-bold text-[#1A1A1A]">Based in India</span>
                <span>🇮🇳</span>
              </div>

              {/* Badge — top right */}
              <div
                className="absolute top-6 right-6 px-4 py-2 bg-[#FF4D8D] border-2 border-[#1A1A1A] text-white"
                style={{ boxShadow: '2px 2px 0px #1A1A1A' }}
              >
                <span className="text-[11px] font-bold tracking-wider uppercase">Full Stack Dev</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
