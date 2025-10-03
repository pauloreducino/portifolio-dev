"use client";

import Image from "next/image";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";
import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const textContainerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const textItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageFrameVariants: Variants = {
    hidden: { x: -30, y: 30, opacity: 0 },
    visible: {
      x: -12,
      y: 12,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageItselfVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="about"
      className="bg-gray-900 w-full py-20 px-4 text-white overflow-hidden"
    >
      <div className="max-w-[1128px] mx-auto flex flex-col gap-10">
        <motion.h2
          className="text-white text-2xl sm:text-3xl font-bold"
          variants={textItemVariants}
          initial="hidden"
          animate={mainControls}
        >
          Sobre mim
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] h-[420px] sm:h-[460px] lg:h-[500px]">
            <motion.div
              className="absolute left-0 bottom-0 w-full h-full bg-[#374151] border-l-[20px] border-b-[20px] border-[#1B1F24] rounded-lg z-0"
              variants={imageFrameVariants}
              initial="hidden"
              animate={mainControls}
            />
            <motion.div
              className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden rounded-md"
              variants={imageItselfVariants}
              initial="hidden"
              animate={mainControls}
            >
              <Image
                src="/about/pauloreducino.jpg"
                alt="Sobre mim"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="max-w-2xl text-sm sm:text-base text-gray-300"
            variants={textContainerVariants}
            initial="hidden"
            animate={mainControls}
          >
            <motion.h3
              className="text-white text-xl sm:text-2xl font-semibold mb-6"
              variants={textItemVariants}
            >
              Curioso sobre mim? Aqui vai:
            </motion.h3>

            <motion.p className="mb-4" variants={textItemVariants}>
              Sou desenvolvedor front-end com foco em criar interfaces modernas,
              acessíveis e bem estruturadas, sempre com um olhar atento ao
              design e à performance. Gosto de transformar ideias em soluções
              digitais reais — com código limpo, responsivo e escalável.
            </motion.p>

            <motion.p className="mb-4" variants={textItemVariants}>
              Desde que comecei na área de desenvolvimento, venho me
              aprofundando em tecnologias como Next.js, React, TypeScript e
              Tailwind CSS. Minha abordagem é sempre guiada pelas boas práticas,
              documentação oficial e uma forte atenção aos detalhes visuais,
              seguindo fielmente os layouts (inclusive no pixel 🤓).
            </motion.p>

            <motion.p className="mb-4" variants={textItemVariants}>
              Tenho paixão por aprender e experimentar novas stacks,
              especialmente quando envolvem animações, experiências interativas
              ou boas arquiteturas de componentes. Quando não estou codando,
              gosto de compartilhar aprendizados, criar projetos pessoais e
              participar de comunidades tech. Acredito que o conhecimento só faz
              sentido quando é compartilhado.
            </motion.p>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6"
              variants={textItemVariants}
            >
              <li className="flex items-start gap-2">
                <span>🧠</span>
                <span>Estudante de Análise e Desenvolvimento de Sistemas</span>
              </li>
              <li className="flex items-start gap-2">
                <span>💼</span>
                <span>Desenvolvedor full time e freelancer</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🎯</span>
                <span>Foco em performance, acessibilidade e boas práticas</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🚀</span>
                <span>Explorando novas ideias como indie dev</span>
              </li>
            </motion.ul>

            <motion.p variants={textItemVariants}>
              Se quiser trocar uma ideia, falar sobre projetos ou só bater um
              papo técnico, é só me chamar! Prometo responder sem muitos commits
              na frente <span className="text-xl">😄</span>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
