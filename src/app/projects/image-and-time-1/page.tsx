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

export default function ImageAndTimePage() {
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
            src="/image-and-time.png"
            alt="Image and Time"
            fill
            className="object-cover opacity-60"
            priority
          />

          <div className="absolute bottom-0 left-0 h-1 w-full bg-red-600" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-2xl"
            >
              Image & Time
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
            { label: 'Type', value: 'Agency Website' },
            { label: 'Focus', value: 'Brand & Portfolio' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600 mb-1">
                {item.label}
              </p>
              <p className="text-sm font-medium text-black">{item.value}</p>
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
          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full border border-red-100"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Brief */}
        <Section index={1} label="01 — Brief" title="About the project">
          <p>
            Image & Time is a Lagos-based advertising and creative agency founded in 1999,
            working with iconic brands like Nestlé, Heineken, Coca-Cola, and LVMH.
          </p>
          <p>
            The project was to design and build their official website — a platform that
            reflects their creative excellence while serving as a key business development tool.
          </p>
        </Section>

        {/* Problem */}
        <Section index={2} label="02 — Problem" title="The challenge">
          <p>
            The agency needed a site that instantly communicated 25+ years of creative
            pedigree — premium and editorial, but clean enough to let their work speak first.
          </p>
        </Section>

        {/* Solution */}
        <Section index={3} label="03 — Solution" title="How we solved it">
          <p>
            Built with Next.js, Tailwind CSS, and Framer Motion. The design prioritised
            strong typography and generous whitespace, letting brand imagery take centre stage.
          </p>
          <p>
            Key sections included an animated hero, a scrolling client logo marquee,
            a milestone timeline from 1999 to today, team profiles, and a services overview.
          </p>
        </Section>

        {/* Outcome */}
        <Section index={4} label="04 — Outcome" title="Results">
          <p>
            The site became the agency's primary business development tool — clean,
            component-driven, fully responsive, and built to scale as the agency grows.
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
            src="/image-and-time.png"
            alt="Image and Time website preview"
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
            href="https://imageandtime-web-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaExternalLinkAlt className="text-xs" />
            View Live Site
          </a>

          <a
            href="https://github.com/Oluwatosinakb/imageandtime-1"
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
          <p className="text-sm text-neutral-400">Image & Time — Case Study</p>
          <Link
            href="/#portfolio"
            className="text-sm font-semibold text-red-600 hover:underline"
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
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-red-600">
          {label}
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">{title}</h2>
        <div className="space-y-4 text-neutral-600 leading-relaxed text-[15px]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}