import { Metadata } from "next/types";

import { Hero } from "./(ui)";

import { InfoCard, ProductListWrapper } from "@/widgets";
import { ScrollToTopButton } from "@/features";

export const metadata: Metadata = {
  title: "Освітлення Feron, Ardero, Ledcoin, Лінеф, Levistella • Вторге.",
  description:
    "Купити LED лампи та світильники Feron, Ardero, Ledcoin, Linef, Levistella в Україні. Люстри, трекові, вбудовані, вуличні та офісні рішення. Замовляйте якісне освітлення в Mriya Svitla - офіційні бренди, швидка доставка та консультація.",
  keywords: [
    "купити LED лампу Feron",
    "освітлення Ardero",
    "світильники Ledcoin",
    "Linef Україна",
    "люстри Levistella",
  ],
};

export default function Home() {
  return (
    <main className="mt-10">
      <Hero />
      <ProductListWrapper />
      <InfoCard />
      <ScrollToTopButton />
    </main>
  );
}
