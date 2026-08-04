'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl?: string;   
  githubUrl?: string; 
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Kucheza Gaming Website",
    description:
      "A modern website for Kucheza Gaming, an Africa-based game studio promoting culture through video games, showcasing its games, services, partnerships, and initiatives with an immersive user experience.",
    image: "/kucheza.png",
    liveUrl: "https://kuchezagaming.com",
    githubUrl: "https://github.com/Oluwatosinakb/kucheza-web",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    id: 2,
    title: "Lagos games week website",
    description:
      "Lagos Games Week is an annual premier conference and exhibition dedicated to growing the African video games industry. Held in Lagos, Nigeria, it connects creators, investors, and industry leaders through panels, tournaments (like GamrX), and pitching sessions, aiming to build a $100 million gaming ecosystem.",
    image: "/lagos-games-week.png",
    liveUrl: "https://lagosgamesweek.com/", 
    githubUrl: "https://github.com/Oluwatosinakb/LGW",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    id: 3,
    title: "Sulmot Website",
    description:
      "A modern corporate website for Sulmot, designed to showcase the company's products, services, and industry expertise through a clean, responsive, and user-friendly digital experience that strengthens its online presence.",
    image: "/sulmot.png",
    liveUrl: "https://sulmot.ng", 
    githubUrl: "https://github.com/Oluwatosinakb/Sulmot",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    id: 4,
    title: "Ethnocentrique",
    description:
      "The Ethnocentrique website is a cultural platform that celebrates diversity and promotes understanding among different ethnic groups. It features articles, events, and resources to foster cultural exchange.",
    image: "/ethnocentrique.png",
    liveUrl: "https://ethnocentrique.com", 
    githubUrl: "https://github.com/Oluwatosinakb/ethnocentrique",
    technologies: ["Next.js", "Typescript", "React", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 5,
    title: "Image and Time",
    description:
      "The Image & Time website is a portfolio platform that showcases the agency’s expertise in design, advertising, and digital innovation. It highlights their work, approach, and impact in helping brands connect with audiences and stand out in a competitive market.",
    image: "/image-and-time.png",
    liveUrl: "https://imageandtime-web-seven.vercel.app/", 
    githubUrl: "https://github.com/Oluwatosinakb/imageandtime-1",
    technologies: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 6,
    title: "Image and time-2",
    description:
      "The Image & Time website is a portfolio platform that showcases the agency’s expertise in design, advertising, and digital innovation. It highlights their work, approach, and impact in helping brands connect with audiences and stand out in a competitive market.",
    image: "/image-and-time-2.png",
    liveUrl: "https://imageandtime.com", 
    githubUrl: "https://github.com/Oluwatosinakb/imageandtime-new",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    id: 7,
    title: "Neukleos website",
    description:
      "Development and design of the official website for Neukleos, a modern marketing agency. The site serves as a key informational hub, showcasing their full suite of digital solutions—including SEO, content marketing, and web development—that help businesses enhance their online presence and achieve measurable growth.",
    image: "/neukleos-2.png",
    liveUrl: "https://neukleos.com", 
    githubUrl: "https://github.com/Oluwatosinakb/Neukleos",
    technologies: ["Next.js", "Tailwind CSS", "Typescript"],
  },
  {
    id: 8,
    title: "CINE SCOPE: A Content explorer",
    description:
      "A personal movie discovery app powered by the TMDB API. Browse and explore thousands of titles, filter by genre, and sort by popularity, rating, or release date — all from a clean, fast interface.",
    image: "/Cine-scope.png",
    liveUrl: "https://frontend-assessment-oluwatosin.vercel.app/movies", 
    githubUrl: "https://github.com/Oluwatosinakb/frontend-assessment-oluwatosin", 
    technologies: ["NextJS", "Typescript", "Tailwind CSS", "TMDB API"],
  },
  {
    id: 9,
    title: "3tabs consulting",
    description:
      "Official website for Three Tabs Consult Ltd, a Lagos-based ICT solutions company with 10+ years of experience. The site covers their full range of services — networking, device repairs, electronics sales, and security camera integration — with a clean, professional design.",
    image: "/3tabs.png",
    liveUrl: "https://3tabs.ng", 
    githubUrl: "https://github.com/Oluwatosinakb/3tabsconsulting",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 10,
    title: "Digitaley Drive official website",
    description:
      "The official website for Digitaley Drive is a comprehensive platform that connects users with the Digitaley Drive ecosystem. It also features a Learning Management System (LMS) where students can access assignments and course curricula.",
    image: "/digitaleydrive-project.png",
    liveUrl: "https://digitaleydrive.com", 
    githubUrl: "https://github.com/Oluwatosinakb/DigitaleyDrive", 
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full py-20 px-4 md:px-10 lg:px-20 bg-background"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-full bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover overlay — desktop only. Icons appear side by side on card hover */}
                <div className="absolute inset-0 hidden md:flex items-center justify-center gap-4 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      title="Live demo"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View GitHub repo for ${project.title}`}
                      title="GitHub repo"
                      className="flex items-center justify-center w-11 h-11 rounded-full bg-white text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

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