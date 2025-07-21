"use client";

import { MapPin, Dot, Github, Linkedin, Dribbble } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#010512] text-white w-full py-12 md:py-20">
      <div className="max-w-[1128px] mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
        {/* Texto */}
        <div className="flex-1 max-w-[768px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hi, I’m <span className="text-white">Paulo Reducino</span>{" "}
            <span className="inline-block animate-wave">👋</span>
          </h1>

          <p className="text-gray-400 leading-relaxed mb-6 text-sm sm:text-base">
            I’m a passionate full stack developer with over 5 years of
            experience building modern, performant, and accessible web
            applications using technologies like React.js, Node.js, Next.js, and
            TypeScript. I love transforming ideas into elegant digital
            experiences — combining clean code with thoughtful design to create
            solutions that are not only functional, but enjoyable to use.
            Whether it's building scalable backends or crafting responsive,
            pixel-perfect frontends, I'm always focused on delivering
            high-quality results.
          </p>

          {/* Localização e disponibilidade */}
          <div className="flex flex-col gap-2 text-sm text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={24} className="text-gray-400" />
              <span>São Luis - MA, Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Dot size={24} className="text-green-400" strokeWidth={8} />
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Ícones sociais */}
          <div className="flex gap-4 text-gray-400">
            <a
              href="#"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              aria-label="Dribbble"
              className="hover:text-white transition"
            >
              <Dribbble size={20} />
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative w-[200px] sm:w-[240px] md:w-[280px] flex-shrink-0">
          <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#1B1F24] rounded-lg" />
          <Image
            src="/hero/v1.png"
            alt="Foto de Sagar"
            width={300}
            height={300}
            className="relative z-10 rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
