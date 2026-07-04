'use client';

import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Yellow square — top left */}
      <motion.div
        className="shape-float absolute top-[8%] left-[5%]"
        style={{ '--rotation': '-15deg' } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="w-16 h-16 md:w-20 md:h-20 border-3 border-[#1A1A1A]"
          style={{
            background: '#F5E6A3',
            transform: 'rotate(-15deg)',
            boxShadow: '3px 3px 0px #1A1A1A',
          }}
        />
      </motion.div>

      {/* Small yellow square — top left offset */}
      <motion.div
        className="shape-drift absolute top-[5%] left-[3%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="w-8 h-8 md:w-10 md:h-10 border-2 border-[#1A1A1A]"
          style={{
            background: '#FFD700',
            transform: 'rotate(25deg)',
            boxShadow: '2px 2px 0px #1A1A1A',
          }}
        />
      </motion.div>

      {/* Pink square — right side */}
      <motion.div
        className="shape-drift absolute top-[15%] right-[4%]"
        style={{ '--rotation': '12deg' } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="w-14 h-14 md:w-16 md:h-16 border-2 border-[#1A1A1A]"
          style={{
            background: '#FFB3CC',
            transform: 'rotate(12deg)',
            boxShadow: '2px 2px 0px #1A1A1A',
          }}
        />
      </motion.div>

      {/* Blue diamond — bottom left */}
      <motion.div
        className="shape-float absolute bottom-[25%] left-[8%]"
        style={{ '--rotation': '45deg' } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="w-14 h-14 md:w-16 md:h-16 border-2 border-[#1A1A1A]"
          style={{
            background: '#A8C8E8',
            transform: 'rotate(45deg)',
            boxShadow: '2px 2px 0px #1A1A1A',
          }}
        />
      </motion.div>

      {/* Yellow tilted rectangle — bottom center-right */}
      <motion.div
        className="shape-drift absolute bottom-[20%] right-[15%]"
        style={{ '--rotation': '-8deg' } as React.CSSProperties}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="w-20 h-10 md:w-24 md:h-12 border-2 border-[#1A1A1A]"
          style={{
            background: '#F5E6A3',
            transform: 'rotate(-8deg)',
            boxShadow: '2px 2px 0px #1A1A1A',
          }}
        />
      </motion.div>

      {/* Small lavender circle — mid right */}
      <motion.div
        className="shape-float absolute top-[50%] right-[6%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 1, ease: [0.23, 1, 0.32, 1] }}
      >
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#1A1A1A]"
          style={{
            background: '#C4B5E0',
            boxShadow: '2px 2px 0px #1A1A1A',
          }}
        />
      </motion.div>
    </div>
  );
}
