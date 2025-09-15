// app/page.tsx
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
