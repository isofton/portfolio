import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransitionOverlay } from "@/components/layout/PageTransitionOverlay";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Experience } from "@/components/sections/Experience";
import { Work } from "@/components/sections/Work";
import { Research } from "@/components/sections/Research";
import { Skills } from "@/components/sections/Skills";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";

export default function App() {
  return (
    <>
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10 opacity-50" aria-hidden />
      <ScrollProgress />
      <PageTransitionOverlay />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Work />
        <Research />
        <Skills />
        <Background />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
