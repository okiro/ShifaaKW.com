import type { Metadata } from "next";
import { Almarai, DM_Mono } from "next/font/google";
import "./globals.css";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shifaa — Healthcare Technology for Kuwait",
  description:
    "One platform to manage appointments, queues, and clinic operations. iShifaa, Shifaa QMS, and Shifaa Clinic — empowering healthcare providers with modern technology.",
  keywords: [
    "healthcare",
    "Kuwait",
    "clinic management",
    "patient app",
    "queue management",
    "EMR",
    "Shifaa",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${almarai.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
