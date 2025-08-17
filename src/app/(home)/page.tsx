import { Hero } from "./(ui)";

import { InfoCard, ProductListWrapper } from "@/widgets";

export default function Home() {
  return (
    <main className="mt-10">
      <Hero />
      <ProductListWrapper />
      <InfoCard />
    </main>
  );
}
