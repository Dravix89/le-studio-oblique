import type { Metadata } from "next";
import "./globals.css";
import ScrollUp from "../components/ScrollUp";

export const metadata: Metadata = {
  title: {
    default: "Le Studio Oblique - Studio Créatif",
    template: "%s — Le Studio Oblique",
  },
  description:
    "Studio indépendant de création digitale, d'identité de marque et d'expériences web.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        {children}
        <ScrollUp />
      </body>
    </html>
  );
}
