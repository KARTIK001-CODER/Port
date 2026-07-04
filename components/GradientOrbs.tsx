'use client';

import { motion } from 'framer-motion';

export default function GradientOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Primary blue orb — top right */}
      <motion.div
        className="blob-1 absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, rgba(79, 143, 230, 0.6) 0%, rgba(79, 143, 230, 0) 70%)',
        }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Teal orb — bottom left */}
      <motion.div
        className="blob-2 absolute -bottom-[300px] -left-[200px] w-[800px] h-[800px] rounded-full opacity-[0.05]"
        style={{
          background: 'radial-gradient(circle, rgba(67, 198, 172, 0.5) 0%, rgba(67, 198, 172, 0) 70%)',
        }}
        animate={{
          x: [0, -40, 60, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Accent purple-blue orb — center */}
      <motion.div
        className="blob-3 absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(91, 155, 213, 0.5) 0%, rgba(91, 155, 213, 0) 70%)',
        }}
        animate={{
          x: [0, 30, -50, 20, 0],
          y: [0, -60, 20, -30, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Small accent orb — mid right */}
      <motion.div
        className="absolute top-[60%] right-[10%] w-[300px] h-[300px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(79, 143, 230, 0.4) 0%, rgba(79, 143, 230, 0) 70%)',
        }}
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
