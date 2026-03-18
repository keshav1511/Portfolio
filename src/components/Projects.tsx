'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'CardioVision',
    category: 'Cardiovascular Disease Detection',
    description: 'Designed and developed a modular backend using FastAPI for real-time model inference from retinal eye images. Integrated with frontend and optimized for performance.',
    tags: ['Python', 'TensorFlow', 'FastAPI', 'JavaScript'],
    color: 'from-blue-500/20 to-cyan-500/20',
    glow: 'group-hover:shadow-blue-500/20',
    link: 'https://cardio-vision-version2-n3e8.vercel.app/login.html',
  },
  {
    title: 'Alcohol Detection System',
    category: 'IoT & Vehicle Safety',
    description: 'Developed an IoT-based vehicle safety system using Arduino and MQ3 sensor to detect alcohol and disable the engine. Integrated with GPS/GSM for location alerts.',
    tags: ['Arduino', 'MQ3 Sensor', 'GPS/GSM', 'IOT'],
    color: 'from-emerald-500/20 to-teal-500/20',
    glow: 'group-hover:shadow-emerald-500/20',
  },
];

export default function Projects() {
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
            Projects
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mt-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Crafted with passion.
          </h3>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="group relative"
            >
              {/* Card Container */}
              <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${project.color} backdrop-blur-xl p-8 h-full flex flex-col justify-between transition-all duration-500 shadow-2xl hover:border-white/20 ${project.glow} hover:shadow-[0_0_40px_-12px]`}
              >
                <div>
                  <span className="text-xs font-mono tracking-wider text-gray-400">
                    {project.category}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mt-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mt-4 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action */}
                <div className="mt-8 flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-1 text-white text-sm font-semibold group/btn cursor-pointer"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </motion.a>
                  ) : null}
                </div>

                {/* Gradient Background Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
