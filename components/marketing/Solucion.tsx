"use client";

import { Monitor, MessageCircle, Brain } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const solutions = [
  {
    icon: Monitor,
    title: "EMR Dinámico",
    description:
      "Historial clínico electrónico adaptable a cualquier especialidad. Configúralo sin código.",
  },
  {
    icon: MessageCircle,
    title: "Asistente IA WhatsApp",
    description:
      "Responde citas, envía recordatorios y responde preguntas frecuentes automáticamente.",
  },
  {
    icon: Brain,
    title: "Cerebro Digital",
    description:
      "Aprende de cada interacción para predecir necesidades y optimizar procesos.",
  },
];

export default function Solucion() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-surface to-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
            La Solución
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4 mb-6">
            Un sistema que trabaja por ti
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            SAREM centraliza toda la información de tu clínica en una plataforma
            inteligente que aprende y evoluciona.
          </p>
        </ScrollReveal>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} delay={index * 0.15}>
              <div className="group h-full bg-surface-white rounded-2xl p-8 border border-secondary-fixed/30 hover:border-secondary shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-secondary-fixed/20 flex items-center justify-center mb-6 group-hover:bg-secondary-fixed/40 transition-colors">
                  <solution.icon
                    size={28}
                    className="text-secondary group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-kanit-semibold text-primary mb-3">
                  {solution.title}
                </h3>
                <p className="text-on-surface-variant font-kanit-light leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}