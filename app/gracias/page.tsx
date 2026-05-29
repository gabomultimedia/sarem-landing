"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ConfirmationCheck from "@/components/thankyou/ConfirmationCheck";
import ActionCards from "@/components/thankyou/ActionCards";
import Testimonial from "@/components/thankyou/Testimonial";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-surface via-surface to-surface-container flex flex-col">
      {/* Header */}
      <header className="py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/logos/SAREM_Logos_color.png"
            alt="SAREM - Sistema de Gestión Médica Inteligente"
            width={140}
            height={45}
            className="mx-auto h-10 w-auto"
          />
        </motion.div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Confirmation check */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <ConfirmationCheck />
        </motion.div>

        {/* Success message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mb-4">
            ¡Tu solicitud fue recibida!
          </h1>
          <p className="text-lg text-on-surface-variant font-kanit-light max-w-md mx-auto">
            Gracias por tu interés en SAREM. Nuestro equipo se pondrá en contacto
            contigo en las próximas 24 horas.
          </p>
        </motion.div>

        {/* Action cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <ActionCards />
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full mt-12"
        >
          <Testimonial />
        </motion.div>
      </div>

      {/* Minimal footer */}
      <footer className="py-6 text-center border-t border-surface-container">
        <div className="flex items-center justify-center gap-6 text-sm text-on-surface-variant">
          <a href="mailto:hola@sarem.mx" className="hover:text-secondary transition-colors">
            Contacto
          </a>
        </div>
      </footer>
    </main>
  );
}