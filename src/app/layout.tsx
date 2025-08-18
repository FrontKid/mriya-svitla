import { Metadata } from "next/types";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Header, Footer } from "@/widgets";
import { inter } from "@/shared/lib/fonts";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Mriya Svitla - сучасне освітлення для дому та бізнесу",
    template: "%s | Mriya Svitla",
  },
  description:
    "Mriya Svitla - магазин якісного освітлення в Україні. LED лампи, люстри, трекові та вбудовані світильники, бренди Feron, Ardero, Ledcoin, Linef, Levistella",
  openGraph: {
    title: "Mriya Svitla - сучасне освітлення для дому та бізнесу",
    description:
      "LED лампи, люстри, трекові та вбудовані світильники від Feron, Ardero, Ledcoin, Linef, Levistella. Швидка доставка по Україні.",
    url: "https://mriya-svitla.com.ua",
    siteName: "Mriya Svitla",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mriya Svitla - сучасне освітлення для дому та бізнесу",
    description:
      "Офіційні бренди Feron, Ardero, Ledcoin, Linef, Levistella. Купуйте освітлення онлайн з доставкою по Україні.",
  },
  keywords: [
    "освітлення Україна",
    "купити LED лампу",
    "люстри Feron",
    "світильники Levistella",
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
    <html className="scroll-smooth" lang="ua">
      <body id="page-top" className={`${inter.className} bg-bg`}>
        <Header />
        <NuqsAdapter>{children}</NuqsAdapter>
        <Footer />
      </body>
    </html>
  );
}
