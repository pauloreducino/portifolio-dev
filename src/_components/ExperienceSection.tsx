"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

// 1. DADOS E TIPOS
interface Experience {
  companyLogo: string;
  companyUrl: string;
  jobTitle: string;
  dateRange: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    companyLogo: "/servicos/surtocriativo_logo.jpg",
    companyUrl: "https://www.linkedin.com/company/surtocriativo/",
    jobTitle: "Desenvolvedor Front-End - Freelancer",
    dateRange: "Ago 2025 - Presente",
    responsibilities: [
      "Atuo como Desenvolvedor Frontend (Freelancer) na Surto Criativo, entregando soluções digitais modernas, performáticas e acessíveis para diferentes segmentos.",
      "Principais atividades:",
      "Desenvolvimento de aplicações SPA com React.js, Next.js, Vite e TypeScript.",
      "Criação de interfaces responsivas com Tailwind CSS, Styled Components.",
      "Integração com APIs REST/WordPress e otimização de cache com TanStack Query.",
      "Implementação de formulários validados (React Hook Form + Zod).",
      "Monitoramento de SEO, performance e acessibilidade utilizando Google Lighthouse, PageSpeed Insights e ferramentas de acessibilidade (Wave, axe DevTools).",
      "Colaboração com UX/UI Design para transformar protótipos em produtos funcionais.",
    ],
  },
  {
    companyLogo: "/servicos/phooto_logo.jpg",
    companyUrl: "https://www.linkedin.com/company/phooto/posts/?feedView=all",
    jobTitle: "Desenvolvedor Front-End Pleno",
    dateRange: "Nov 2022 - Jul 2025",
    responsibilities: [
      "Atuação focada em projetos de e-commerce, liderando o desenvolvimento e a otimização de interfaces responsivas utilizando React.js, TypeScript, JavaScript, HTML e CSS (Tailwind).",
      "Participei ativamente da criação de landing pages de alta conversão, alinhadas a campanhas publicitárias, com ênfase em performance, acessibilidade e UX/UI.",
      "Contribuição direta em conjunto com product designer e product manager em estratégias e execuções de Black Friday, otimizando a experiência do usuário e melhorando métricas de conversão.",
      "Implementação de melhorias contínuas em design e usabilidade, com base em testes e análise de comportamento do usuário.",
      "Acompanhamento constante de tendências de frontend para garantir entregas modernas e eficientes, sempre em conformidade com as melhores práticas de mercado.",
    ],
  },
  {
    companyLogo: "/servicos/surtocriativo_logo.jpg",
    companyUrl: "https://www.linkedin.com/company/surtocriativo/",
    jobTitle: "Desenvolvedor Front-End",
    dateRange: "Mar 2020 - Nov 2022",
    responsibilities: [
      "Atuação como desenvolvedor front-end, com foco na criação de sites institucionais, landing pages e portfólios profissionais para diversas áreas, incluindo marketing, saúde, advocacia e pequenas empresas.",
      "Responsável pelo desenvolvimento de interfaces modernas, responsivas e otimizadas para performance e SEO, utilizando tecnologias como Next.js, React, TypeScript e Tailwind CSS.",
      "Execução de projetos desde o layout (Figma) até o deploy final, com atenção à fidelidade visual, usabilidade e boas práticas de acessibilidade.",
    ],
  },
];

// 2. COMPONENTE DO CARD
interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  if (index === 0) {
    // Primeira experiência: descrição + subtítulo + lista
    const [description, subtitle, ...tasks] = experience.responsibilities;

    return (
      <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-[896px] mx-auto">
        <div className="flex-shrink-0 md:w-1/4">
          <div className="flex justify-between items-center md:flex-col md:items-start">
            <Link
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={experience.companyLogo}
                alt={`${experience.jobTitle} logo`}
                width={80}
                height={80}
                className="object-contain h-16 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm md:hidden">
              {experience.dateRange}
            </p>
          </div>
        </div>

        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-bold text-gray-100">
              {experience.jobTitle}
            </h4>
            <p className="text-gray-400 text-sm hidden md:block">
              {experience.dateRange}
            </p>
          </div>

          {/* Descrição inicial */}
          <p className="text-gray-200 font-semibold text-sm sm:text-base mb-4">
            {description}
          </p>

          {/* Subtítulo sem bolinha */}
          {subtitle && (
            <p className="text-gray-300 font-bold text-sm sm:text-base mb-2">
              {subtitle}
            </p>
          )}

          {/* Lista das atividades */}
          <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm sm:text-base">
            {tasks.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Outras experiências: seguem como estavam (primeira linha título, resto lista)
  const [title, ...responsibilities] = experience.responsibilities;

  return (
    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-[896px] mx-auto">
      <div className="flex-shrink-0 md:w-1/4">
        <div className="flex justify-between items-center md:flex-col md:items-start">
          <Link
            href={experience.companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src={experience.companyLogo}
              alt={`${experience.jobTitle} logo`}
              width={80}
              height={80}
              className="object-contain h-16 w-auto"
            />
          </Link>
          <p className="text-gray-400 text-sm md:hidden">
            {experience.dateRange}
          </p>
        </div>
      </div>

      <div className="md:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-bold text-gray-100">
            {experience.jobTitle}
          </h4>
          <p className="text-gray-400 text-sm hidden md:block">
            {experience.dateRange}
          </p>
        </div>

        {/* Título destacado */}
        <p className="text-gray-200 font-semibold text-sm sm:text-base mb-4">
          {title}
        </p>

        {/* Lista */}
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm sm:text-base">
          {responsibilities.map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// 3. COMPONENTE PRINCIPAL
export const ExperienceSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateCurrent);
    return () => {
      emblaApi.off("select", updateCurrent);
    };
  }, [emblaApi, updateCurrent]);

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1128px] mx-auto">
        <div className="text-center mb-16">
          <span className="bg-gray-700 text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            Experiência
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
            Aqui está um rápido resumo das minhas experiências mais recentes:
          </h2>
        </div>

        {/* Desktop */}
        <div className="hidden md:block space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {experiences.map((exp, index) => (
                <div className="flex-shrink-0 w-full min-w-0 px-2" key={index}>
                  <ExperienceCard experience={exp} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Paginação */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                  index === selectedIndex
                    ? "w-8 bg-green-400"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
