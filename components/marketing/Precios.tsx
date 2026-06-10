"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import DemoModal from "@/components/ui/DemoModal";

type Plan = {
  name: string;
  ideal: string;
  price: string;
  users: string;
  storage: string;
  features: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "Sistema Básico",
    ideal: "Ideal para consultorios y médicos independientes",
    price: "$2,295 MXN / mes",
    users: "3 usuarios",
    storage: "2 GB",
    features: [
      "Agenda y citas",
      "Expediente clínico ilimitado",
      "Historia clínica y notas de evolución",
      "Recetas y archivos básicos",
      "Caja, pagos, ingresos y egresos",
      "Reportes básicos",
      "Usuarios y accesos",
      "Asistente Ejecutivo de IA (inicial)",
    ],
  },
  {
    name: "Sistema Intermedio",
    ideal: "Ideal para clínicas con staff, inventario y comisiones",
    price: "$3,000 MXN / mes",
    users: "5 usuarios",
    storage: "4 GB",
    features: [
      "Todo lo del Sistema Básico",
      "Bodega e inventarios",
      "Requisición de insumos",
      "Devoluciones a almacén",
      "Compras a proveedores",
      "Corte de comisiones médicas",
      "Catálogos y procesos operativos",
      "IA avanzada + Cerebro Digital básico",
    ],
    highlight: true,
  },
  {
    name: "Sistema Avanzado",
    ideal: "Ideal para clínicas grandes y centros con estructura comercial",
    price: "$4,000 MXN / mes",
    users: "10 usuarios",
    storage: "6 GB",
    features: [
      "Todo lo del Sistema Intermedio",
      "Tablas dinámicas de comisiones",
      "Unidad de negocio / multisucursal",
      "Compras y control más robusto",
      "Integración con Kommo CRM",
      "Reportes ejecutivos avanzados",
      "Asistente Ejecutivo de IA completo",
      "Cerebro Digital avanzado",
    ],
  },
  {
    name: "Sistema Personalizado",
    ideal: "A la medida para clínicas u hospitales con requerimientos especiales",
    price: "A cotización",
    users: "A convenir",
    storage: "A convenir",
    features: [
      "Desarrollo e implementación de módulos específicos según las necesidades y flujos de trabajo de la organización.",
    ],
  },
];

const benefits = [
  "Expedientes clínicos ilimitados en todos los planes.",
  "Infraestructura segura en la nube.",
  "Personalización disponible según la clínica.",
];

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-2 text-sm text-on-surface-variant">
          <Check size={16} className="mt-0.5 flex-shrink-0 text-success-mint" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function PlanCard({ plan, onAction }: { plan: Plan; onAction: () => void }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`relative h-full overflow-hidden rounded-3xl border bg-surface-white p-6 lg:p-7 shadow-lg transition-all ${
        plan.highlight ? "border-secondary shadow-secondary/15 ring-1 ring-secondary/10" : "border-surface-container"
      }`}
    >
      {plan.highlight && (
        <span className="absolute top-5 right-5 rounded-full bg-secondary px-3 py-1 text-xs font-kanit-semibold text-white">
          Más recomendado
        </span>
      )}

      <div className="pr-24">
        <h3 className="text-2xl font-kanit-bold text-primary">{plan.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">{plan.ideal}</p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-surface p-4">
          <p className="text-xs uppercase tracking-wider text-on-surface-variant">Costo mensual</p>
          <p className="mt-2 text-lg font-kanit-semibold text-primary">{plan.price}</p>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <p className="text-xs uppercase tracking-wider text-on-surface-variant">Usuarios</p>
          <p className="mt-2 text-lg font-kanit-semibold text-primary">{plan.users}</p>
        </div>
        <div className="col-span-2 rounded-2xl bg-surface p-4">
          <p className="text-xs uppercase tracking-wider text-on-surface-variant">Almacenamiento</p>
          <p className="mt-2 text-lg font-kanit-semibold text-primary">{plan.storage}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-wider text-on-surface-variant mb-3">Funcionalidades</p>
        <FeatureList features={plan.features} />
      </div>

      <Button
        variant={plan.highlight ? "primary" : "outline"}
        className="mt-6 w-full"
        onClick={onAction}
      >
        Solicitar demo
        <ArrowRight size={18} className="ml-2" />
      </Button>
    </motion.article>
  );
}

export default function Precios() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <section id="precios" className="py-20 lg:py-32 bg-gradient-to-b from-surface to-surface-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="text-secondary font-kanit-medium text-sm uppercase tracking-wider">
              Precios
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-kanit-bold text-primary mt-4 mb-6">
              Comparativo de soluciones para clínicas y consultorios
            </h2>
            <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
              Elige el plan que mejor se adapte a tu operación, o pídelo a la medida
              si tu clínica necesita flujos y módulos especiales.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 0.08}>
                <PlanCard plan={plan} onAction={() => setDemoModalOpen(true)} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10">
            <div className="rounded-[2rem] border border-secondary-fixed/30 bg-surface-white p-6 lg:p-8 shadow-lg">
              <div className="grid gap-3 md:grid-cols-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl bg-surface p-4 text-sm text-on-surface-variant"
                  >
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-success-mint" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
                <div>
                  <h3 className="text-2xl font-kanit-bold text-primary">
                    ¿Necesitas una propuesta alineada a tu operación?
                  </h3>
                  <p className="mt-2 text-on-surface-variant">
                    Agenda una demo y te ayudamos a definir el plan correcto para tu clínica.
                  </p>
                </div>
                <Button size="lg" className="group" onClick={() => setDemoModalOpen(true)}>
                  Solicitar demo
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}
