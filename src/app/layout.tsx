import { Metadata } from "next/types";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Header, Footer } from "@/widgets";
import { inter } from "@/shared/lib/fonts";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mriya Svitla — современное освещение для дома и бизнеса",
    template: "%s | Mriya Svitla",
  },
  description:
    "Mriya Svitla — магазин качественного освещения в Украине. LED лампы, люстры, трековые и встроенные светильники, бренды Feron, Ardero, Ledcoin, Linef, Levistella.",
  openGraph: {
    title: "Mriya Svitla — современное освещение для дома и бизнеса",
    description:
      "LED лампы, люстры, трековые и встроенные светильники от Feron, Ardero, Ledcoin, Linef, Levistella. Быстрая доставка по Украине.",
    url: "https://mriya-svitla.com.ua",
    siteName: "Mriya Svitla",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mriya Svitla — современное освещение для дома и бизнеса",
    description:
      "Официальные бренды Feron, Ardero, Ledcoin, Linef, Levistella. Покупайте освещение онлайн с доставкой по Украине.",
  },
  keywords: [
    "освещение Украина",
    "купить LED лампу",
    "люстры Feron",
    "светильники Levistella",
    "Ardero Ledcoin Linef",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="ru">
      <body id="page-top" className={`${inter.className} bg-bg`}>
        <Header />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}
