'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function LagosGamesWeekPage() {
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
            src="/lagos-games-week.png"
            alt="Lagos Games Week"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute bottom-0 left-0 h-1 w-full bg-blue-600" />

          <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-2xl"
            >
              Lagos Games Week
            </motion.h1>
          </div>
        </div>
      </section>

      {/* ─── Meta row ─── */}
      <section className="border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Role', value: 'Frontend Developer' },
            { label: 'Timeline', value: '4 Weeks' },
            { label: 'Type', value: 'Conference Website' },
            { label: 'Status', value: 'Live' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600 mb-1">
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
          {['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Brief */}
        <Section index={1} label="01 — Brief" title="What is Lagos Games Week?">
          <p>
            Lagos Games Week is an annual premier conference and exhibition dedicated to growing 
            the African video games industry. Held in Lagos, Nigeria, it brings together creators, 
            investors, and industry leaders through panels, tournaments like GamrX, and pitching 
            sessions, all working toward building a $100 million gaming ecosystem across the continent.
          </p>
          <p>
            The project required a public-facing website that could serve as the official digital home 
            for the event, capturing the energy of the gaming world while communicating a clear professional 
            identity to sponsors, attendees, and media.
          </p>
        </Section>

        {/* Problem */}
        <Section index={2} label="02 — Problem" title="The challenge">
          <p>
            There was no existing digital presence for the event. The organizers needed a website
            that could do several things at once: communicate the scale and vision of the conference,
            attract sponsors and investors, and give attendees a clear, exciting entry point to
            register and explore the agenda.
          </p>
          <p>
            The design also had to reflect the energy and culture of African gaming, bold and modern, 
            without falling into generic gaming clichés. It needed to work across all devices, load 
            fast, and feel premium.
          </p>
        </Section>

        {/* Solution */}
        <Section index={3} label="03 — Solution" title="How we solved it">
          <p>
            I built a fully responsive, animation-rich website using Next.js and Tailwind CSS,
            with Framer Motion powering smooth entrance animations and scroll-triggered reveals.
            The layout was structured around key audience goals: understanding the event, viewing
            past highlights, and registering interest.
          </p>
          <p>
            Typography and color choices were made to feel authoritative and energetic, reflecting
            the ambition of the Lagos Games Week brand. Each section of the page was designed to
            guide the visitor through a narrative: what the event is, why it matters, who's involved,
            and how to be part of it.
          </p>
        </Section>

        {/* Outcome */}
        <Section index={4} label="04 — Outcome" title="Results">
          <p>
            The website launched successfully ahead of the conference and served as the primary
            touchpoint for attendees, sponsors, and media coverage. It clearly communicated the
            event's mission and provided a professional digital presence that matched the ambition
            of the Lagos Games Week brand.
          </p>
        </Section>

        {/* Full-width image */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative aspect-video w-full rounded-xl overflow-hidden border border-neutral-100 shadow-sm"
        >
          <Image
            src="/lagos-games-week.png"
            alt="Lagos Games Week website preview"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-neutral-100"
        >
          <a
            href="https://lagosgamesweek.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaExternalLinkAlt className="text-xs" />
            View Live Site
          </a>
          <a
            href="https://github.com/Oluwatosinakb/lagos-game-week.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-200 text-black text-sm font-semibold rounded-lg hover:bg-neutral-50 transition-colors"
          >
            <FaGithub />
            View on GitHub
          </a>
        </motion.div>

      </article>

      {/* ─── Footer / next project nudge ─── */}
      <div className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">Lagos Games Week — Case Study</p>
          <Link
            href="/#portfolio"
            className="text-sm font-semibold text-blue-600 hover:underline"
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
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-blue-600">
          {label}
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">{title}</h2>
        <div className="space-y-4 text-neutral-600 leading-relaxed text-[15px]">{children}</div>
      </div>
    </motion.div>
  );
}
