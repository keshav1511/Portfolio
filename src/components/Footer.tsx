'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-black border-t border-white/5 py-12 px-6 md:px-20 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Copyright or Branding */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-mono"
        >
          © {new Date().getFullYear()} Keshav Nayak. All rights reserved.
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <motion.a
            href="https://linkedin.com/in/keshav-nayak1511"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>

          <motion.a
            href="https://github.com/keshav1511"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </motion.a>

          <motion.a
            href="mailto:keshavvnayak@gmail.com"
            whileHover={{ scale: 1.1, y: -2 }}
            className="text-gray-400 hover:text-white transition-colors"
            title="Email"
          >
            <Mail size={20} />
          </motion.a>
        </div>

      </div>
    </footer>
  );
}
