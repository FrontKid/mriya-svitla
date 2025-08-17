import { Metadata } from "next/types";

import { Hero } from "./(ui)";

import { InfoCard, ProductListWrapper } from "@/widgets";

export const metadata: Metadata = {
  title:
    "Освещение Feron, Ardero, Ledcoin, Linef, Levistella • mriya-svitla.com.ua",
  description:
    "Купить LED лампы и светильники Feron, Ardero, Ledcoin, Linef, Levistella в Украине. Люстры, трековые, встроенные, уличные и офисные решения. Заказывайте качественное освещение в Mriya Svitla — официальные бренды, быстрая доставка и консультация.",
  keywords: [
    "купить LED лампу Feron",
    "освещение Ardero",
    "светильники Ledcoin",
    "Linef Украина",
    "люстры Levistella",
  ],
};

export default function Home() {
  return (
    <main className="mt-10">
      <Hero />
      <ProductListWrapper />
      <InfoCard />
    </main>
  );
}
