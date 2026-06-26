export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  nombre: z.string().trim().min(2),
  email: z.email(),
  telefono: z.string().trim().min(7),
  clinica: z.string().trim().min(2),
});

const DEFAULT_CRM_RECIPIENT = "30031952.130294@parser.kommo.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getSiteUrl(request: Request) {
  const configuredUrl = process.env.SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.replace(/\/$/, "");
  }

  return new URL(request.url).origin;
}

function getTransport() {
  const host = process.env.RESEND_SMTP_HOST?.trim() || "smtp.resend.com";
  const port = Number.parseInt(process.env.RESEND_SMTP_PORT ?? "465", 10);
  const secure = port === 465 || port === 2465;
  const user = process.env.RESEND_SMTP_USER?.trim() || "resend";
  const pass = process.env.RESEND_SMTP_PASSWORD?.trim();

  if (!pass) {
    throw new Error("RESEND_SMTP_PASSWORD is required");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const parsed = contactSchema.safeParse({
    nombre: formData.get("nombre"),
    email: formData.get("email"),
    telefono: formData.get("telefono"),
    clinica: formData.get("clinica"),
  });

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Datos inválidos" },
      { status: 400 }
    );
  }

  const crmRecipient =
    process.env.CRM_LEAD_RECIPIENT?.trim() || DEFAULT_CRM_RECIPIENT;
  const copyRecipient = process.env.LEAD_COPY_RECIPIENT?.trim();
  const fromAddress =
    process.env.SMTP_FROM_EMAIL?.trim() ||
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "SAREM <no-reply@sarem.mx>";
  const siteUrl = getSiteUrl(request);
  const transport = getTransport();

  const { nombre, email, telefono, clinica } = parsed.data;
  const subject = `Nuevo lead SAREM: ${clinica}`;
  const html = `
    <div style="font-family: Arial, sans-serif; color: #151d22; line-height: 1.6;">
      <h2 style="color:#0a0d6f; margin-bottom: 16px;">Nuevo contacto desde SAREM</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr>
          <td style="padding: 10px 14px; background: #f6faff; border: 1px solid #e7eff7; font-weight: 700;">Nombre</td>
          <td style="padding: 10px 14px; border: 1px solid #e7eff7;">${escapeHtml(nombre)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; background: #f6faff; border: 1px solid #e7eff7; font-weight: 700;">Correo</td>
          <td style="padding: 10px 14px; border: 1px solid #e7eff7;">${escapeHtml(email)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; background: #f6faff; border: 1px solid #e7eff7; font-weight: 700;">Teléfono</td>
          <td style="padding: 10px 14px; border: 1px solid #e7eff7;">${escapeHtml(telefono)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 14px; background: #f6faff; border: 1px solid #e7eff7; font-weight: 700;">Clínica</td>
          <td style="padding: 10px 14px; border: 1px solid #e7eff7;">${escapeHtml(clinica)}</td>
        </tr>
      </table>
      <p style="margin-top: 18px; color: #464652;">
        Enviado desde <a href="${siteUrl}" style="color:#00677e;">${siteUrl}</a>
      </p>
    </div>
  `;

  const text = [
    "Nuevo contacto desde SAREM",
    `Nombre: ${nombre}`,
    `Correo: ${email}`,
    `Teléfono: ${telefono}`,
    `Clínica: ${clinica}`,
    `Sitio: ${siteUrl}`,
  ].join("\n");

  await transport.sendMail({
    from: fromAddress,
    to: crmRecipient,
    cc: copyRecipient || undefined,
    replyTo: email,
    subject,
    text,
    html,
  });

  return NextResponse.redirect(new URL("/gracias", siteUrl), 303);
}
