'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-[#FFD700] border-b-2 border-[#1A1A1A] origin-left z-[101]"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className={`max-w-6xl mx-auto px-4 md:px-8 transition-all duration-500 ${
          isScrolled
            ? 'mx-3 md:mx-6 lg:mx-auto bg-[#FBF6E9]/95 backdrop-blur-sm border-3 border-[#1A1A1A] px-6 py-2'
            : 'py-2'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#" className="group flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD700] border-3 border-[#1A1A1A] flex items-center justify-center transition-all duration-300 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px] group-hover:shadow-[4px_4px_0px_#1A1A1A]"
                style={{ boxShadow: '3px 3px 0px #1A1A1A' }}
              >
                <span className="text-[#1A1A1A] text-lg font-black font-display">K</span>
              </div>
              <span className="text-lg font-black tracking-tight text-[#1A1A1A] font-display uppercase">
                Kartik<span className="text-[#FF4D8D]">.</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] font-bold tracking-wider uppercase text-[#1A1A1A] hover:bg-[#FFD700] transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="btn-primary !py-2.5 !px-5 !text-[12px]"
              >
                <span>Let&apos;s Talk</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 border-2 border-[#1A1A1A] bg-[#FFD700] flex items-center justify-center"
              style={{ boxShadow: '2px 2px 0px #1A1A1A' }}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-[2px] bg-[#1A1A1A] block origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-3.5 h-[2px] bg-[#1A1A1A] block"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                  className="w-5 h-[2px] bg-[#1A1A1A] block origin-center"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] md:hidden"
          >
            <div className="absolute inset-0 bg-[#FBF6E9]" />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="relative flex flex-col items-center justify-center h-full gap-2"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                  className="text-3xl font-black text-[#1A1A1A] py-3 px-6 uppercase tracking-wider hover:bg-[#FFD700] transition-colors duration-200"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="btn-primary mt-6 !text-lg"
              >
                <span>Let&apos;s Talk</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
