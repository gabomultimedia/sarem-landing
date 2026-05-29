"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const faqs = [
  {
    question: "¿Cuánto tiempo toma implementar SAREM en mi clínica?",
    answer:
      "La implementación básica toma menos de 24 horas. Para configuraciones más complejas con integraciones existentes, puede tomar entre 3-5 días hábiles. Nuestro equipo de onboarding te acompañará en cada paso.",
  },
  {
    question: "¿Mis datos están seguros en SAREM?",
    answer:
      "Absolutamente. SAREM cumple con las normativas de protección de datos de México (LFPDPPP) y utiliza encriptación de grado médico. Todos los datos se respaldan diariamente y nunca compartimos tu información con terceros.",
  },
  {
    question: "¿Puedo integrar SAREM con mis sistemas actuales?",
    answer:
      "Sí, SAREM cuenta con APIs abiertas que permiten integración con sistemas de laboratorio, imagenología, farmacias y más. También ofrecemos conectores pre-configurados para los sistemas más populares en México.",
  },
  {
    question: "¿Qué pasa si necesito cancelar mi suscripción?",
    answer:
      "Puedes cancelar en cualquier momento desde tu panel de control. No hay contratos a largo plazo ni penalizaciones. Tus datos se mantienen accesibles por 90 días después de la cancelación para que puedas exportarlos.",
  },
  {
    question: "¿SAREM funciona en móviles?",
    answer:
      "Sí, SAREM es 100% responsivo y funciona perfectamente en cualquier dispositivo. También tenemos una app nativa para iOS y Android que incluye notificaciones push y acceso offline básico.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4">
            Preguntas Frecuentes
          </h2>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <div className="bg-surface-white rounded-2xl border border-surface-container overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container/50 transition-colors"
                >
                  <span className="font-kanit-medium text-primary pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-secondary flex-shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-on-surface-variant font-kanit-light leading-relaxed border-t border-surface-container pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}