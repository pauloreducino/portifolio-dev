"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-[#010512] text-white transition-colors duration-300 fixed w-full z-50">
      <div className="max-w-[1128px] mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="text-lg font-bold cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          {"<SS />"}
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex gap-6 text-[16px] items-center">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-400 transition"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("work")}
            className="hover:text-gray-400 transition"
          >
            Trabalhos
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="hover:text-gray-400 transition"
          >
            Testemunhos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-400 transition"
          >
            Contato
          </button>

          {/* Separador */}
          <div className="w-px h-5 bg-gray-600" />

          {/* Botão Download CV */}
          <Link
            href="/curriculo/Curriculo_Paulo_Reducino_Dev_Frontend.pdf"
            download
          >
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
            <button
              onClick={() => {
                scrollToSection("about");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-gray-400 transition"
            >
              Sobre
            </button>
            <button
              onClick={() => {
                scrollToSection("work");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-gray-400 transition"
            >
              Trabalhos
            </button>
            <button
              onClick={() => {
                scrollToSection("testimonials");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-gray-400 transition"
            >
              Testemunhos
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setIsMobileMenuOpen(false);
              }}
              className="hover:text-gray-400 transition"
            >
              Contato
            </button>

            <div className="flex items-center justify-end mt-4">
              <Link
                href="/curriculo/Curriculo_Paulo_Reducino_Dev_Frontend.pdf"
                download
              >
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
