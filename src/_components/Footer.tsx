"use client";

import React, { useState } from "react";

// 1. ÍCONES SVG (Definidos localmente para manter o componente autossuficiente)

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const CopyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
  </svg>
);
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const FigmaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

// 2. COMPONENTE PRINCIPAL DO FOOTER

const Footer: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, itemName: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopiedItem(itemName);
          setTimeout(() => {
            setCopiedItem(null);
          }, 2000); // Mostra a mensagem "Copied!" por 2 segundos
        })
        .catch((err) => {
          console.error("Falha ao copiar texto: ", err);
          // Opcional: Implementar um fallback, como um prompt para o usuário copiar manualmente.
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Evita rolagem na página
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopiedItem(itemName);
        setTimeout(() => setCopiedItem(null), 2000);
      } catch (err) {
        console.error("Falha ao usar execCommand para copiar texto: ", err);
      }
      document.body.removeChild(textArea);
    }
  };

  const email = "paulo.a.reducino@gmail.com";
  const phone = "+55 98 97026-5510";

  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/pauloreducino",
      icon: <GithubIcon />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/pauloreducino",
      icon: <LinkedinIcon />,
    },
    {
      name: "Figma",
      href: "https://figma.com/@pauloreducino",
      icon: <FigmaIcon />,
    },
  ];

  return (
    <footer className="bg-[#010512] py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Badge */}
        <div className="mb-8">
          <span className="bg-gray-700 text-gray-300 text-sm font-medium px-4 py-2 rounded-full">
            Entre em contato
          </span>
        </div>

        {/* Texto principal */}
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Estou disponível para novos projetos e parcerias. Se você procura um
          desenvolvedor para transformar sua ideia em realidade ou fortalecer
          sua equipe, adoraria conversar sobre seus objetivos.
        </p>

        {/* Informações de Contato */}
        <div className="flex flex-col items-center gap-6 mb-10">
          {/* Email */}
          <div className="flex items-center gap-4 text-lg md:text-2xl font-semibold text-gray-100">
            <MailIcon />
            <span>{email}</span>
            <button
              onClick={() => handleCopy(email, "email")}
              className="p-1 rounded-md hover:bg-gray-700 transition-colors relative"
              aria-label="Copy email address"
            >
              <CopyIcon />
              {copiedItem === "email" && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </button>
          </div>
          {/* Telefone */}
          <div className="flex items-center gap-4 text-lg md:text-2xl font-semibold text-gray-100">
            <PhoneIcon />
            <span>{phone}</span>
            <button
              onClick={() => handleCopy(phone, "phone")}
              className="p-1 rounded-md hover:bg-gray-700 transition-colors relative"
              aria-label="Copy phone number"
            >
              <CopyIcon />
              {copiedItem === "phone" && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Links Sociais */}
        <div>
          <p className="text-gray-400 mb-4">
            Você também pode me encontrar nessas plataformas!
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visite meu perfil no ${link.name}`}
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
