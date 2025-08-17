import { Hero } from "./(ui)";

import { InfoCard } from "@/widgets";
import { ProductListWrapper } from "@/widgets/product-list/model/ProductListWrapper";

export default async function Home() {
  return (
    <main className="mt-10">
      <Hero />
      <ProductListWrapper />
      <InfoCard />
    </main>
  );
}
