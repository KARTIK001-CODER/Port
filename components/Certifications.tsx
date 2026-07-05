'use client';

import { motion } from 'framer-motion';

interface Certification {
  title: string;
  year: string;
  org: string;
  link?: string;
  image?: string;
}

const certifications: Certification[] = [
  { 
    title: 'GirlScript Summer of Code - Open Source', 
    year: '2026', 
    org: 'GirlScript Foundation',
  },
  { 
    title: 'Winter of Code - Open Source Contribution', 
    year: '2026', 
    org: 'Elite Coders',
    link: 'https://app.truscholar.io/profile?credId=69bf58eb34fff71acf10eb4d'
  },
  { 
    title: 'Prompt Design in Vertex AI', 
    year: '2026', 
    org: 'Google Cloud',
    link: 'https://www.credly.com/badges/fd22f465-2de0-4f7b-9c58-ebf3aa77bf5f/public_url',
    image: 'https://images.credly.com/images/cef82b2e-970a-4318-8e59-c3e26b7f5c19/twitter_thumb_201604_image.png'
  },
  { 
    title: 'Google AI Essentials V1', 
    year: '2026', 
    org: 'Google / Coursera',
    link: 'https://www.credly.com/badges/9d211fa3-d570-449b-8aa8-7c93fb44a644/public_url',
    image: 'https://images.credly.com/images/ea3eec65-ddad-4242-9c59-1defac0fa2d9/twitter_thumb_201604_image.png'
  }
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
              {certifications.map((cert, j) => {
                const CardComponent = cert.link ? 'a' : 'div';
                const cardProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};
                
                return (
                  <div key={`${i}-${j}`} className="flex items-center gap-8">
                    <CardComponent 
                      {...cardProps}
                      className={`card-brutal px-6 py-4 flex items-center gap-4 bg-white hover:bg-[#FFD700] transition-colors group ${cert.link ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      {cert.image && (
                        <div className="w-12 h-12 flex-shrink-0 border-2 border-[#1A1A1A] overflow-hidden bg-white">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex flex-col justify-center">
                        <span className="text-[11px] font-black tracking-wider uppercase text-[#7A7A7A] mb-1 group-hover:text-[#1A1A1A]">
                          {cert.org} • {cert.year}
                        </span>
                        <span className="text-[16px] font-bold text-[#1A1A1A]">
                          {cert.title}
                        </span>
                      </div>
                    </CardComponent>
                    <span className="text-[#1A1A1A] text-2xl">✦</span>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
