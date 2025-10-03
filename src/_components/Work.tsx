"use client";

import React, { useRef, useEffect, forwardRef } from "react"; // 1. Importar forwardRef
import Image from "next/image";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

// ÍCONE E DADOS (sem alterações)
// ... (seu código de Icon, interface Project e array projects continua igual)
const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-300 group-hover:text-green-400 transition-colors duration-200"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectLink: string;
}

const projects: Project[] = [
  {
    title: "Projeto - EPSSO",
    description:
      "O projeto EPSSO é uma aplicação web desenvolvida utilizando as tecnologias React, Next.js e TypeScript, garantindo um código robusto, escalável e tipado. O estilo é implementado com Tailwind CSS, permitindo um desenvolvimento rápido e responsivo com classes utilitárias.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "WordPress",
      "REST API",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Hostgator",
      "Git",
    ],
    imageUrl: "/work/trampo01.png",
    projectLink: "https://epsso.com.br/",
  },
  {
    title: "Projeto - NEXTPM",
    description:
      "Desenvolvimento de landing page moderna e responsiva para divulgação da certificação PMP, utilizando Next.js, Vite e TailwindCSS, com foco em performance e SEO.",
    tags: ["Next.js", "Vite", "Hostgator", "Tailwindcss", "Git"],
    imageUrl: "/work/trampo02.png",
    projectLink: "#",
  },
  {
    title: "Projeto - Doctor Care",
    description:
      "Desenvolvimento de landing page responsiva com Next.js e Tailwind CSS, garantindo alta performance, SEO otimizado e fidelidade ao design criado no Figma.",
    tags: ["Next.js", "Tailwind CSS", "Javascript", "Figma", "Git"],
    imageUrl: "/work/Picture.png",
    projectLink: "#",
  },
];

// 2. COMPONENTE DO CARD (MODIFICADO COM forwardRef)
interface ProjectCardProps {
  project: Project;
}

// A sintaxe muda um pouco para usar forwardRef
const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ project }, ref) => {
    return (
      // 2. A 'ref' é passada para a div principal
      <div
        ref={ref}
        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group h-full flex flex-col"
      >
        <div className="relative">
          <Image
            src={project.imageUrl}
            alt={`Imagem do projeto ${project.title}`}
            width={600}
            height={400}
            className="w-full h-48 object-cover"
          />
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Acessar o projeto ${project.title} em uma nova aba`}
            className="absolute top-4 right-4 p-2 bg-gray-900 bg-opacity-60 rounded-full hover:bg-opacity-80 transition-opacity"
          >
            <ExternalLinkIcon />
          </a>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-100 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
);

// Adiciona um displayName para facilitar a depuração no React DevTools
ProjectCard.displayName = "ProjectCard";

// CRIA A VERSÃO ANIMÁVEL DO CARD (agora vai funcionar)
const MotionProjectCard = motion(ProjectCard);

// 3. COMPONENTE PRINCIPAL DA SEÇÃO "WORK" (sem alterações aqui)
const Work: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const gridVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="work"
      className="bg-[#010512] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[1128px] mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          <span className="bg-gray-700 text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            Trabalhos
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
            Alguns dos projetos notáveis que construí
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridVariants}
          initial="hidden"
          animate={controls}
        >
          {projects.map((project, index) => (
            <MotionProjectCard
              key={index}
              project={project}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
