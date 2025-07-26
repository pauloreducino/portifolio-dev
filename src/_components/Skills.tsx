"use client";

import Image from "next/image";
import { useEffect } from "react";

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

  return (
    <section className="bg-[#010512] w-full py-16 text-white text-center px-4">
      <div className="max-w-[1128px] mx-auto">
        <span className="text-sm bg-gray-700 font-medium text-gray-300 px-4 py-2 rounded-full mb-4 inline-block">
          Habilidades
        </span>
        <h2 className="text-xl sm:text-2xl text-gray-300 mb-8">
          As habilidades, ferramentas e tecnologias em que sou realmente bom:
        </h2>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-6 justify-items-center">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center text-gray-300 text-sm hover:scale-105 transition-transform shake-hover"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
