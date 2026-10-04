"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
} from "lucide-react";

type Project = {
  number: string;
  title: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  live?: string;
  image: string;
  imageAlt: string;
};

function GithubIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0 1 12 5.803c1.02.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.624-5.475 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0Z" />
    </svg>
  );
}

const projects: Project[] = [
  {
    number: "01",
    title: "NexusFlow",
    year: "2026",
    category: "SAAS / FULL-STACK",
    description:
      "A multi-tenant SaaS workspace platform built around authentication, workspace management and role-based user experiences. The project focuses on building a practical product interface rather than a simple landing page.",
    technologies: [
      "React",
      "Firebase",
      "Firestore",
      "Tailwind CSS",
      "Vercel",
    ],
    github: "https://github.com/Maitysouradeep/nexusflow",
    live: "https://nexusflow-navy-five.vercel.app/",
    image: "/projects/nexus-flow.png",
    imageAlt: "NexusFlow SaaS workspace platform",
  },

  {
    number: "02",
    title: "Doctor Booking System",
    year: "2026",
    category: "FULL-STACK WEB APPLICATION",
    description:
      "A full-stack doctor appointment booking platform that allows users to discover doctors, manage appointments and interact with a healthcare-focused booking workflow. The application combines a React frontend with a Node.js and Express backend backed by MongoDB.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Ant Design",
    ],
    github:
      "https://github.com/Maitysouradeep/Doctor-booking-System",
    live: "https://doctor-booking-system-eight.vercel.app/",
    image: "/projects/doctor-bookings.png",
    imageAlt: "TakeCare Doctor Booking System website",
  },

  {
    number: "03",
    title: "Spam Mail Detector",
    year: "2026",
    category: "MACHINE LEARNING",
    description:
      "A machine-learning project for classifying email messages as spam or legitimate using text processing and machine learning techniques. The project explores a practical NLP classification workflow through Python and Streamlit.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
    ],
    github:
      "https://github.com/Maitysouradeep/spam-mail-detector",
    image: "/projects/spam-detector.png",
    imageAlt: "Spam Mail Detector machine learning project",
  },
];

function ProjectImage({ project }: { project: Project }) {
  return (
    <div className="group/image relative overflow-hidden border border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={project.number === "01"}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
          className="object-cover transition-transform duration-700 ease-out group-hover/image:scale-[1.025]"
        />

        {/* Very subtle overlay */}
        <div className="pointer-events-none absolute inset-0 bg-black/[0.02] transition-opacity duration-500 group-hover/image:bg-black-0" />
      </div>

      {/* Image number */}
      <div className="absolute left-5 top-5 flex items-center gap-2 bg-black/70 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
        {project.number}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[var(--background)] px-5 py-28 text-[var(--foreground)] transition-colors duration-500 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex items-end justify-between gap-8"
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-[var(--muted)]">
              <span className="text-[var(--accent)]">04</span>
              <span>Selected Work</span>
            </div>

            <h2 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              Things I&apos;ve
              <br />
              <span className="text-[var(--muted)]">built.</span>
            </h2>
          </div>

          <div className="hidden max-w-xs pb-2 text-sm leading-6 text-[var(--muted)] lg:block">
            A selection of projects where I&apos;ve explored full-stack
            development, product interfaces and machine learning.
          </div>
        </motion.div>

        {/* Projects */}
        <div>
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                delay: index * 0.08,
              }}
              className="group border-t border-[var(--border)] py-14 sm:py-20"
            >
              {/* REAL PROJECT IMAGE */}
              <div className="mb-10">
                <ProjectImage project={project} />
              </div>

              {/* Project information */}
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.8fr_0.9fr] lg:gap-12">

                {/* Title */}
                <div>
                  <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                    <span className="text-[var(--accent)]">
                      {project.number}
                    </span>

                    <span>{project.category}</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 lg:block">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                      {project.title}
                    </h3>

                    <span className="shrink-0 text-sm text-[var(--muted)] lg:mt-4 lg:block">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Description + technologies */}
                <div>
                  <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--foreground)]"
                      >
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-start gap-3 lg:justify-end">

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor
                    className="group/link inline-flex items-center gap-2 border border-[var(--border)] px-4 py-3 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
                  >
                    <GithubIcon className="h-4 w-4" />

                    GitHub

                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </a>

                  {/* Live */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor
                      className="group/link inline-flex items-center gap-2 bg-[var(--foreground)] px-4 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[var(--background)] transition-all duration-300 hover:bg-[var(--accent)] hover:text-black"
                    >
                      <ExternalLink className="h-4 w-4" />

                      Live

                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project marker */}
              <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted-soft)]">
                <Layers3 className="h-3.5 w-3.5" />

                Project {project.number} / {projects.length}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-t border-[var(--border)] pt-8"
        >
          <div className="flex flex-col justify-between gap-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:flex-row">
            <span>More projects will be added over time.</span>
            <span>Selected work · 2026</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}