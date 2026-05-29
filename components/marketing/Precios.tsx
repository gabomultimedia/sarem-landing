"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Básico",
    price: "2,295",
    period: "mes",
    description: "Para consultorios individuales",
    features: [
      "Hasta 100 pacientes",
      "Agenda básica",
      "Expediente electrónico",
      "1 usuario",
      "Soporte por email",
    ],
  },
  {
    name: "Intermedio",
    price: "3,000",
    period: "mes",
    description: "Para clínicas en crecimiento",
    features: [
      "Hasta 500 pacientes",
      "Agenda inteligente",
      "Expediente + notas evolutivas",
      "5 usuarios",
      "WhatsApp IA básico",
      "Reportes básicos",
    ],
    popular: true,
  },
  {
    name: "Avanzado",
    price: "4,000",
    period: "mes",
    description: "Para clínicas establecidas",
    features: [
      "Pacientes ilimitados",
      "Agenda + recueropardatorios",
      "Expediente completo",
      "20 usuarios",
      "WhatsApp IA avanzado",
      "Reportes avanzados",
      "API integrations",
      "Support priority 24/7",
    ],
  },
];

export default function Precios() {
  return (
    <section id="precios" className="py-20 lg:py-32 bg-gradient-to-b from-surface to-surface-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
            Precios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4 mb-6">
            Inversión simple, resultados claros
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
            Sin costos ocultos. Sin contratos a largo plazo. Cancela cuando quieras.
          </p>
        </ScrollReveal>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: plan.popular ? -8 : -4 }}
                className={`relative h-full bg-surface-white rounded-2xl p-8 border ${
                  plan.popular
                    ? "border-secondary shadow-2xl shadow-secondary/20"
                    : "border-surface-container"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-secondary text-white text-sm font-kanit-medium">
                      Más Popular
                    </span>
                  </div>
                )}

                {/* Plan header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-kanit-semibold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-kanit-bold text-primary">
                      ${plan.price}
                    </span>
                    <span className="text-on-surface-variant ml-1">/{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        size={18}
                        className="text-success-mint flex-shrink-0 mt-0.5"
                      />
                      <span className="text-on-surface-variant text-sm font-kanit-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  Comenzar Prueba Gratis
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Guarantee note */}
        <ScrollReveal className="text-center mt-12">
          <p className="text-on-surface-variant text-sm">
            ¿No estás seguro?{" "}
            <span className="text-secondary font-kanit-medium">
              Prueba gratis 14 días
            </span>{" "}
            — sin compromiso.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}