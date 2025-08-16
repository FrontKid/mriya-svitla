import fs from "fs";
import path from "path";

import Image from "next/image";
import { XMLParser } from "fast-xml-parser";
import clsx from "clsx";

import { EContacts } from "@/shared/lib/contacts";
import { Filters, InfoCard, ProductList } from "@/widgets";
import { AppLink } from "@/shared/ui/Button";
import { ICategories } from "@/shared/lib/types/tCategories";
import { ISearchParams } from "@/shared/lib/types/tSearchParams";
import { getPreparedProducts } from "@/shared/lib/helpers";

const filePath = path.join(process.cwd(), "./src/shared/api/prom_ua_ru.xml");
const fileContent = fs.readFileSync(filePath, "utf8");
const parser = new XMLParser({
  ignoreAttributes: false,
  textNodeName: "text",
  attributeNamePrefix: "",
});
const { yml_catalog } = parser.parse(fileContent);

interface IPageProps {
  searchParams: Promise<ISearchParams>;
}
export default async function Home({ searchParams }: IPageProps) {
  // const data = await fetch(
  //   "http://feron.ua/image/catalog/product_export--ru.csv",
  // );

  const { category } = yml_catalog.categories;
  const searchParam = await searchParams;
  const {
    query = "",
    categoryId = "",
    minCost = "",
    maxCost = "",
  } = searchParam ?? {};

  const hasParams = !!query || !!categoryId || !!minCost || !!maxCost;

  const preparedCategories: ICategories[] = category
    .filter((category: ICategories) => !!category.parentId)
    .map((category: ICategories) => {
      const { text, id } = category;
      return {
        text,
        id,
      };
    });

  const options = {
    query,
    categoryId,
    minCost,
    maxCost,
  };

  const showFilteredProducts =
    hasParams && !getPreparedProducts(yml_catalog.items.item, options).length;

  return (
    <main className="mt-10">
      <section className="section-container pb-12">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-title mb-2 leading-12 font-extrabold">
              Каталог освещения для бизнеса и дома
            </h1>
            <p className="text-muted mb-4">
              Проверенные бренды, быстрые поставки, помощь в подборе. Трековые,
              встраиваемые, уличные, офисные решения. Работаем c розницей и
              оптом.
            </p>
            <div className="flex items-center gap-3">
              <AppLink type="btn" href="#catalog">
                Открыть каталог
              </AppLink>
              <AppLink
                target="_blank"
                type="btn-outline"
                href={`https://wa.me/${EContacts.PHONE_NUMBER}`}
              >
                Написать в WhatsApp
              </AppLink>
            </div>
          </div>
          <Image
            className="border-line w-full rounded-2xl border border-solid"
            width={483}
            height={363}
            src="/hero/shop-place.jpg"
            alt="Освещение баннер"
          />
        </div>
      </section>

      <Filters categories={preparedCategories} />

      <section
        className={clsx("section-container pb-12", {
          "pt-12": showFilteredProducts,
        })}
      >
        <ProductList products={yml_catalog.items.item} options={options} />

        {showFilteredProducts && (
          <div className="flex flex-col items-center gap-3">
            <div className="text-muted mx-0 my-3 text-center">
              Ничего не найдено. Измените фильтры.
            </div>
          </div>
        )}
      </section>
      <InfoCard />
    </main>
  );
}
