"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";

type ShowcaseItem = {
  file: string;
  title: string;
  description: string;
  className: string;
  aspectClassName: string;
  objectPosition?: string;
};

const showcaseItems: ShowcaseItem[] = [
  {
    file: "TODO EN UNO.webp",
    title: "Todo en uno",
    description: "Vista integral del sistema para operación diaria y seguimiento clínico.",
    className: "xl:col-span-8",
    aspectClassName: "aspect-[16/10]",
    objectPosition: "object-center",
  },
  {
    file: "4.webp",
    title: "Visión ejecutiva",
    description: "Panel con métricas clave para dirección y supervisión de la clínica.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
  {
    file: "dashboard vertical.webp",
    title: "Dashboard operativo",
    description: "Seguimiento de pendientes, citas y actividad del equipo en tiempo real.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
  {
    file: "AGENDA CELULAR 1.webp",
    title: "Agenda inteligente",
    description: "Calendario móvil para validar citas y disponibilidad desde recepción.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
  {
    file: "AGENDA CELULAR 2.webp",
    title: "Agenda clínica",
    description: "Vista diaria de pacientes y bloques de atención para el equipo médico.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
  {
    file: "pagos.webp",
    title: "Cobros y pagos",
    description: "Monitoreo de pagos, movimientos y estados financieros en móvil.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
  {
    file: "VERTICAL PAGOS.webp",
    title: "Control financiero",
    description: "Listado vertical para revisar recibos, montos y pacientes al detalle.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
  {
    file: "Ingreacion wsp.webp",
    title: "Integración WhatsApp",
    description: "Comunicación conectada para mensajes y atención asistida con el equipo.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
  {
    file: "Asistente de IA por Comando de Voz.webp",
    title: "Asistente de IA",
    description: "Soporte conversacional para agilizar tareas y consultas del personal.",
    className: "xl:col-span-4",
    aspectClassName: "aspect-[4/5]",
    objectPosition: "object-center",
  },
];

export default function SistemaPreview() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-surface-container to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
            El sistema
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4 mb-6">
            Interfaz diseñada para la eficiencia médica
          </h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            Estas capturas muestran cómo SAREM organiza agenda, pagos, paneles
            ejecutivos y asistencia con IA en un flujo visual claro y fácil de usar.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 auto-rows-max gap-6">
          {showcaseItems.map((item, index) => {
            const src = `/imgsssarem/${encodeURIComponent(item.file)}`;
            const sizes = item.aspectClassName === "aspect-[16/10]"
              ? "(max-width: 1279px) 100vw, 66vw"
              : "(max-width: 1279px) 100vw, 33vw";

            return (
              <ScrollReveal key={item.file} delay={index * 0.08} className={item.className}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className={`group relative overflow-hidden rounded-3xl border border-surface-container bg-surface-white shadow-lg ${item.aspectClassName}`}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={src}
                      alt={item.title}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-[1.03] ${item.objectPosition ?? "object-center"}`}
                      sizes={sizes}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                      <h3 className="mt-3 text-xl font-kanit-bold text-white">{item.title}</h3>
                      <p className="mt-2 max-w-md text-sm leading-relaxed text-white/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-12 rounded-3xl border border-secondary-fixed/30 bg-primary/5 p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div>
              <h3 className="text-2xl font-kanit-bold text-primary">La experiencia completa está lista para mostrarse</h3>
              <p className="mt-2 text-on-surface-variant">
                Si quieres ver el flujo completo de agenda, cobros e IA, el siguiente paso es
                revisar los planes o solicitar una demo.
              </p>
            </div>
            <Button as="a" href="#precios" variant="outline" size="lg">
              Ver planes
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
