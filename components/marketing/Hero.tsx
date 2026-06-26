"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import DemoModal from "@/components/ui/DemoModal";

const heroImage = encodeURI("/imgsssarem/TODO EN UNO.webp");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const trustItems = [
  { icon: ShieldCheck, label: "Datos protegidos" },
  { icon: Sparkles, label: "Implementación rápida" },
  { icon: Users, label: "Hecho para clínicas reales" },
];

export default function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-surface pt-24 lg:pt-28">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Vista del sistema SAREM en escritorio y móvil"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-white/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-white/85 to-white/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,218,253,0.35),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(10,13,111,0.16),transparent_32%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] min-h-[calc(100vh-7rem)]">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-white/80 px-4 py-2 text-sm font-kanit-medium text-secondary shadow-sm backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-success-mint animate-pulse" />
                  Nueva generación de gestión médica
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-kanit-bold text-primary leading-tight mb-6"
              >
                El cerebro que tu{" "}
                <span className="text-secondary">clínica médica</span> necesita
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl lg:text-2xl text-on-surface-variant font-kanit-light max-w-xl mb-10"
              >
                SAREM unifica historias clínicas, citas, finanzas e IA conversacional
                en un solo sistema inteligente que trabaja 24/7.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <Button size="lg" className="group" onClick={() => setDemoModalOpen(true)}>
                  Solicitar Demo Gratis
                  <ArrowRight
                    size={20}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Button>
                <Button as="a" href="#precios" variant="outline" size="lg">
                  Ver planes
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-12 grid gap-3 sm:grid-cols-3"
              >
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-[0_18px_40px_rgba(10,13,111,0.06)] backdrop-blur"
                    >
                      <Icon className="mb-3 h-5 w-5 text-secondary" />
                      <p className="text-sm font-kanit-medium text-on-surface">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-secondary/10 via-white/0 to-primary/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 shadow-[0_30px_90px_rgba(10,13,111,0.18)] backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/15 to-white/60" />
                <Image
                  src={heroImage}
                  alt="SAREM mostrado sobre un fondo limpio y luminoso"
                  width={1600}
                  height={1600}
                  priority
                  className="h-[520px] w-full object-cover object-center lg:h-[680px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/82 via-white/25 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-lg backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.24em] text-on-surface-variant">
                      Tiempo de respuesta
                    </p>
                    <p className="mt-2 text-2xl font-kanit-bold text-primary">24 h</p>
                  </div>
                  <div className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-lg backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.24em] text-on-surface-variant">
                      Canales
                    </p>
                    <p className="mt-2 text-2xl font-kanit-bold text-primary">CRM + WhatsApp</p>
                  </div>
                  <div className="rounded-2xl border border-white/80 bg-white/85 p-4 shadow-lg backdrop-blur">
                    <p className="text-xs uppercase tracking-[0.24em] text-on-surface-variant">
                      Configuración
                    </p>
                    <p className="mt-2 text-2xl font-kanit-bold text-primary">Rápida</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-secondary/40 p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-secondary"
            />
          </div>
        </motion.div>
      </section>

      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </>
  );
}
