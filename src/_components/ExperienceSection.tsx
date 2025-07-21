"use client"; // Necessário para usar hooks como useState e useEffect

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

// ============================================================================
// 1. DADOS E TIPOS (Sem alterações)
// ============================================================================
interface Experience {
  companyLogo: string;
  jobTitle: string;
  dateRange: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    companyLogo: "upwork",
    jobTitle: "Sr. Frontend Developer",
    dateRange: "Nov 2021 - Present",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    companyLogo: "upwork",
    jobTitle: "Team Lead",
    dateRange: "Jul 2017 - Oct 2021",
    responsibilities: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    companyLogo: "upwork",
    jobTitle: "Full Stack Developer",
    dateRange: "Dec 2015 - May 2017",
    responsibilities: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

// ============================================================================
// 2. COMPONENTE DO CARD (Agora com classes responsivas)
// ============================================================================
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    // LARGURA: w-full no mobile, w-[896px] no desktop
    // LAYOUT: flex-col no mobile, md:flex-row no desktop
    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md flex flex-col md:flex-row gap-6 md:gap-8 w-full md:w-[896px] mx-auto">
      {/* Container para Logo e Data - Layout ajustado */}
      <div className="flex-shrink-0 md:w-1/4">
        <div className="flex justify-between items-center md:flex-col md:items-start">
          <h3 className="text-green-400 font-bold text-xl">
            {experience.companyLogo}
          </h3>
          <p className="text-gray-400 text-sm md:hidden">
            {experience.dateRange}
          </p>{" "}
          {/* Data visível no mobile */}
        </div>
      </div>
      {/* Container para Título e Responsabilidades */}
      <div className="md:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-xl font-bold text-gray-100">
            {experience.jobTitle}
          </h4>
          <p className="text-gray-400 text-sm hidden md:block">
            {experience.dateRange}
          </p>{" "}
          {/* Data visível no desktop */}
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm sm:text-base">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// ============================================================================
// 3. COMPONENTE PRINCIPAL (Agora com lógica de Carrossel)
// ============================================================================
export const ExperienceSection: React.FC = () => {
  // Configuração do Embla Carousel
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
            Experience
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
            Here is a quick summary of my most recent experiences:
          </h2>
        </div>

        {/* Layout para DESKTOP (md e acima) - Lista vertical */}
        <div className="hidden md:block space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>

        {/* Layout para MOBILE (abaixo de md) - Carrossel */}
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

          {/* Paginação Estilosa */}
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
