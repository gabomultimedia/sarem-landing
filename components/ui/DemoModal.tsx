"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-deep-navy-dark/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative bg-surface-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-container transition-colors"
              >
                <X size={20} className="text-on-surface-variant" />
              </button>

              {/* Header */}
              <div className="p-8 pb-0 text-center">
                <Image
                  src="/logos/SAREM_Logos_color.png"
                  alt="SAREM Logo"
                  width={120}
                  height={40}
                  className="mx-auto mb-4"
                />
                <h2 className="text-2xl font-kanit-bold text-primary mb-2">
                  Solicitar Demo Gratuita
                </h2>
                <p className="text-on-surface-variant font-kanit-light text-sm">
                  Completa el formulario y un especialista te contactará en 24
                  horas.
                </p>
              </div>

              {/* Form */}
              <form
                action="/api/contact"
                method="POST"
                acceptCharset="UTF-8"
                className="p-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    minLength={2}
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Dra. María González"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="maria@clinicagf.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Teléfono (WhatsApp)
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    minLength={10}
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="55 1234 5678"
                  />
                </div>

                <div>
                  <label
                    htmlFor="clinica"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Nombre de tu clínica
                  </label>
                  <input
                    id="clinica"
                    name="clinica"
                    type="text"
                    required
                    minLength={2}
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Clínica de Medicina Familiar"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Solicitar Demo
                </Button>

                <p className="text-center text-xs text-on-surface-variant">
                  Al enviar aceptas que te contactemos por email y WhatsApp para
                  dar seguimiento a tu solicitud.
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
