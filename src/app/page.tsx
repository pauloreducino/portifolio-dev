// app/page.tsx

export const metadata = {
  title: "Início | Portfólio",
  description:
    "Bem-vindo ao meu portfólio! Veja meus projetos, experiências e habilidades como desenvolvedor Front-end.",
};

import Header from "../_components/Header";
import Hero from "../_components/Hero";
import About from "../_components/About";
import Skills from "../_components/Skills";
import ExperienceSection from "../_components/ExperienceSection";
import Work from "../_components/Work";
import Testmonial from "../_components/Testmonial";
import Footer from "../_components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Work />
      <Testmonial />
      <Footer />
    </>
  );
}
