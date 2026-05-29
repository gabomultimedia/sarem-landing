"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function Testimonial() {
  return (
    <ScrollReveal delay={0.6}>
      <div className="relative bg-surface-white rounded-3xl p-8 lg:p-10 max-w-2xl mx-auto text-center border border-surface-container">
        {/* Quote icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2"
        >
          <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center">
            <svg
              className="w-5 h-5 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </motion.div>

        {/* Quote text */}
        <blockquote className="mt-6">
          <p className="text-lg lg:text-xl text-on-surface font-kanit-light leading-relaxed mb-6">
            "Desde que implementamos SAREM, reducimos el tiempo de gestión
            administrativa en un 70%. Mi staff tiene más tiempo para atender
            pacientes y nosotros tenemos visibilidad completa de las operaciones."
          </p>
          <footer className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary-container mb-3" />
            <cite className="not-italic">
              <span className="font-kanit-semibold text-primary block">
                Dra. María González
              </span>
              <span className="text-sm text-on-surface-variant">
                Clínica de Medicina Familiar, CDMX
              </span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </ScrollReveal>
  );
}