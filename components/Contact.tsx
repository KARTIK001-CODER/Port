'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_WEB3FORMS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const socials = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/kartik-choudhary-2b6806313/', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/karTIK001-CODER', 
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> 
    },
    { 
      name: 'Twitter', 
      href: '#', 
      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> 
    },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-36 px-6 overflow-clip">
      <div className="container-premium relative z-10">
        {/* Contact Split Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row border-3 border-[#1A1A1A] bg-white overflow-hidden" style={{ boxShadow: '8px 8px 0px #1A1A1A' }}>
            {/* Left side: Info */}
            <div className="lg:w-5/12 bg-[#FFD700] p-8 md:p-12 lg:p-14 border-b-3 lg:border-b-0 lg:border-r-3 border-[#1A1A1A] flex flex-col justify-between relative">
              <div className="relative z-10">
                <span className="section-label mb-6 !text-[#1A1A1A]">Get in Touch</span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1A] leading-[1.05] mb-6">
                  LET&apos;S BUILD
                  <br />
                  <span className="highlight-box !bg-white text-[#1A1A1A] inline-block mt-2" style={{ transform: 'rotate(-2deg)' }}>SOMETHING</span>
                  <br />
                  GREAT.
                </h2>
                <p className="text-[#1A1A1A] font-medium text-base md:text-lg max-w-sm mb-10">
                  Have a project in mind or just want to connect? I&apos;m currently available for new opportunities.
                </p>
                
                <div className="space-y-4">
                  <p className="text-[12px] font-black tracking-wider uppercase text-[#1A1A1A]">Direct Email</p>
                  <a href="mailto:0011kartikchoudhary@gmail.com" className="text-lg lg:text-xl font-bold text-[#1A1A1A] underline-yellow hover:text-[#FF4D8D] transition-colors duration-200 inline-block break-all">
                    0011kartikchoudhary@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Abstract decorative shapes */}
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#FF4D8D] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute top-10 -left-10 w-32 h-32 bg-white rounded-full opacity-30 blur-xl"></div>
              
              <div className="mt-16 pt-8 border-t-3 border-[#1A1A1A]/20 relative z-10">
                <p className="text-[12px] font-black tracking-wider uppercase text-[#1A1A1A] mb-4">Connect</p>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: -2, y: -2, boxShadow: '4px 4px 0px #1A1A1A' }}
                      className="w-12 h-12 border-3 border-[#1A1A1A] bg-white flex items-center justify-center text-[#1A1A1A] font-black text-sm transition-all duration-200"
                      style={{ boxShadow: '2px 2px 0px #1A1A1A' }}
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="lg:w-7/12 p-8 md:p-12 lg:p-14 bg-white relative">
              {/* Form abstract shape */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBF6E9] rounded-bl-full -z-0 opacity-50"></div>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-[12px] font-black tracking-wider uppercase text-[#1A1A1A] mb-2">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Doe"
                      suppressHydrationWarning
                      className={`w-full px-4 py-3.5 border-3 border-[#1A1A1A] text-[15px] font-medium text-[#1A1A1A] outline-none bg-[#FBF6E9] transition-all duration-200 placeholder:text-[#B8B8B8] ${
                        focusedField === 'name' ? 'shadow-[4px_4px_0px_#FFD700] translate-x-[-2px] translate-y-[-2px]' : 'shadow-[3px_3px_0px_#1A1A1A]'
                      }`}
                    />
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[12px] font-black tracking-wider uppercase text-[#1A1A1A] mb-2">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@example.com"
                      suppressHydrationWarning
                      className={`w-full px-4 py-3.5 border-3 border-[#1A1A1A] text-[15px] font-medium text-[#1A1A1A] outline-none bg-[#FBF6E9] transition-all duration-200 placeholder:text-[#B8B8B8] ${
                        focusedField === 'email' ? 'shadow-[4px_4px_0px_#FFD700] translate-x-[-2px] translate-y-[-2px]' : 'shadow-[3px_3px_0px_#1A1A1A]'
                      }`}
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="contact-message" className="block text-[12px] font-black tracking-wider uppercase text-[#1A1A1A] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project..."
                    suppressHydrationWarning
                    className={`w-full px-4 py-3.5 border-3 border-[#1A1A1A] text-[15px] font-medium text-[#1A1A1A] outline-none resize-none bg-[#FBF6E9] transition-all duration-200 placeholder:text-[#B8B8B8] ${
                      focusedField === 'message' ? 'shadow-[4px_4px_0px_#FFD700] translate-x-[-2px] translate-y-[-2px]' : 'shadow-[3px_3px_0px_#1A1A1A]'
                    }`}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  suppressHydrationWarning
                  className={`btn-primary w-full !py-4 !text-[15px] !font-black mt-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''} ${status === 'success' ? '!bg-green-500' : ''} ${status === 'error' ? '!bg-red-500 text-white' : ''}`}
                >
                  <span>
                    {status === 'loading' ? 'Sending...' : 
                     status === 'success' ? 'Message Sent! 🎉' : 
                     status === 'error' ? 'Failed to Send' : 
                     'Send Message'}
                  </span>
                  {status === 'idle' && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="container-premium mt-24 relative z-10">
        <div className="border-t-3 border-[#1A1A1A] pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 bg-[#FFD700] border-2 border-[#1A1A1A] flex items-center justify-center"
                style={{ boxShadow: '2px 2px 0px #1A1A1A' }}
              >
                <span className="text-[#1A1A1A] text-[10px] font-black">K</span>
              </div>
              <p className="text-[12px] text-[#7A7A7A] font-bold tracking-wider uppercase">
                © {new Date().getFullYear()} Kartik Choudhary
              </p>
            </div>
            <p className="text-[12px] text-[#7A7A7A] font-bold tracking-wider uppercase">
              Crafted with ♥ using Next.js & Tailwind
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
