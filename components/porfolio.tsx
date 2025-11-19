'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Digitaley Drive official website",
    description:
      "The official website for Digitaley Drive is a comprehensive platform that connects users with the Digitaley Drive ecosystem. It also features a Learning Management System (LMS) where students can access assignments and course curricula.",
    image: "/digitaleydrive-project.png",
    demoUrl: "https://digitaley-drive-frontend-zeta.vercel.app/",
    githubUrl: "https://github.com/Oluwatosinakb/digitaley-drive-frontend",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Ethnocentrique",
    description:
      "The Ethnocentrique website is a cultural platform that celebrates diversity and promotes understanding among different ethnic groups. It features articles, events, and resources to foster cultural exchange.",
    image: "/ethnocentrique.png",
    demoUrl: "https://ethno-staging.vercel.app/",
    githubUrl: "https://github.com/Oluwatosinakb/ethnocentrique-web.git",
    technologies: ["Next.js", "Typescript", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 3,
    title: "CARA: An E-commerce website",
    description:
      "The CARA e-commerce website UI was designed to provide a smooth and modern shopping experience. It includes features like product listings, detailed product pages, a shopping cart, and a checkout flow.",
    image: "/CARA.png",
    demoUrl:
      "https://682b999701550a1afcc472a3--soft-pithivier-ab34a5.netlify.app/",
    githubUrl: "https://github.com/Oluwatosinakb/E-commerce.git",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 4,
    title: "Neukleos website",
    description:
      "Development and design of the official website for Neukleos, a modern marketing agency. The site serves as a key informational hub, showcasing their full suite of digital solutions—including SEO, content marketing, and web development—that help businesses enhance their online presence and achieve measurable growth.",
    image: "/Neukleos-website.png",
    demoUrl: "https://nuekleos-web-yw2j.vercel.app/",
    githubUrl: "https://github.com/Oluwatosinakb/nuekleos-website.git",
    technologies: ["Next.js", "Tailwind CSS", "Typescript"],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full py-20 px-4 md:px-10 lg:px-20 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent works that showcase my skills and passion
            for development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* ✅ Project Image - mobile and desktop logic */}
              <div className="relative h-48 overflow-hidden">
                {/* Mobile: image links directly to demo */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block md:hidden h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300"
                  />
                </a>

                {/* Desktop: hover overlay */}
                <div className="hidden md:block relative h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FaGithub className="text-white text-xl" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-white text-xl" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-8">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Oluwatosinakb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-colors"
          >
            <FaGithub />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
