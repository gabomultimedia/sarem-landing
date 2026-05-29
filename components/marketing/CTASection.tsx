"use client";

import { useState } from "react";
import { Shield, Lock, Award } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import DemoModal from "@/components/ui/DemoModal";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 lg:py-32 bg-deep-navy-dark relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #b5ebff 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/30" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-white mb-6">
              Transforma tu clínica hoy
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-lg text-white/80 font-kanit-light max-w-2xl mx-auto mb-10">
              Únete a las cientos de clínicas médicas en México que ya están
              ahorrando tiempo y ofreciendo mejor atención con SAREM.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Button size="lg" className="group" onClick={() => setDemoModalOpen(true)}>
              Solicitar Demo Gratuita
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </ScrollReveal>

          {/* Trust indicators */}
          <ScrollReveal delay={0.3} className="mt-12 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-white/60">
              <Shield size={20} />
              <span className="text-sm font-kanit-light">Datos encriptados</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Lock size={20} />
              <span className="text-sm font-kanit-light">Cumplimiento LFPDPPP</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Award size={20} />
              <span className="text-sm font-kanit-light">Certificación ISO 27001</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </>
  );
}