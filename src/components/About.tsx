'use client';

import { motion } from 'framer-motion';

const skills = {
  Languages: ['Python', 'Java', 'C++', 'JavaScript'],
  Databases: ['MySQL', 'MongoDB'],
  Tools: ['Excel', 'Docker', 'Git', 'Colab', 'VS Code', 'Power BI'],
};

const experience = [
  {
    title: 'Summer Research Intern',
    period: 'Jun 2025 - Aug 2025',
    description: [
      'Developed an Automatic Multiple Question generation from the given images.',
      'Implemented the ML techniques such as CV, NLP, and DL.',
      'End-to-end ML workflow to train the model, ensuring accurate, relevant, and diverse question generation across topics.'
    ],
  },
];

const education = [
  {
    degree: 'B.Tech in Computer and Communication Engineering',
    institution: 'NMAM Institute of Technology',
    period: '2022 - 2026',
  },
  {
    degree: 'Pre-University Education',
    institution: 'Canara Pre University College',
    period: '2020 - 2022',
  },
];

export default function About() {
  return (
    <section className="relative z-20 bg-black/40 backdrop-blur-xl px-6 md:px-20 py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-gray-500 font-mono">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mt-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Solving real-world problems.
          </h3>
          <p className="text-gray-400 mt-4 max-w-3xl text-base md:text-lg">
            Final-year B.Tech student proficient in Python and Java with hands-on experience in building machine learning applications and end-to-end ML pipelines involving data preprocessing, model training, and evaluation, with working knowledge of Excel, MySQL, and Power BI.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              Experience
            </h4>
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-500/30 pl-4 ml-2">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h5 className="text-lg font-semibold text-white">{exp.title}</h5>
                  <span className="text-xs font-mono text-gray-400">{exp.period}</span>
                </div>
                <ul className="text-gray-400 mt-2 text-sm md:text-base leading-relaxed list-disc list-inside space-y-1">
                  {exp.description.map((bullet, idx) => (
                    <li key={idx} className="pl-1"><span className="text-gray-300">{bullet}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Education
            </h4>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h5 className="text-base font-semibold text-white leading-tight">{edu.degree}</h5>
                  <p className="text-xs text-gray-500 mt-1">{edu.institution}</p>
                  <p className="text-xs font-mono text-gray-400 mt-1">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills (Full Width below) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              Skills & Tools
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h5 className="text-sm font-semibold text-gray-300 mb-3 border-b border-white/5 pb-2">{category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
