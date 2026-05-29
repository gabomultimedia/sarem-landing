"use client";

import { Calendar, Users, CreditCard, BarChart3 } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const useCases = [
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Citas automáticas, recordatorios y re-agendado sin intervención.",
  },
  {
    icon: Users,
    title: "Gestión de Pacientes",
    description: "Expediente electrónico completo con historial y notas clínicas.",
  },
  {
    icon: CreditCard,
    title: "Facturación y Cobros",
    description: "Tiendas de pago, contratos y控制系统 de cobranza.",
  },
  {
    icon: BarChart3,
    title: "Reportes en Tiempo Real",
    description: "Métricas de ocupación, ingresos y productividad del personal.",
  },
];

export default function CasosDeUso() {
  return (
    <section className="py-20 lg:py-32 bg-surface-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4 mb-6">
            Todo lo que necesitas en un solo lugar
          </h2>
        </ScrollReveal>

        {/* Use Case Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <ScrollReveal key={useCase.title} delay={index * 0.1}>
              <div className="group bg-surface rounded-2xl p-6 border border-surface-container hover:border-secondary-fixed hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-secondary-fixed/10 flex items-center justify-center mb-4 group-hover:bg-secondary-fixed/20 transition-colors">
                  <useCase.icon
                    size={24}
                    className="text-secondary"
                  />
                </div>
                <h3 className="text-lg font-kanit-semibold text-primary mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-kanit-light">
                  {useCase.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}