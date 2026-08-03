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

export default function KuchezaPage() {
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
                        src="/kucheza.png"
                        alt="Kucheza Gaming"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />

                    <div className="absolute bottom-0 left-0 h-1 w-full bg-[#24F2BE]" />

                    <div className="absolute inset-0 flex flex-col justify-end px-6 pb-12 max-w-5xl mx-auto">

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-white text-4xl md:text-6xl font-bold leading-tight max-w-2xl"
                        >
                            Kucheza Gaming
                        </motion.h1>


                    </div>
                </div>
            </section>

            {/* ─── Meta row ─── */}
            <section className="border-b border-neutral-100">
                <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { label: "Role", value: "Frontend Developer" },
                        { label: "Type", value: "Studio Website" },
                        { label: "Location", value: "Lagos, Nigeria" },
                        { label: "Focus", value: "Game Development" },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            custom={i}

                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#24F2BE] mb-1">
                                {item.label}
                            </p>
                            <p className="text-sm font-medium text-black">{item.value}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ─── Body ─── */}
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
                        "Next.js",
                        "React",
                        "Tailwind CSS",
                        "TypeScript",
                        "Framer Motion",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-[#f0f9eb] text-[#24F2BE] text-xs font-medium rounded-full border border-[#c8e8b8]"
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>

                {/* Brief */}
                <Section index={1} label="01 — Brief" title="About the project">
                    <p>
                        Kucheza Gaming is an Africa-based game studio focused on creating
                        culturally inspired games while building a sustainable video games
                        ecosystem across the continent.
                    </p>
                    <p>
                        The project involved developing a modern website that showcases the
                        studio's games, creative services, educational programs, and partnerships
                        while reinforcing its vision of promoting African culture through gaming.
                    </p>
                </Section>

                {/* Problem */}
                <Section index={2} label="02 — Problem" title="The challenge">
                    <p>
                        The website needed to communicate several aspects of the business—from
                        original games and game art services to training programs and community
                        initiatives—without overwhelming visitors.
                    </p>
                    <p>The challenge was to organize this diverse content into a clear,
                        engaging experience while maintaining a strong visual identity inspired
                        by the gaming industry.</p>
                </Section>

                {/* Solution */}
                <Section index={3} label="03 — Solution" title="How we solved it">
                    <p>
                        Built with Next.js and Tailwind CSS, the website features immersive
                        visuals, smooth animations, and structured content sections that make
                        it easy to explore the studio's games, services, and educational
                        initiatives.
                    </p>
                    <p>
                        The design emphasizes storytelling, bold visuals, and intuitive
                        navigation to create an engaging experience for players, partners,
                        and potential clients alike.
                    </p>
                </Section>

                {/* Outcome */}
                <Section index={4} label="04 — Outcome" title="Results">
                    <p>
                        The final website provides Kucheza Gaming with a modern digital
                        presence that reflects its creativity, showcases its growing portfolio,
                        and communicates its mission of advancing African game development
                        through culture, education, and innovation.
                    </p>
                </Section>

                {/* Preview image */}
                <motion.div
                    custom={5}

                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="relative aspect-video w-full rounded-xl overflow-hidden border border-neutral-100 shadow-sm"
                >
                    <Image
                        src="/kucheza.png"
                        alt="Kucheza Gaming website preview"
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
                        href="https://kuchezagaming.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#24F2BE] text-white text-sm font-semibold rounded-lg hover:bg-[#1dbcb0] transition-colors"
                    >
                        <FaExternalLinkAlt className="text-xs" />
                        View Live Site
                    </a>

                    <a
                        href="https://github.com/Oluwatosinakb/kucheza-web"
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
                    <p className="text-sm text-neutral-400">Kucheza gaming — Case Study</p>
                    <Link
                        href="/#portfolio"
                        className="text-sm font-semibold text-[#24F2BE] hover:underline"
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
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#24F2BE]">
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