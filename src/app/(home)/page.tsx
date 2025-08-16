import Image from "next/image";

import { EContacts } from "@/shared/lib/contacts";
import { InfoCard } from "@/widgets";
import { AppLink } from "@/shared/ui/Button";
import { ISearchParams } from "@/shared/lib/types/tSearchParams";
import { ProductListWrapper } from "@/widgets/product-list/model/ProductListWrapper";

// const filePath = path.join(process.cwd(), "./src/shared/api/prom_ua_ru.xml");
// const fileContent = fs.readFileSync(filePath, "utf8");
// const parser = new XMLParser({
//   ignoreAttributes: false,
//   textNodeName: "text",
//   attributeNamePrefix: "",
// });
// const { yml_catalog } = parser.parse(fileContent);

interface IPageProps {
  searchParams: Promise<ISearchParams>;
}

export default async function Home({ searchParams }: IPageProps) {
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
      <ProductListWrapper searchParams={searchParams} />
      <InfoCard />
    </main>
  );
}
