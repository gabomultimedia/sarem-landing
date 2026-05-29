"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const mockupSpecs = [
  {
    name: "Dashboard Preview",
    dimensions: "900x1000px",
    description: "Vista del dashboard principal con métricas y gráficos en tiempo real",
    suggestedUse: "Dashboard del sistema SAREM",
  },
  {
    name: "Agenda Interface",
    dimensions: "900x1000px",
    description: "Vista de la agenda inteligente con citas y calendario",
    suggestedUse: "Sistema de agendamiento",
  },
  {
    name: "WhatsApp Integration",
    dimensions: "900x1000px",
    description: "Mockup del asistente IA en conversación de WhatsApp",
    suggestedUse: "Integración con WhatsApp",
  },
];

export default function SistemaPreview() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-surface-container to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
            El Sistema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4 mb-6">
            Interfaz diseñada para la eficiencia médica
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Una experiencia de usuario intuitiva que reduce la curva de aprendizaje
            y maximiza la productividad de tu equipo.
          </p>
        </ScrollReveal>

        {/* Mockup Placeholders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockupSpecs.map((mockup, index) => (
            <ScrollReveal key={mockup.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-surface-white rounded-3xl overflow-hidden shadow-xl border-2 border-dashed border-secondary/30"
              >
                {/* Placeholder Image Area */}
                <div className="relative bg-gradient-to-br from-surface to-surface-container aspect-[9/10] flex flex-col items-center justify-center p-6">
                  {/* Placeholder SVG */}
                  <svg
                    className="w-20 h-20 text-secondary/30 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  <div className="text-center">
                    <p className="text-sm font-kanit-medium text-on-surface-variant">
                      {mockup.dimensions}
                    </p>
                    <p className="text-xs text-secondary mt-1">
                      {mockup.suggestedUse}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-kanit-semibold text-primary mb-2">
                    {mockup.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant font-kanit-light">
                    {mockup.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Designer Note */}
        <ScrollReveal className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-kanit-semibold text-primary mb-1">
                Nota para el diseñador
              </h4>
              <p className="text-sm text-on-surface-variant font-kanit-light">
                Se requieren capturas reales del sistema SAREM para completar esta
                sección. Las medidas indicadas son las óptimas para cada espacio.
                Por favor, exporta las imágenes en formato PNG con fondo transparente
                y mínimo 2x para retina.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center mt-12">
          <p className="text-on-surface-variant mb-4">
            ¿Quieres ver el sistema en acción?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-secondary font-kanit-medium hover:underline"
          >
            Solicita una demostración personalizada
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}