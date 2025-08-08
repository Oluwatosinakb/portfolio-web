'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#footer' },
    { name: 'Resume', href: '/Oluwatosin-AkinbobolaCV.pdf', download: true },
    { name: 'Services', href: '#services' }
  ];

  return (
    <footer id="footer"className="w-full bg-background border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          
          {/* Left Section - Let's Create Together */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold text-primary"
            >
              Let's Create Together
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed"
            >
              I'm always excited to connect with fellow developers, potential clients, and anyone passionate about technology. Whether you have a project in mind or just want to say hello, I'm here to collaborate.
            </motion.p>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <a
                href="https://github.com/Oluwatosinakb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/oluwatosin-akinbobola-a22244333/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </motion.div>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl font-semibold text-foreground"
            >
              Quick Links
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  download={link.download}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group flex items-center text-muted-foreground hover:text-primary transition-all duration-300 py-2"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </span>
                  <HiOutlineArrowUpRight className="ml-1 text-sm opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Section - Get in Touch */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-semibold text-foreground"
            >
              Get in Touch
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed"
            >
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </motion.p>

            <motion.a
              href="mailto:oluwatosinakinbobola417@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <FaEnvelope className="text-sm" />
              Send me an email
            </motion.a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-border/40"
        >
          <p className="text-muted-foreground text-sm">
            © 2025 Oluwatosin. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;