'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    color: '#A8C8E8',
    skills: [
      { name: 'Java', level: 'Intermediate' },
      { name: 'Python', level: 'Advanced' },
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'HTML5 / CSS3', level: 'Advanced' },
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#FFD700',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Intermediate' },
      { name: 'Vite', level: 'Advanced' },
      { name: 'Responsive Design', level: 'Advanced' },
    ]
  },
  {
    title: 'Backend',
    icon: '⚡',
    color: '#FF4D8D',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'RESTful APIs', level: 'Advanced' },
      { name: 'WebSockets', level: 'Intermediate' },
      { name: 'JWT Auth', level: 'Intermediate' },
    ]
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: '#4ADE80',
    skills: [
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Intermediate' },
      { name: 'Mongoose ODM', level: 'Advanced' },
      { name: 'Database Design', level: 'Intermediate' },
    ]
  },
  {
    title: 'AI & LLMs',
    icon: '🤖',
    color: '#A78BFA',
    skills: [
      { name: 'LLMs & Agents', level: 'Advanced' },
      { name: 'RAG & Vector DBs', level: 'Advanced' },
      { name: 'Prompt Engineering', level: 'Advanced' },
      { name: 'Semantic Search', level: 'Intermediate' },
      { name: 'MCP & Functions', level: 'Intermediate' },
    ]
  },
  {
    title: 'AI Frameworks',
    icon: '🧩',
    color: '#F472B6',
    skills: [
      { name: 'LangChain', level: 'Advanced' },
      { name: 'OpenAI & Gemini', level: 'Advanced' },
      { name: 'Groq API', level: 'Intermediate' },
      { name: 'HF Transformers', level: 'Intermediate' },
      { name: 'Ollama', level: 'Learning' },
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    color: '#38BDF8',
    skills: [
      { name: 'Docker', level: 'Intermediate' },
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Vercel & Render', level: 'Advanced' },
      { name: 'GitHub Actions', level: 'Intermediate' },
    ]
  },
  {
    title: 'Tools',
    icon: '🛠️',
    color: '#FBBF24',
    skills: [
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' },
      { name: 'npm', level: 'Advanced' },
    ]
  },
  {
    title: 'Engineering',
    icon: '🏗️',
    color: '#94A3B8',
    skills: [
      { name: 'DSA', level: 'Advanced' },
      { name: 'OOP', level: 'Advanced' },
      { name: 'System Design', level: 'Intermediate' },
      { name: 'Design Patterns', level: 'Intermediate' },
      { name: 'Auth & Security', level: 'Intermediate' },
    ]
  }
];

function SkillPill({ name, level, delay }: { name: string; level: string; delay: number }) {
  const levelColors: Record<string, string> = {
    Advanced: '#FFD700',
    Intermediate: '#FF4D8D',
    Learning: '#A8C8E8',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      className="group flex items-center justify-between px-4 py-3 border-2 border-[#1A1A1A] bg-white hover:bg-[#FBF6E9] transition-all duration-200 cursor-default hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[3px_3px_0px_#1A1A1A]"
    >
      <span className="text-[14px] font-bold text-[#1A1A1A]">
        {name}
      </span>
      <span
        className="text-[10px] font-black tracking-wider uppercase px-2 py-1 border-2 border-[#1A1A1A] text-[#1A1A1A]"
        style={{ backgroundColor: levelColors[level] || '#E0E0E0' }}
      >
        {level}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-36 px-6 overflow-clip">
      <div className="container-premium relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-label justify-center">Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-[#1A1A1A] leading-[1.05]">
            TOOLS I{' '}
            <span className="highlight-box" style={{ transform: 'rotate(1deg)' }}>WORK</span>{' '}
            <span className="text-[#4A4A4A]">WITH</span>
          </h2>
          <p className="mt-6 text-[#7A7A7A] text-base max-w-lg mx-auto leading-relaxed">
            A curated set of technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: catIdx * 0.15, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="border-3 border-[#1A1A1A] bg-white"
              style={{ boxShadow: '5px 5px 0px #1A1A1A' }}
            >
              {/* Category header */}
              <div
                className="flex items-center gap-3 px-6 py-4 border-b-3 border-[#1A1A1A]"
                style={{ backgroundColor: category.color }}
              >
                <span className="text-lg">{category.icon}</span>
                <h3 className="text-[15px] font-black text-[#1A1A1A] tracking-wider uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="p-4 space-y-2">
                {category.skills.map((skill, i) => (
                  <SkillPill
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.1 + i * 0.04}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
