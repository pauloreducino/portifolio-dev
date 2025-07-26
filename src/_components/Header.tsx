"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#010512] text-white transition-colors duration-300">
      <div className="max-w-[1128px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">{"<SS />"}</div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 text-[16px] items-center">
          <a href="#about" className="hover:text-gray-400 transition">
            Sobre
          </a>
          <a href="#work" className="hover:text-gray-400 transition">
            Trabalhos
          </a>
          <a href="#testimonials" className="hover:text-gray-400 transition">
            Testemunhos
          </a>
          <a href="#contact" className="hover:text-gray-400 transition">
            Contato
          </a>

          {/* Separador */}
          <div className="w-px h-5 bg-gray-600" />

          {/* Botão Download CV */}
          <Link href="/cv.pdf" download>
            <button className="ml-2 bg-white text-black text-sm px-4 py-2 rounded-xl hover:bg-gray-200 transition cursor-pointer">
              Download CV
            </button>
          </Link>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded hover:bg-white/10 transition"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Conteúdo do menu mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 transition">
          <nav className="flex flex-col gap-4 text-sm">
            <a href="#about" className="hover:text-gray-400 transition">
              Sobre
            </a>
            <a href="#work" className="hover:text-gray-400 transition">
              Trabalhos
            </a>
            <a href="#testimonials" className="hover:text-gray-400 transition">
              Testemunhos
            </a>
            <a href="#contact" className="hover:text-gray-400 transition">
              Contato
            </a>

            <div className="flex items-center justify-end mt-4">
              <Link href="/cv.pdf" download>
                <button className="bg-white text-black text-sm px-4 py-2 rounded-xl hover:bg-gray-200 transition cursor-pointer">
                  Download CV
                </button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
