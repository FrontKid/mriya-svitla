import { ProductList } from "../ui/ProductList";

import { Filters } from "@/widgets/product-list/ui/Filters";
import { ISearchParams } from "@/shared/lib/types/tSearchParams";
import { ICategories } from "@/shared/lib/types/tCategories";
import { getProducts } from "@/shared/lib/helpers";

interface IProductListWrapperProps {
  searchParams: Promise<ISearchParams>;
}
const ProductListWrapper = async ({
  searchParams,
}: IProductListWrapperProps) => {
  const { yml_catalog } = await getProducts();
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
