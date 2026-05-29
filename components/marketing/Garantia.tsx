"use client";

import { ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Garantia() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative bg-success-mint/10 rounded-3xl p-8 lg:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-success-mint/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-success-mint/20 flex items-center justify-center">
                  <ShieldCheck size={40} className="text-success-mint" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-kanit-bold text-primary mb-3">
                  Garantía de satisfacción 90 días
                </h2>
                <p className="text-on-surface-variant font-kanit-light text-lg">
                  Si SAREM no transforma la gestión de tu clínica en los primeros 90
                  días, te devolvemos el 100% de tu inversión. Sin preguntas, sin
                  complicaciones.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}