"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import Button from "@/components/ui/Button";

const demoFormSchema = z.object({
  nombre: z.string().min(2, "Nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefono: z.string().min(10, "Teléfono debe tener 10 dígitos"),
  clinica: z.string().min(2, "Nombre de clínica requerido"),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
      window.location.href = "/gracias";
    }, 2000);
  };

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
              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-5">
                {/* Nombre */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    {...register("nombre")}
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Dra. María González"
                  />
                  {errors.nombre && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.nombre.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="maria@clinicagf.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Teléfono (WhatsApp)
                  </label>
                  <input
                    id="telefono"
                    type="tel"
                    {...register("telefono")}
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="55 1234 5678"
                  />
                  {errors.telefono && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.telefono.message}
                    </p>
                  )}
                </div>

                {/* Clínica */}
                <div>
                  <label
                    htmlFor="clinica"
                    className="block text-sm font-kanit-medium text-primary mb-1.5"
                  >
                    Nombre de tu clínica
                  </label>
                  <input
                    id="clinica"
                    type="text"
                    {...register("clinica")}
                    className="w-full px-4 py-3 rounded-xl border border-surface-container bg-surface-white text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                    placeholder="Clínica de Medicina Familiar"
                  />
                  {errors.clinica && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.clinica.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || isSuccess}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={20} />
                      Enviando...
                    </span>
                  ) : isSuccess ? (
                    "¡Enviado con éxito!"
                  ) : (
                    "Solicitar Demo"
                  )}
                </Button>

                <p className="text-center text-xs text-on-surface-variant">
                  Al enviar aceptas nuestra{" "}
                  <a href="#" className="text-secondary hover:underline">
                    política de privacidad
                  </a>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}