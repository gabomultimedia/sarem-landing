"use client";

import { Eye, Database, FileText } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const problems = [
  {
    icon: Eye,
    title: "Visibilidad Cero",
    description:
      "No sabes qué pasa en tu clínica al instante. Papeles perdidos, horarios desactualizados y pacientes que se escapan.",
  },
  {
    icon: Database,
    title: "Islas de Información",
    description:
      "Cadadoctor tiene su propia tabla de Excel. No hay forma de tener una visión completa del paciente.",
  },
  {
    icon: FileText,
    title: "Laberinto Administrativo",
    description:
      "Horas perdidas entre papeles, firmas y approvals. Tu staff gasta más tiempo administrando que atendiendo.",
  },
];

export default function Problema() {
  return (
    <section id="caracteristicas" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
            El Problema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4 mb-6">
            ¿Te suena familiar?
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            La mayoría de las clínicas médicas en México operan con sistemas
            fragmentados que generan más problemas que soluciones.
          </p>
        </ScrollReveal>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <ScrollReveal key={problem.title} delay={index * 0.15}>
              <div className="group h-full bg-surface-white rounded-2xl p-8 border border-surface-container hover:border-secondary-fixed/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                  <problem.icon
                    size={28}
                    className="text-red-500 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-kanit-semibold text-primary mb-3">
                  {problem.title}
                </h3>
                <p className="text-on-surface-variant font-kanit-light leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}