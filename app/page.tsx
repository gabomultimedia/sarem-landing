import Header from "@/components/marketing/Header";
import Hero from "@/components/marketing/Hero";
import Problema from "@/components/marketing/Problema";
import Solucion from "@/components/marketing/Solucion";
import SistemaPreview from "@/components/marketing/SistemaPreview";
import CasosDeUso from "@/components/marketing/CasosDeUso";
import Precios from "@/components/marketing/Precios";
import Garantia from "@/components/marketing/Garantia";
import FAQ from "@/components/marketing/FAQ";
import CTASection from "@/components/marketing/CTASection";
import Footer from "@/components/marketing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Solucion />
        <SistemaPreview />
        <CasosDeUso />
        <Precios />
        <Garantia />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}