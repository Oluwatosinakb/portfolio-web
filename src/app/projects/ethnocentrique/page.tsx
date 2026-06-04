'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
} from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function EthnocentriquePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* ─── Back nav ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors"
          >
            <FaArrowLeft className="text-xs" />
            Back to projects
          </Link>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section className="pt-14">
        <div className="relative h-[55vh] md:h-[65vh] w-full bg-neutral-950 overflow-hidden">
          <Image
            src="/ethnocentrique.png"
            alt="Ethnocentrique"
            fill
            className="object-cover opacity-60"
            priority
          />

          <div className="absolute bottom-0 left-0 h-1 w-full bg-orange-500" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-2xl"
            >
              Ethnocentrique
            </motion.h1>

            
          </div>
        </div>
      </section>

      {/* ─── Meta row ─── */}
      <section className="border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Role', value: 'Frontend Developer' },
            { label: 'Timeline', value: '5 Weeks' },
            { label: 'Type', value: 'Official Website' },
            { label: 'Focus', value: 'Website Revamp' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500 mb-1">
                {item.label}
              </p>

              <p className="text-sm font-medium text-black">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Body content ─── */}
      <article className="max-w-5xl mx-auto px-6 py-16 space-y-20">

        {/* Tech stack */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {[
            'Next.js',
            'React',
            'Tailwind CSS',
            'TypeScript',
            'Framer Motion',
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full border border-orange-100"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Brief */}
        <Section
          index={1}
          label="01 — Brief"
          title="About the project"
        >
          <p>
            Ethnocentrique is a cultural brand focused on storytelling,
            identity, and community-driven initiatives across different cultures
            and communities.
          </p>

          <p>
            The project focused on redesigning the brand’s official website
            to better showcase its work, initiatives, editorial content,
            and overall visual identity.
          </p>

          <p>
            The redesign aimed to create a cleaner and more modern experience
            while improving responsiveness, structure, and content presentation
            across the platform.
          </p>
        </Section>

        {/* Problem */}
        <Section
          index={2}
          label="02 — Problem"
          title="The challenge"
        >
          <p>
            The previous website lacked a strong visual structure and did not
            fully communicate the quality and depth of the brand’s work and initiatives.
          </p>

          <p>
            Content sections felt disconnected, navigation needed improvement,
            and the overall experience felt outdated across modern devices.
          </p>

          <p>
            The challenge was to redesign the experience in a way that felt modern,
            visually engaging, and easier to navigate while still maintaining
            the authenticity of the brand.
          </p>
        </Section>

        {/* Solution */}
        <Section
          index={3}
          label="03 — Solution"
          title="How we solved it"
        >
          <p>
            I redesigned the website using a cleaner layout structure,
            improved typography, and stronger visual hierarchy to create
            a more refined browsing experience.
          </p>

          <p>
            The new design focused heavily on showcasing the brand’s initiatives,
            stories, and cultural work through a more immersive and editorial-inspired layout.
          </p>

          <p>
            Built with Next.js and Tailwind CSS, the website delivers
            improved responsiveness, smoother interactions, and a more polished
            presentation across devices.
          </p>
        </Section>

        {/* Outcome */}
        <Section
          index={4}
          label="04 — Outcome"
          title="Results"
        >
          <p>
            The redesigned website delivered a cleaner and more modern digital presence
            that better reflects Ethnocentrique’s identity and cultural storytelling.
          </p>

          <p>
            The final experience improved readability, visual consistency,
            responsiveness, and overall presentation while creating a stronger platform
            for showcasing the brand’s work and impact.
          </p>
        </Section>

        {/* Full-width image */}
        <motion.div
          custom={5}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-neutral-100 shadow-sm"
        >
          <Image
            src="/ethnocentrique.png"
            alt="Ethnocentrique website preview"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={6}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-100"
        >
          <a
            href="https://ethno-staging.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            <FaExternalLinkAlt className="text-xs" />
            View Live Site
          </a>

          <a
            href="https://github.com/Oluwatosinakb/ethnocentrique-web.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-200 text-black text-sm font-semibold rounded-lg hover:bg-neutral-50 transition-colors"
          >
            <FaGithub />
            View on GitHub
          </a>
        </motion.div>

      </article>

      {/* ─── Footer ─── */}
      <div className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">
            Ethnocentrique — Case Study
          </p>

          <Link
            href="/#portfolio"
            className="text-sm font-semibold text-orange-500 hover:underline"
          >
            ← All Projects
          </Link>
        </div>
      </div>

    </main>
  );
}

/* ─── Reusable section block ─── */

function Section({
  index,
  label,
  title,
  children,
}: {
  index: number;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16"
    >
      <div className="pt-1">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-orange-500">
          {label}
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">
          {title}
        </h2>

        <div className="space-y-4 text-neutral-600 leading-relaxed text-[15px]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}