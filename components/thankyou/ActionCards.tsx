"use client";

import { Mail, Home, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const actions = [
  {
    icon: Mail,
    title: "Escribir por correo",
    description: "Mándanos un mensaje a contacto@abundiss.com.",
    href: "mailto:contacto@abundiss.com",
    color: "bg-blue-500",
  },
  {
    icon: BookOpen,
    title: "Conocer más del sistema",
    description: "Revisa las funcionalidades y planes disponibles.",
    href: "#caracteristicas",
    color: "bg-secondary",
  },
  {
    icon: Home,
    title: "Volver al inicio",
    description: "Regresa a la página principal y revisa el sistema.",
    href: "/",
    color: "bg-primary",
  },
];

export default function ActionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {actions.map((action, index) => (
        <ScrollReveal key={action.title} delay={0.3 + index * 0.1}>
          <motion.a
            href={action.href}
            className="group bg-surface-white rounded-2xl p-6 border border-surface-container hover:border-secondary-fixed hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
            whileHover={{ y: -4 }}
          >
            <div
              className={`w-14 h-14 rounded-xl ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
            >
              <action.icon size={28} className="text-white" />
            </div>
            <h3 className="font-kanit-semibold text-primary mb-2">
              {action.title}
            </h3>
            <p className="text-sm text-on-surface-variant font-kanit-light">
              {action.description}
            </p>
          </motion.a>
        </ScrollReveal>
      ))}
    </div>
  );
}
