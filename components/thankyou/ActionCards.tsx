"use client";

import { MessageCircle, PlayCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const actions = [
  {
    icon: MessageCircle,
    title: "Chatear por WhatsApp",
    description: "Resuelve dudas al instante con nuestro equipo.",
    href: "https://wa.me/5215512345678",
    color: "bg-green-500",
  },
  {
    icon: PlayCircle,
    title: "Ver Video Demo",
    description: "Conoce SAREM en acción en 3 minutos.",
    href: "#",
    color: "bg-blue-500",
  },
  {
    icon: FileText,
    title: "Descargar Brochure",
    description: "PDF con todas las características.",
    href: "#",
    color: "bg-purple-500",
  },
];

export default function ActionCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {actions.map((action, index) => (
        <ScrollReveal key={action.title} delay={0.3 + index * 0.1}>
          <motion.a
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
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