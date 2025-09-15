"use client";

import React from "react";
import Image from "next/image";

// 1. ÍCONE E DADOS

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

// Dados de exemplo. Adicione seus próprios projetos aqui.
const projects: Project[] = [
  {
    title: "Projeto - EPSSO",
    description:
      "O projeto EPSSO é uma aplicação web desenvolvida utilizando as tecnologias React, Next.js e TypeScript, garantindo um código robusto, escalável e tipado. O estilo é implementado com Tailwind CSS, permitindo um desenvolvimento rápido e responsivo com classes utilitárias, seguindo abordagem mobile-first.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: ["Next.js", "Vite", "Hostgator", "Tailwindcss", "Git"],
    imageUrl: "/work/trampo02.png",
    projectLink: "https://nextpm.com.br/",
  },
  {
    title: "Projeto - Doctor Care",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    tags: ["Next.js", "Tailwind CSS", "Javascript", "Figma", "Git"],
    imageUrl: "/work/Picture.png",
    projectLink: "#",
  },
];

// 2. COMPONENTE INTERNO DO CARD DO PROJETO

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
      <div className="relative">
        <Image
          src={project.imageUrl}
          alt={`Imagem do projeto ${project.title}`}
          width={600}
          height={400}
          className="w-full h-48"
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
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
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
};

// 3. COMPONENTE PRINCIPAL DA SEÇÃO "WORK" (EXPORTADO)

const Work: React.FC = () => {
  return (
    <section className="bg-[#010512] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1128px] mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gray-700 text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            Trabalhos
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
            Alguns dos projetos notáveis que construí
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
