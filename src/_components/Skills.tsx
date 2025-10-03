"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

const skills = [
  { name: "Javascript", src: "/skills/icon-javscript.svg" },
  { name: "Typescript", src: "/skills/icon-typescript.svg" },
  { name: "React", src: "/skills/icon-react.svg" },
  { name: "Next.js", src: "/skills/icon-nextjs.svg" },
  { name: "Node.js", src: "/skills/icon-nodejs.svg" },
  { name: "Express.js", src: "/skills/icon-express.svg" },
  { name: "Nest.js", src: "/skills/icon-nest.svg" },
  { name: "Socket.io", src: "/skills/icon-socket.svg" },
  { name: "PostgreSQL", src: "/skills/icon-postgresql.svg" },
  { name: "MongoDB", src: "/skills/icon-mongodb.svg" },
  { name: "Sass/Scss", src: "/skills/icon-sass.svg" },
  { name: "Tailwindcss", src: "/skills/icon-tailwindcss.svg" },
  { name: "Figma", src: "/skills/icon-figma.svg" },
  { name: "Cypress", src: "/skills/icon-cypress.svg" },
  { name: "Storybook", src: "/skills/icon-storybook.svg" },
  { name: "Git", src: "/skills/icon-git.svg" },
];

export default function Skills() {
  // Seu useEffect original para o hover (INTOCADO)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        50% { transform: translateX(2px); }
        75% { transform: translateX(-1px); }
        100% { transform: translateX(0); }
      }
      .shake-hover:hover {
        animation: shake 0.3s ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Lógica de animação de entrada (Scroll Trigger)
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  // useEffect separado para a animação de entrada
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Variantes para as animações
  const titleVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const gridContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const skillItemVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <section
      ref={ref}
      className="bg-[#010512] w-full py-16 text-white text-center px-4 overflow-hidden"
    >
      <div className="max-w-[1128px] mx-auto">
        <motion.span
          className="text-sm bg-gray-700 font-medium text-gray-300 px-4 py-2 rounded-full mb-4 inline-block"
          variants={titleVariants}
          initial="hidden"
          animate={mainControls}
        >
          Habilidades
        </motion.span>
        <motion.h2
          className="text-xl sm:text-2xl text-gray-300 mb-8"
          variants={titleVariants}
          initial="hidden"
          animate={mainControls}
        >
          As habilidades, ferramentas e tecnologias em que sou realmente bom:
        </motion.h2>

        <motion.div
          className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-6 justify-items-center"
          variants={gridContainerVariants}
          initial="hidden"
          animate={mainControls}
        >
          {skills.map((skill) => (
            // Sua DIV original foi transformada em motion.div
            // Adicionado "transform-gpu" para auxiliar na renderização de animações
            <motion.div
              key={skill.name}
              className="flex flex-col items-center text-gray-300 text-sm hover:scale-105 transition-transform shake-hover transform-gpu"
              variants={skillItemVariants}
            >
              <div className="w-10 h-10 mb-1.5 relative">
                <Image
                  src={skill.src}
                  alt={skill.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
