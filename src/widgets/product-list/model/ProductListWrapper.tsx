import { XMLParser } from "fast-xml-parser";

import { ProductList } from "../ui/ProductList";

import { Filters } from "@/widgets/product-list/ui/Filters";
import { ISearchParams } from "@/shared/lib/types/tSearchParams";
import { ICategories } from "@/shared/lib/types/tCategories";

const data = await fetch(
  "https://feron.ua/system/storage/download/prom_ua_ru.xml",
);

const xmlText = await data.text();

const parser = new XMLParser({
  ignoreAttributes: false,
  textNodeName: "text",
  attributeNamePrefix: "",
});

const { yml_catalog } = parser.parse(xmlText);

interface IProductListWrapperProps {
  searchParams: Promise<ISearchParams>;
}
const ProductListWrapper = async ({
  searchParams,
}: IProductListWrapperProps) => {
  const { category } = yml_catalog.categories;
  const searchParam = await searchParams;
  const {
    query = "",
    categoryId = "",
    minCost = "",
    maxCost = "",
  } = searchParam ?? {};

  const options = {
    query,
    categoryId,
    minCost,
    maxCost,
  };

  const preparedCategories: ICategories[] = category.filter(
    (category: ICategories) => !!category.parentId,
  );

  return (
    <>
      <Filters categories={preparedCategories} />
      <ProductList products={yml_catalog.items.item} options={options} />
    </>
  );
};

export { ProductListWrapper };
