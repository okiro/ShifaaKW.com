import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const ADDON_NAMES: Record<string, { en: string; az: string }> = {
  sms: { en: "WhatsApp Notifications", az: "WhatsApp Bildirişləri" },
  report: { en: "Performance Reports (PDF)", az: "Hesabatlar (PDF)" },
  survey: { en: "Patient Satisfaction Surveys", az: "Xəstə Məmnuniyyəti Sorğuları" },
  support: { en: "Priority Support Upgrade", az: "Prioritet Dəstək" },
};

export async function POST(request: Request) {
  const body = await request.json();
  const { floors, addons, total, language } = body;

  if (
    typeof floors !== "number" ||
    floors < 0 ||
    floors > 7 ||
    typeof total !== "number" ||
    total <= 0 ||
    !addons ||
    typeof addons !== "object"
  ) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const lang = language === "az" ? "az" : "en";
  const activeAddons = Object.keys(addons)
    .filter((k) => addons[k] && ADDON_NAMES[k])
    .map((k) => ADDON_NAMES[k][lang]);

  const addonsText =
    activeAddons.length > 0 ? activeAddons.join(", ") : "None";

  const html = `
    <h2>New QMS Pricing Request — SAF Hospital</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
      <tr><td style="padding:6px 16px 6px 0;color:#666;">Floors</td><td style="padding:6px 0;font-weight:600;">${floors}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666;">Add-ons</td><td style="padding:6px 0;font-weight:600;">${addonsText}</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666;">Monthly Total</td><td style="padding:6px 0;font-weight:600;">₼${total}/mo</td></tr>
      <tr><td style="padding:6px 16px 6px 0;color:#666;">Language</td><td style="padding:6px 0;">${lang === "az" ? "Azerbaijani" : "English"}</td></tr>
    </table>
    <p style="margin-top:20px;font-size:13px;color:#999;">Sent from the SAF Hospital pricing calculator</p>
  `;

  try {
    await resend.emails.send({
      from: "SAF Calculator <onboarding@resend.dev>",
      to: "huseynov.orkhan@gmail.com",
      subject: `New QMS Pricing Request — SAF Hospital (₼${total}/mo)`,
      html,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
