import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  formData.set("_url", "https://sarem-landing.vercel.app/");

  await fetch("https://formsubmit.co/contacto@abundiss.com", {
    method: "POST",
    body: formData,
  });

  return NextResponse.redirect(
    new URL("https://sarem-landing.vercel.app/gracias"),
    303
  );
}
