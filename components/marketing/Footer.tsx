"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

const footerLinks = {
  producto: [
    { label: "Características", href: "#caracteristicas" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" },
  ],
  contacto: [
    { label: "Contacto", href: "mailto:hola@sarem.mx" },
    { label: "WhatsApp", href: "https://wa.me/5215512345678" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-deep-navy-dark text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Image
                src="/logos/SAREM_Logos_blanco_BGtransparente.png"
                alt="SAREM - Sistema de Gestión Médica Inteligente"
                width={100}
                height={34}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-white/60 text-sm font-kanit-light mb-4">
              El sistema de gestión médica inteligente para clínicas modernas.
            </p>
            <p className="text-white/40 text-xs font-kanit-light">
              hola@sarem.mx
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-kanit-semibold mb-4 text-white/80">Producto</h4>
            <ul className="space-y-2">
              {footerLinks.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm font-kanit-light hover:text-secondary-fixed transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-kanit-semibold mb-4 text-white/80">Contacto</h4>
            <ul className="space-y-2">
              {footerLinks.contacto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm font-kanit-light hover:text-secondary-fixed transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm font-kanit-light">
            © 2026 SAREM. Todos los derechos reservados.
          </p>
          <a
            href="https://abundiss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-sm font-kanit-light hover:text-secondary-fixed transition-colors"
          >
            Hecho con <Heart size={14} className="inline text-red-400" /> por{" "}
            <span className="text-secondary-fixed">Abundiss Services</span>
          </a>
        </div>
      </div>
    </footer>
  );
}