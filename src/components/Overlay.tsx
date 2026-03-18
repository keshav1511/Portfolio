'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Section 1: 0% -> Name/Title (Center)
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Section 2: Statement 1 (Left)
  const opacity2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4], [0, 1, 0]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.25, 0.4], [-50, 0, 50]);

  // Section 3: Statement 2 (Right)
  const opacity3 = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [0, 1, 0]);
  const x3 = useTransform(scrollYProgress, [0.35, 0.45, 0.6], [50, 0, -50]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[250vh] z-10 pointer-events-none">
      {/* Sticky container for the viewport height */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center items-center px-4 md:px-20 text-white font-sans">
        
        {/* Section 1 */}
        <motion.div
          style={{ opacity: opacity1, y: y1 }}
          className="absolute flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-7xl font-black tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Keshav Nayak
          </h1>
          <p className="text-xl md:text-3xl text-gray-400 mt-2 font-light">
            Full Stack & ML Engineer
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={{ opacity: opacity2, x: x2 }}
          className="absolute left-10 md:left-20 max-w-md text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            I build digital experiences.
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-4">
            Crafting immersive, high-performance interfaces where every pixel tells a story.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={{ opacity: opacity3, x: x3 }}
          className="absolute right-10 md:right-20 max-w-md text-right"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight bg-gradient-to-l from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Bridging design & engineering.
          </h2>
          <p className="text-base md:text-lg text-gray-300 mt-4">
            Solving complex problems with elegant code and beautiful design.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
