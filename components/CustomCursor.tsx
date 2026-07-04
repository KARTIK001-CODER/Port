'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const glowSpringConfig = { damping: 20, stiffness: 100, mass: 1 };

  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-hover]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove]);

  return (
    <>
      {/* Large ambient glow — follows cursor with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden lg:block"
        style={{
          x: glowX,
          y: glowY,
          width: 400,
          height: 400,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 0.07 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            background: isHovering
              ? 'radial-gradient(circle, rgba(67, 198, 172, 0.5) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(79, 143, 230, 0.4) 0%, transparent 70%)',
            transition: 'background 0.5s ease',
          }}
        />
      </motion.div>

      {/* Small cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-300"
          style={{
            border: isHovering
              ? '1.5px solid rgba(67, 198, 172, 0.4)'
              : '1.5px solid rgba(79, 143, 230, 0.2)',
            background: isHovering
              ? 'rgba(67, 198, 172, 0.06)'
              : 'transparent',
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'linear-gradient(135deg, #4F8FE6, #43C6AC)',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isVisible ? (isHovering ? 0 : 0.7) : 0,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
      />
    </>
  );
}
