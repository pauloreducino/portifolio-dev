"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-900 w-full py-20 px-4 text-white">
      <div className="max-w-[1128px] mx-auto flex flex-col gap-10">
        {/* Título da seção */}
        <h2 className="text-white text-2xl sm:text-3xl font-bold">About me</h2>

        {/* Conteúdo: imagem + texto */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Imagem com frame à esquerda e embaixo */}
          <div className="relative w-[280px] sm:w-[320px] lg:w-[360px] h-[420px] sm:h-[460px] lg:h-[500px]">
            {/* Frame */}
            <div className="absolute left-0 bottom-0 w-full h-full bg-[#374151] border-l-[20px] border-b-[20px] border-[#111827] translate-x-[-12px] translate-y-[12px] z-0" />
            {/* Imagem */}
            <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden rounded-md">
              <Image
                src="/hero/v1.png"
                alt="About me"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="max-w-2xl text-sm sm:text-base text-gray-300">
            <h3 className="text-white text-xl sm:text-2xl font-semibold mb-6">
              Curious about me? Here you have it:
            </h3>

            <p className="mb-4">
              I'm a passionate,{" "}
              <a href="#" className="underline text-white hover:text-gray-200">
                self-proclaimed designer
              </a>{" "}
              who specializes in full stack development (React.js & Node.js). I
              am very enthusiastic about bringing the technical and visual
              aspects of digital products to life. User experience, pixel
              perfect design, and writing clear, readable, highly performant
              code matters to me.
            </p>

            <p className="mb-4">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>

            <p className="mb-4">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>

            <p className="mb-4">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on{" "}
              <a href="#" className="underline text-white hover:text-gray-200">
                Twitter
              </a>{" "}
              where I share tech-related bites and build in public, or you can
              follow me on{" "}
              <a href="#" className="underline text-white hover:text-gray-200">
                GitHub
              </a>
              .
            </p>

            <div className="grid grid-cols-2 gap-y-2 mb-4">
              <li>B.E. in Computer Engineering</li>
              <li>Avid learner</li>
              <li>Full time freelancer</li>
              <li>Aspiring indie hacker</li>
            </div>

            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite{" "}
              <span className="text-xl">😉</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
