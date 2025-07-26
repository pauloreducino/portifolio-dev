"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-900 w-full py-20 px-4 text-white">
      <div className="max-w-[1128px] mx-auto flex flex-col gap-10">
        {/* Título da seção */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold">Sobre mim</h2>

        {/* Conteúdo: imagem + texto */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Imagem com frame à esquerda e embaixo */}
          <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] h-[420px] sm:h-[460px] lg:h-[500px]">
            {/* Frame */}
            <div className="absolute left-0 bottom-0 w-full h-full bg-[#374151] border-l-[20px] border-b-[20px] border-[#1B1F24] rounded-lg translate-x-[-12px] translate-y-[12px] z-0" />
            {/* Imagem */}
            <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden rounded-md">
              <Image
                src="/about/pauloreducino.jpg"
                alt="Sobre mim"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl text-sm sm:text-base text-gray-300">
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6">
              Curioso sobre mim? Aqui vai:
            </h3>

            <p className="mb-4">
              Sou desenvolvedor front-end com foco em criar interfaces modernas,
              acessíveis e bem estruturadas, sempre com um olhar atento ao
              design e à performance. Gosto de transformar ideias em soluções
              digitais reais — com código limpo, responsivo e escalável.
            </p>

            <p className="mb-4">
              Desde que comecei na área de desenvolvimento, venho me
              aprofundando em tecnologias como Next.js, React, TypeScript e
              Tailwind CSS. Minha abordagem é sempre guiada pelas boas práticas,
              documentação oficial e uma forte atenção aos detalhes visuais,
              seguindo fielmente os layouts (inclusive no pixel 🤓).
            </p>

            <p className="mb-4">
              Tenho paixão por aprender e experimentar novas stacks,
              especialmente quando envolvem animações, experiências interativas
              ou boas arquiteturas de componentes. Quando não estou codando,
              gosto de compartilhar aprendizados, criar projetos pessoais e
              participar de comunidades tech. Acredito que o conhecimento só faz
              sentido quando é compartilhado.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-6">
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
            </ul>

            <p>
              Se quiser trocar uma ideia, falar sobre projetos ou só bater um
              papo técnico, é só me chamar! Prometo responder sem muitos commits
              na frente <span className="text-xl">😄</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
