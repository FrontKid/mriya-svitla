import { Hero } from "./(ui)";

import { InfoCard } from "@/widgets";
import { ISearchParams } from "@/shared/lib/types/tSearchParams";
import { ProductListWrapper } from "@/widgets/product-list/model/ProductListWrapper";

interface IPageProps {
  searchParams: Promise<ISearchParams>;
}

export default async function Home({ searchParams }: IPageProps) {
  return (
    <main className="mt-10">
      <Hero />
      <ProductListWrapper searchParams={searchParams} />
      <InfoCard />
    </main>
  );
}
