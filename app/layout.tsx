import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
  display: "swap",
});

const seoMetadata = {
  title: "SAREM | Sistema de Gestión Médica Inteligente con IA para Clínicas en México",
  description:
    "SAREM es el sistema EMR dinámico con asistente IA de WhatsApp que transforma la gestión de clínicas médicas en México. Automatiza procesos, mejora la visibilidad y optimiza la experiencia del paciente. Prueba gratis.",
  keywords: [
    "sistema de gestión médica",
    "EMR México",
    "historia clínica electrónica",
    "gestión de clínicas",
    "software médico",
    "WhatsApp IA médica",
    "asistente virtual clínica",
    "citas médicas automatizadas",
    "facturación médica México",
    "software consultorio médico",
    "sistema hospitalario",
    "digitalización clínicas",
    "IA healthcare México",
    " agendamiento automático pacientes",
  ],
  authors: [{ name: "Abundiss Services", url: "https://abundiss.com" }],
  creator: "Abundiss Services",
  publisher: "Abundiss Services",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://sarem.mx",
    siteName: "SAREM",
    title: "SAREM | Sistema de Gestión Médica Inteligente con IA para Clínicas en México",
    description:
      "El sistema EMR dinámico con asistente IA de WhatsApp que transforma la gestión de clínicas médicas en México. Automatiza procesos y mejora la atención al paciente.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAREM - Sistema de Gestión Médica Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAREM | Sistema de Gestión Médica Inteligente con IA",
    description:
      "El sistema EMR dinámico con asistente IA de WhatsApp que transforma la gestión de clínicas médicas en México.",
    images: ["/og-image.png"],
    creator: "@abundiss",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sarem.mx",
  },
};

export const metadata: Metadata = seoMetadata;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "SAREM",
              description:
                "Sistema de gestión médica inteligente con asistente IA de WhatsApp para clínicas en México.",
              url: "https://sarem.mx",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "2295",
                priceCurrency: "MXN",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "2295",
                  priceCurrency: "MXN",
                  unitCode: "MON",
                },
              },
              provider: {
                "@type": "Organization",
                name: "Abundiss Services",
                url: "https://abundiss.com",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
            }),
          }}
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "SAREM - Abundiss Services",
              description:
                "Sistema de gestión médica inteligente para clínicas y consultorios médicos en México.",
              url: "https://sarem.mx",
              telephone: "+52-55-0000-0000",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MX",
              },
              areaServed: {
                "@type": "Country",
                name: "México",
              },
              serviceType: [
                "Sistema de gestión médica",
                "EMR",
                "Software médico",
                "IA para salud",
              ],
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Cuánto tiempo toma implementar SAREM en mi clínica?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La implementación básica toma menos de 24 horas. Para configuraciones más complejas con integraciones existentes, puede tomar entre 3-5 días hábiles.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Mis datos están seguros en SAREM?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutamente. SAREM cumple con las normativas de protección de datos de México (LFPDPPP) y utiliza encriptación de grado médico.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo integrar SAREM con mis sistemas actuales?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, SAREM cuenta con APIs abiertas que permiten integración con sistemas de laboratorio, imagenología, farmacias y más.",
                  },
                },
              ],
            }),
          }}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="MX" />
        <meta name="geo.country" content="México" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />

        {/* Favicon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%230a0d6f' rx='20' width='100' height='100'/><text y='.9em' x='50%' text-anchor='middle' font-size='70' fill='white'>S</text></svg>"
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}