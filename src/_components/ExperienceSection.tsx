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
    companyLogo: "/servicos/phooto_logo.jpg",
    companyUrl: "https://www.linkedin.com/company/phooto/posts/?feedView=all",
    jobTitle: "Pl. Frontend Developer",
    dateRange: "Nov 2022 - Present",
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
    jobTitle: "Jr. Frontend Developer",
    dateRange: "Mar 2020 - Nov 2022",
    responsibilities: [
      "Atuação como desenvolvedor front-end freelance, com foco na criação de sites institucionais, landing pages e portfólios profissionais para diversas áreas, incluindo marketing, saúde, advocacia e pequenas empresas.",
      "Responsável pelo desenvolvimento de interfaces modernas, responsivas e otimizadas para performance e SEO, utilizando tecnologias como Next.js, React, TypeScript e Tailwind CSS.",
      "Execução de projetos desde o layout (Figma) até o deploy final, com atenção à fidelidade visual, usabilidade e boas práticas de acessibilidade.",
    ],
  },
  // {
  //   companyLogo: "/logos/upwork_logo.png",
  //   companyUrl: "https://www.upwork.com",
  //   jobTitle: "Full Stack Developer",
  //   dateRange: "Dec 2015 - May 2017",
  //   responsibilities: [
  //     "Desenvolvimento de soluções completas utilizando PHP, MySQL e jQuery para clientes remotos.",
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   ],
  // },
];

// 2. COMPONENTE DO CARD
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
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

        {/* Lista com espaçamento */}
        <ul className="list-disc list-inside text-gray-300 space-y-3 text-sm sm:text-base">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
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

        {/* Desktop: Lista vertical */}
        <div className="hidden md:block space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>

        {/* Mobile: Carrossel */}
        <div className="md:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {experiences.map((exp, index) => (
                <div className="flex-shrink-0 w-full min-w-0 px-2" key={index}>
                  <ExperienceCard experience={exp} />
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
