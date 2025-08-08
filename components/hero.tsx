'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 md:px-10 lg:px-20 bg-background">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Right: Profile Image — shown first on mobile, second on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center order-1 md:order-2"
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden bg-muted shadow-xl">
            <Image
              src="/Profile.jpg"
              alt="Oluwatosin"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Left: Text Content — shown second on mobile, first on desktop */}
        <div className="space-y-6 order-2 md:order-1">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground font-mono"
          >
            Hello, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Oluwatosin
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-3xl text-primary font-semibold"
          >
            Your Next Frontend Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground max-w-lg"
          >
            I craft engaging digital experiences with clean code and intuitive interfaces, leveraging my frontend development skills and growing DevOps expertise to bridge the gap between design and deployment
          </motion.p>

          {/* Resume Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="pt-2"
          >
            <a
              href="/Oluwatosin-AkinbobolaCV.pdf"
              download="Oluwatosin-AkinbobolaCV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
            >
              <FaDownload className="text-sm" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center space-x-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="https://github.com/Oluwatosinakb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/oluwatosin-akinbobola-a22244333/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-primary transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:oluwatosinakinbobola417@gmail.com"
              className="text-2xl hover:text-primary transition"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;