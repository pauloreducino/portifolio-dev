"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

// 1. DADOS E TIPOS
interface Testimonial {
  quote: string;
  authorName: string;
  authorRole: string;
  avatarUrl: string;
}

// Dados de exemplo baseados na imagem. Troque pelos seus depoimentos.
const testimonials: Testimonial[] = [
  {
    quote:
      "Job well done! I am really impressed. He is very very good at what he does:) I would recommend Sagar and will rehire in the future for Frontend development.",
    authorName: "Alice Serejo",
    authorRole: "Founder – xyz.com",
    avatarUrl: "/testimonials/pessoa01.jpg",
  },
  {
    quote:
      "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
    authorName: "John Doe",
    authorRole: "Founder – abc.com",
    avatarUrl: "/testimonials/pessoa02.jpg",
  },
  {
    quote:
      "Sagar was extremely easy and pleasant to work with and he truly cares about the project being a success. Sagar has a high level of knowledge and was able to work on my MERN stack application without any issues.",
    authorName: "John Doe",
    authorRole: "Freelancer",
    avatarUrl: "/testimonials/pessoa03.jpg",
  },
];

// 2. COMPONENTE INTERNO DO CARD DE DEPOIMENTO

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-8 h-full flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-6 rounded-full border-2 border-gray-700 overflow-hidden">
        <Image
          src={testimonial.avatarUrl}
          alt={`Avatar de ${testimonial.authorName}`}
          width={90}
          height={90}
          className="object-cover object-center w-full h-full"
        />
      </div>

      <blockquote className="text-gray-300 italic mb-6 flex-grow">
        “{testimonial.quote}”
      </blockquote>
      <footer className="mt-auto">
        <p className="font-bold text-lg text-gray-100">
          {testimonial.authorName}
        </p>
        <p className="text-sm text-gray-400">{testimonial.authorRole}</p>
      </footer>
    </div>
  );
};

// 3. COMPONENTE PRINCIPAL (EXPORTADO) COM LÓGICA DE CARROSSEL

const Testimonial: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const updateCurrent = useCallback(() => {
    if (emblaApi) setSelectedIndex(emblaApi.selectedScrollSnap());
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
            Testemunhos
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl text-gray-300">
            Coisas boas que as pessoas disseram sobre mim:
          </h2>
        </div>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        <div className="lg:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => (
                <div className="flex-[0_0_100%] min-w-0 pl-4" key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Paginação */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                  index === selectedIndex
                    ? "w-8 bg-green-400"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
